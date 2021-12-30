require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
app.options("/checkout", cors());

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client/build")));

	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

const StormSkateCo = "http://localhost:3000";

app.post("/checkout", cors(), async (req, res) => {
	// parsing from string to array with objects inside
	const cartItems = await JSON.parse(req.body.cartItems);
	const lineItems = cartItems.map((item) => ({
		price: item.priceId,
		quantity: item.quantity,
	}));
	const session = await stripe.checkout.sessions.create({
		line_items: [...lineItems],
		mode: "payment",
		success_url: `${StormSkateCo}/success`,
		cancel_url: `${StormSkateCo}/shop`,
	});
	res.redirect(303, session.url);
});

app.listen(PORT, (error) => {
	if (error) throw error;
	console.log("Running on port 5000");
});

// app.get("/api", (req, res) => {
// 	res.json({ message: "hello from server" });
// });
