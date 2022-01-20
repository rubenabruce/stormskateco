import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import { downloadFiles } from "../../firebase/firebase.utils";

import { ShopItemCont, ItemImageCont, NamePriceCont } from "./shop-item.styles";

const ShopItem = ({ item: { images, name, price, id } }) => {
	let navigate = useNavigate();

	let imageRef = images[0];

	const [image, setImage] = useState("");

	useEffect(() => {
		downloadFiles(imageRef)
			.then((imageUrl) => setImage(imageUrl))
			.catch((e) => console.log(e));
	}, [imageRef]);

	return (
		<ShopItemCont onClick={() => navigate(`/shop/${id}`)}>
			<ItemImageCont className="item-image-cont" imageUrl={image}>
				<NamePriceCont className="name-price-cont">
					<p className="item-name">{name}</p>
					<p className="item-price">£{price}</p>
				</NamePriceCont>
			</ItemImageCont>
		</ShopItemCont>
	);
};

export default ShopItem;
