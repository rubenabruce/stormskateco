import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { v4 as uuidv4 } from "uuid";

import {
	selectCartItems,
	selectCartQuantity,
} from "../../redux/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import {
	CartItemsCont,
	CartSliderCont,
	CartTab,
	CartTitle,
	EmptyMessage,
} from "./cart-slider.styles";

const CartSlider = ({ cartItems, cartQuantity }) => {
	const [open, setOpen] = useState(false);
	return (
		<CartSliderCont open={open}>
			<CartTab onClick={() => setOpen(!open)}>
				<p>Cart ({cartQuantity})</p>
			</CartTab>
			<CartItemsCont>
				<CartTitle>Cart ({cartQuantity})</CartTitle>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={uuidv4()} item={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
				{cartItems.length ? (
					<CustomButton
						inverted
						style={{ width: "90%", margin: "20px 0 60px 0" }}
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
