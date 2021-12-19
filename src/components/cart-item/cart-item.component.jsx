import React from "react";

import QuantitySelector from "../quantity-selector/quantity-selector.component";

import {
	CartItemCont,
	ImageCont,
	ItemDetails,
	Detail,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
	return (
		<CartItemCont>
			<ImageCont src={item.imageUrl} alt={item.name} />
			<ItemDetails>
				<Detail>{item.name.toUpperCase()}</Detail>
				<Detail>{item.size.toUpperCase()}</Detail>
				<Detail>£{item.price}</Detail>
				<QuantitySelector
					type={"cart-item"}
					item={item}
					otherStyles={
						"margin-bottom: 0; > input {background-color: transparent; color: white;} "
					}
				/>
			</ItemDetails>
		</CartItemCont>
	);
};

export default CartItem;
