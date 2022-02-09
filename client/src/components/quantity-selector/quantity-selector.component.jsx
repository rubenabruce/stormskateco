import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";

import { updateCartItemQuantity } from "../../redux/cart/cart.actions";
import { updateShopItemQuantity } from "../../redux/shop-item/shop-item.actions";
import { selectSize } from "../../redux/shop-item/shop-item.selector";
import { selectShopItemById } from "../../redux/shop/shop.selector.js";

import {
	IncDecCont,
	QuantityNum,
	QuantitySelectorCont,
} from "./quantity-selector.styles";

const QuantitySelector = ({
	type,
	item,
	itemSize,
	shopItem: { sizes },
	updateCartItemQuantity,
	updateShopItemQuantity,
	...props
}) => {
	const [quantity, setQuantity] = useState(item ? item.quantity : 1);

	useLayoutEffect(() => {
		setQuantity(1);
	}, [itemSize]);

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
			<IncDecCont className="incDec" onClick={handleDecrease}>
				-
			</IncDecCont>
			<QuantityNum type="text" pattern="[0-9]*" value={quantity} readOnly />
			<IncDecCont className="incDec" onClick={handleIncrease}>
				+
			</IncDecCont>
		</QuantitySelectorCont>
	);
};

const mapStateToProps = (state, ownProps) => ({
	shopItem: selectShopItemById(ownProps.item.id)(state),
	itemSize: selectSize(state),
});

const mapDispatchToProps = (dispatch) => ({
	updateShopItemQuantity: (quantity) =>
		dispatch(updateShopItemQuantity(quantity)),
	updateCartItemQuantity: (quantity) =>
		dispatch(updateCartItemQuantity(quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuantitySelector);
