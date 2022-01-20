import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import QuantitySelector from "../quantity-selector/quantity-selector.component";

import { clearItemFromCart } from "../../redux/cart/cart.actions.js";

import { downloadFiles } from "../../firebase/firebase.utils";

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

	const [image, setImage] = useState("");

	useEffect(() => {
		console.log(item);
		downloadFiles(item.images[0])
			.then((imageUrl) => setImage(imageUrl))
			.catch((e) => console.log(e));
	}, [item]);

	return (
		<CartItemCont>
			<ImageCont src={image} alt={item.name} />
			<ItemDetails>
				<Detail>{item.name.toUpperCase()}</Detail>
				<Detail>{item.size.toUpperCase()}</Detail>
				<Detail>£{item.price}</Detail>
				<QuantBinCont>
					<QuantitySelector
						type="cart-item"
						item={item}
						otherStyles={
							"margin-bottom: 0; margin-top: 0; > input {background-color: transparent; color: white;} .incDec {:hover {background-color: white; color: black}} "
						}
					/>
					<BinCont onClick={() => dispatch(clearItemFromCart(item))} />
				</QuantBinCont>
			</ItemDetails>
		</CartItemCont>
	);
};

export default CartItem;
