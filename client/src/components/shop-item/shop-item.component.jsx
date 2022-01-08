import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import { downloadFiles } from "../../firebase/firebase.utils";

import { ShopItemCont, ItemImageCont, NamePriceCont } from "./shop-item.styles";

const ShopItem = ({ item: { images, name, price, id } }) => {
	let navigate = useNavigate();

	// const [imageUrls, setImageUrls] = useState([]);

	useEffect(() => {}, []);

	// setImageUrls([]);
	// images.forEach((imageRef) => {
	// 	downloadFiles(imageRef)
	// 		.then((imageUrl) => setImageUrls((oldArr) => [...oldArr, imageUrl]))
	// 		.catch((e) => console.log(e));
	// });
	return (
		<ShopItemCont onClick={() => navigate(`/shop/${id}`)}>
			<ItemImageCont className="item-image-cont" imageUrl={images[0]}>
				<NamePriceCont className="name-price-cont">
					<p className="item-name">{name}</p>
					<p className="item-price">£{price}</p>
				</NamePriceCont>
			</ItemImageCont>
		</ShopItemCont>
	);
};

export default ShopItem;
