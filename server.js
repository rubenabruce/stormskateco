require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const {
	initializeApp,
	applicationDefault,
	cert,
} = require("firebase-admin/app");
const {
	getFirestore,
	Timestamp,
	FieldValue,
} = require("firebase-admin/firestore");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const serviceAccount = {
	type: process.env.type,
	project_id: process.env.project_id,
	private_key_id: process.env.private_key_id,
	private_key: process.env.private_key.replace(/\\n/g, "\n"),
	client_email: process.env.client_email,
	client_id: process.env.client_id,
	auth_uri: process.env.auth_uri,
	token_uri: process.env.token_uri,
	auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
	client_x509_cert_url: process.env.client_x509_cert_url,
};
console.log(serviceAccount);

const app = express();

initializeApp({
	credential: cert(serviceAccount),
	databaseURL: "https://storm-skate-co.firebaseio.com",
});

const db = getFirestore();

app.options("/checkout", bodyParser.json());
app.options("/checkout", bodyParser.urlencoded({ extended: false }));
app.options("/checkout", cors());

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));

	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

const StormSkateCo =
	process.env.NODE_ENV === "production"
		? "https://storm-skate-co.herokuapp.com"
		: "http://localhost:3000";

app.post(
	"/checkout",
	[bodyParser.json(), bodyParser.urlencoded({ extended: false }), cors()],
	async (req, res) => {
		// parsing from string to array with objects inside
		const cartItems = await JSON.parse(req.body.cartItems);
		let lineItems = [];
		try {
			for (let item of cartItems) {
				const price = await stripe.prices.update(item.priceId, {
					metadata: { size: item.size },
				});
				console.log(price);
				lineItems.push({
					price: price.id,
					quantity: item.quantity,
				});
			}
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ["card"],
				shipping_address_collection: {
					allowed_countries: ["GB", "US", "FR", "BE", "CA", "DE", "GG", "NL"],
				},
				shipping_options: [
					{
						shipping_rate_data: {
							type: "fixed_amount",
							fixed_amount: {
								amount: 0,
								currency: "gbp",
							},
							display_name: "Free shipping (UK)",
							// Delivers between 5-7 business days
							delivery_estimate: {
								minimum: {
									unit: "business_day",
									value: 5,
								},
								maximum: {
									unit: "business_day",
									value: 7,
								},
							},
						},
					},
					{
						shipping_rate_data: {
							type: "fixed_amount",
							fixed_amount: {
								amount: 800,
								currency: "gbp",
							},
							display_name: "Next day (UK)",
							// Delivers in exactly 1 business day
							delivery_estimate: {
								minimum: {
									unit: "business_day",
									value: 1,
								},
								maximum: {
									unit: "business_day",
									value: 2,
								},
							},
						},
					},
					{
						shipping_rate_data: {
							type: "fixed_amount",
							fixed_amount: {
								amount: 1500,
								currency: "gbp",
							},
							display_name: "International",
							// Delivers in exactly 1 business day
							delivery_estimate: {
								minimum: {
									unit: "week",
									value: 1,
								},
								maximum: {
									unit: "week",
									value: 2,
								},
							},
						},
					},
				],
				line_items: [...lineItems],
				mode: "payment",
				success_url: `${StormSkateCo}/success`,
				cancel_url: `${StormSkateCo}/shop`,
			});
			res.redirect(303, session.url);
		} catch (e) {
			console.log(e);
		}
	}
);

const localWebhookEndpoint = process.env.LOCAL_WEBHOOK_ENDPOINT;

const fulfillOrder = async (session) => {
	console.log("Fulfilling order", session);
	// TODO: Send email to reciptient - will be done by stripe automatically

	// Reference to database
	const orderRef = db.collection("orders").doc(session.id);

	// Retrieving the items which have just been bought using the current session ID
	stripe.checkout.sessions.listLineItems(session.id, async (err, lineItems) => {
		if (err) {
			console.log(err);
			return err;
		} else {
			try {
				// Adding order reference to database
				await orderRef.set({
					totalPaid: session.amount_total,
					subTotal: session.amount_subtotal,
					currency: session.currency,
					customerDetails: { ...session.customer_details },
					paymentIntent: session.payment_intent,
					paymentStatus: session.payment_status,
					shipping: { ...session.shipping },
					stripeStatus: session.status,
					items: lineItems.data,
				});
				console.log("Order sucessfully added to database");
			} catch {
				console.log("Error occured when adding order to database");
			}
			try {
				// Updating stock

				lineItems.data.forEach(async (item) => {
					console.log("item", item);
					let firestoreItemRef = db.collection("shop").doc(item.price.product);
					let firestoreItemDoc = await (await firestoreItemRef.get()).data();
					console.log("firestoreItemDoc", firestoreItemDoc);
					let res = await firestoreItemRef.update({
						sizes: {
							...firestoreItemDoc.sizes,
							[item.price.metadata.size]:
								[firestoreItemDoc.sizes[item.price.metadata.size]] -
								item.quantity,
						},
					});
					console.log(res);
				});
			} catch {
				console.log("Error occured when updating stock.");
			}
		}
	});
	// TODO: Update stock in database
	// TODO: Send email to chilli
};

const createOrder = (session) => {
	// TODO: fill me in
	console.log("Creating order", session);
};

const emailCustomerAboutFailedPayment = (session) => {
	// TODO: fill me in
	console.log("Emailing customer", session);
};

app.post(
	"/webhook",
	express.raw({ type: "application/json" }),
	(request, response) => {
		const payload = request.body;
		const sig = request.headers["stripe-signature"];

		let event;

		console.log("webhook called.");

		try {
			console.log(
				`payload: ${payload}, sig: ${sig}, localWebhookEndpoint: ${localWebhookEndpoint}`
			);
			event = stripe.webhooks.constructEvent(
				payload,
				sig,
				localWebhookEndpoint
			);
			console.log("event:", event);
		} catch (err) {
			console.error("error message: ", err);
			response.status(400).send(`Webhook Error: ${err.message}`);
			return;
		}

		// Handle the checkout.session.completed event
		switch (event.type) {
			case "checkout.session.completed": {
				const session = event.data.object;
				// Save an order in your database, marked as 'awaiting payment'
				createOrder(session);

				// Check if the order is paid (for example, from a card payment)
				//
				// A delayed notification payment will have an `unpaid` status, as
				// you're still waiting for funds to be transferred from the customer's
				// account.
				if (session.payment_status === "paid") {
					fulfillOrder(session);
				}

				break;
			}

			case "checkout.session.async_payment_succeeded": {
				const session = event.data.object;

				// Fulfill the purchase...
				fulfillOrder(session);

				break;
			}

			case "checkout.session.async_payment_failed": {
				const session = event.data.object;

				// Send an email to the customer asking them to retry their order
				emailCustomerAboutFailedPayment(session);

				break;
			}
		}

		response.status(200);
	}
);

app.listen(PORT, (error) => {
	if (error) throw error;
	console.log("Running on port 5000");
});

// app.get("/api", (req, res) => {
// 	res.json({ message: "hello from server" });
// });
