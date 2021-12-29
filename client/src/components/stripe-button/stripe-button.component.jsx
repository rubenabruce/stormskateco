import React from "react";
import axios from "axios";

import CustomButton from "../custom-button/custom-button.component";

const StripeButton = ({ cartItems, children }) => {
	const handleClick = () => {
		console.log("clicked");
		axios({
			url: "checkout",
			method: "post",
			data: {
				cartItems: cartItems,
			},
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "POST, GET",
			},
		})
			.then((res) => console.log(res.json()))
			.catch((err) => console.error(JSON.parse(err)));
	};

	return (
		<CustomButton
			onClick={() => handleClick()}
			inverted
			style={{ width: "90%", margin: "20px 0 60px 0" }}
		>
			{children}
		</CustomButton>
	);
};

export default StripeButton;
