import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";

import { CartSliderCont, CartTab, EmptyMessage } from "./cart-slider.styles";

const CartSlider = (cartItems) => {
	const [open, setOpen] = useState(false);

	return (
		<CartSliderCont open={open}>
			<CartTab onClick={() => setOpen(!open)}>
				<p>Cart ({cartItems.length})</p>
			</CartTab>
			{cartItems.length ? (
				cartItems.map((item) => <CartItem item={item} />)
			) : (
				<EmptyMessage>Your cart is empty</EmptyMessage>
			)}
		</CartSliderCont>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartSlider);
