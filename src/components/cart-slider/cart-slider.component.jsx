import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { v4 as uuidv4 } from "uuid";

import { selectCartItems } from "../../redux/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import {
	CartItemsCont,
	CartSliderCont,
	CartTab,
	CartTitle,
	EmptyMessage,
} from "./cart-slider.styles";

const CartSlider = ({ cartItems }) => {
	const [open, setOpen] = useState(false);
	console.log(cartItems);
	return (
		<CartSliderCont open={open}>
			<CartTab onClick={() => setOpen(!open)}>
				<p>Cart ({cartItems.length})</p>
			</CartTab>
			<CartItemsCont>
				<CartTitle>Cart ({cartItems.length})</CartTitle>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={uuidv4()} item={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
				<CustomButton inverted style={{ width: "90%" }}>
					GO TO CHECKOUT
				</CustomButton>
			</CartItemsCont>
		</CartSliderCont>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartSlider);
