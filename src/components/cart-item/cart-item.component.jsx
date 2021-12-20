import React from "react";
import { useDispatch } from "react-redux";

import QuantitySelector from "../quantity-selector/quantity-selector.component";

import { clearItemFromCart } from "../../redux/cart/cart.actions.js";

import {
	CartItemCont,
	ImageCont,
	ItemDetails,
	Detail,
	BinCont,
	QuantBinCont,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<CartItemCont>
			<ImageCont src={item.imageUrl} alt={item.name} />
			<ItemDetails>
				<Detail>{item.name.toUpperCase()}</Detail>
				<Detail>{item.size.toUpperCase()}</Detail>
				<Detail>£{item.price}</Detail>
				<QuantBinCont>
					<QuantitySelector
						type={"cart-item"}
						item={item}
						otherStyles={
							"margin-bottom: 0; margin-top: 0; > input {background-color: transparent; color: white; } "
						}
					/>
					<BinCont onClick={() => dispatch(clearItemFromCart(item))} />
				</QuantBinCont>
			</ItemDetails>
		</CartItemCont>
	);
};

export default CartItem;
