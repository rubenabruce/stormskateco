import React from "react";

import { ShopItemCont, ItemImageCont, NamePriceCont } from "./shop-item.styles";

const ShopItem = ({ item: { imageUrl, name, price } }) => {
	return (
		<ShopItemCont>
			<ItemImageCont imageUrl={imageUrl}>
				<NamePriceCont>
					<p className="item-name">{name}</p>
					<p className="item-price">{price}</p>
				</NamePriceCont>
			</ItemImageCont>
		</ShopItemCont>
	);
};

export default ShopItem;
