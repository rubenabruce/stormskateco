import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { addItem } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selector";
import {
	selectQuantity,
	selectSize,
} from "../../redux/shop-item/shop-item.selector";

import CustomButton from "../custom-button/custom-button.component";
import QuantitySelector from "../quantity-selector/quantity-selector.component";
import SizeOptions from "../size-options/size-options.component";

import {
	ItemDetailsCont,
	Name,
	Price,
	Description,
	ItemOption,
	Label,
} from "./item-details.styles";

const ItemDetails = ({
	item: { id, name, price, imageUrl, sizes },
	size,
	quantity,
	addItem,
	cartItems,
}) => {
	let item = { id, name, price, imageUrl, size, quantity };
	// Checks to find if the current item has matching id and size to an item within the cart to know whether
	// to add to cart item or add NEW cart item
	let cartItem = cartItems
		? cartItems.find(
				(currentCartItem) =>
					currentCartItem.id === item.id && currentCartItem.size === item.size
		  )
		: undefined;

	const handleClick = () => {
		// sizes[size] >= 1 checks if item is in stock
		if (sizes[size] >= 1) {
			if (cartItem) {
				if (
					cartItem.size === size
						? sizes[size] >= cartItem.quantity + quantity
						: true
				) {
					addItem(item);
				}
				return;
			}
			addItem(item);
		}
	};

	return (
		<ItemDetailsCont>
			<Name>{name.toUpperCase()}</Name>
			<Price>£{price}</Price>
			<Description>
				<li>Description</li>
			</Description>
			<ItemOption>
				<Label>SIZE:</Label>
				<SizeOptions />
			</ItemOption>
			<ItemOption>
				<Label>QUANTITY:</Label>
				<QuantitySelector item={item} type={"shop-item"} sizes={sizes} />
			</ItemOption>
			<CustomButton
				disabled={!(sizes[size] >= 1)}
				onClick={() => handleClick()}
				style={{ margin: "20px 0" }}
			>
				{sizes[size] >= 1 ? "ADD TO CART" : "SOLD OUT"}
			</CustomButton>
		</ItemDetailsCont>
	);
};

const mapStateToProps = createStructuredSelector({
	size: selectSize,
	quantity: selectQuantity,
	cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
