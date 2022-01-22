import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

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
	CartTitleCont,
	CartTitle,
	MobileCartClose,
	EmptyMessage,
	HiddenInput,
} from "./cart-slider.styles";
import CustomButton from "../custom-button/custom-button.component";

const CartSlider = React.memo(function CartSlider({ cartItems, cartQuantity }) {
	const [isOpen, setIsOpen] = useState(false);

	// TO SEND A REQUEST TO STRIPE. IT HAS TO BE A FORM.
	// If item is added to cart then cartslider will open. If no cartItems, then cartslider will close
	useEffect(() => {
		if (cartQuantity === 0) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	}, [cartQuantity]);

	let parsedCartItems = JSON.stringify(cartItems);
	return (
		<CartSliderCont open={isOpen}>
			<CartTab
				visible={cartItems.length > 0}
				onClick={() => setIsOpen(!isOpen)}
			>
				<p>Cart ({cartQuantity})</p>
			</CartTab>

			<CartItemsCont action="/checkout" method="POST">
				<CartTitleCont>
					<CartTitle>Cart ({cartQuantity})</CartTitle>
					<MobileCartClose onClick={() => setIsOpen(false)}>
						&#10005;
					</MobileCartClose>
				</CartTitleCont>
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem key={`${item.name}${item.size}`} item={item} />
					))
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
});

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartQuantity: selectCartQuantity,
});

export default connect(mapStateToProps)(CartSlider);
