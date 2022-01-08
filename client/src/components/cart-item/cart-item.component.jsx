import React, { useEffect, useState } from "react";
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
import { downloadFiles } from "../../firebase/firebase.utils";

const CartItem = ({ item }) => {
	const dispatch = useDispatch();
	console.log("item:", item);

	const [imageUrl, setImageUrl] = useState([]);

	useEffect(() => {
		setImageUrl("");
		console.log("item-images[0]", item.images);
		item.images[0].includes("https://firebasestorage")
			? setImageUrl(item.images[0])
			: downloadFiles(item.images[0])
					.then((url) => setImageUrl(url))
					.catch((err) => console.log(err));
	}, [item]);

	return (
		<CartItemCont>
			<ImageCont src={imageUrl} alt={item.name} />
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
