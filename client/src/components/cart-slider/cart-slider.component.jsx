import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { createStructuredSelector } from "reselect";

import {
	selectCartItems,
	selectCartQuantity,
} from "../../redux/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";

import {
	CartItemsCont,
	CartSliderCont,
	CartTab,
	CartTitle,
	EmptyMessage,
	HiddenInput,
} from "./cart-slider.styles";
import CustomButton from "../custom-button/custom-button.component";

const CartSlider = ({ cartItems, cartQuantity }) => {
	const [open, setOpen] = useState(false);
	// TO SEND A REQUEST TO STRIPE. IT HAS TO BE A FORM.
	useEffect(() => {
		cartItems.length > 0 ? setOpen(false) : setOpen(false);
	}, [cartItems]);

	let parsedCartItems = JSON.stringify(cartItems);
	return (
		<CartSliderCont open={open}>
			{cartItems.length > 0 ? (
				<CartTab onClick={() => setOpen(!open)}>
					<p>Cart ({cartQuantity})</p>
				</CartTab>
			) : (
				""
			)}
			<CartItemsCont action="/checkout" method="POST">
				<CartTitle>Cart ({cartQuantity})</CartTitle>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={uuidv4()} item={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
				<HiddenInput
					id="cartItems"
					name="cartItems"
					type="hidden"
					value={parsedCartItems}
					readOnly
				/>
				{cartItems.length ? (
					<CustomButton
						inverted
						style={{ width: "90%", margin: "20px 0 60px 0" }}
						type="submit"
					>
						GO TO CHECKOUT
					</CustomButton>
				) : (
					""
				)}
			</CartItemsCont>
		</CartSliderCont>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartQuantity: selectCartQuantity,
});

export default connect(mapStateToProps)(CartSlider);
