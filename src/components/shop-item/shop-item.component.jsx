import React from "react";

import { useNavigate } from "react-router";

import { ShopItemCont, ItemImageCont, NamePriceCont } from "./shop-item.styles";

const ShopItem = ({ item: { imageUrl, name, price, id } }) => {
	let navigate = useNavigate();

	return (
		<ShopItemCont onClick={() => navigate(`/shop/${id}`)}>
			<ItemImageCont className="item-image-cont" imageUrl={imageUrl}>
				<NamePriceCont className="name-price-cont">
					<p className="item-name">{name}</p>
					<p className="item-price">£{price}</p>
				</NamePriceCont>
			</ItemImageCont>
		</ShopItemCont>
	);
};

export default ShopItem;
