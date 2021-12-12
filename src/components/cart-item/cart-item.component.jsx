import React from "react";

import { CartItemCont, ImageCont, ItemDetails } from "./cart-item.styles";

const CartItem = (item) => {
	return (
		<CartItemCont>
			<ImageCont src={item.src} alt={item.name} />
			<ItemDetails></ItemDetails>
		</CartItemCont>
	);
};

export default CartItem;
