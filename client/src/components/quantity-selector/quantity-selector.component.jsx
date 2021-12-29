import React, { useState } from "react";
import { connect } from "react-redux";

import { updateCartItemQuantity } from "../../redux/cart/cart.actions";
import { updateShopItemQuantity } from "../../redux/shop-item/shop-item.actions";
import { selectShopItemById } from "../../redux/shop/shop.selector.js";

import {
	IncDecCont,
	QuantityNum,
	QuantitySelectorCont,
} from "./quantity-selector.styles";

const QuantitySelector = ({
	type,
	item,
	shopItem: { sizes },
	updateCartItemQuantity,
	updateShopItemQuantity,
	...props
}) => {
	console.log(item.quantity);
	const [quantity, setQuantity] = useState(item ? item.quantity : 1);

	const handleDecrease = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
			type === "shop-item"
				? updateShopItemQuantity(quantity - 1)
				: updateCartItemQuantity({ ...item, quantity: quantity - 1 });
		} else {
			setQuantity(quantity);
		}
	};

	const handleIncrease = () => {
		if (quantity < sizes[item.size]) {
			setQuantity(quantity + 1);
			type === "shop-item"
				? updateShopItemQuantity(quantity + 1)
				: updateCartItemQuantity({ ...item, quantity: quantity + 1 });
		} else {
			setQuantity(quantity);
		}
	};

	return (
		<QuantitySelectorCont {...props}>
			<IncDecCont onClick={handleDecrease}>-</IncDecCont>
			<QuantityNum type="text" pattern="[0-9]*" value={quantity} readOnly />
			<IncDecCont onClick={handleIncrease}>+</IncDecCont>
		</QuantitySelectorCont>
	);
};

const mapStateToProps = (state, ownProps) => ({
	shopItem: selectShopItemById(ownProps.item.id)(state),
});

const mapDispatchToProps = (dispatch) => ({
	updateShopItemQuantity: (quantity) =>
		dispatch(updateShopItemQuantity(quantity)),
	updateCartItemQuantity: (quantity) =>
		dispatch(updateCartItemQuantity(quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuantitySelector);
