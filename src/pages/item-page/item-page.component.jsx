import React from "react";
import { useParams } from "react-router-dom";

import ItemDetails from "../../components/item-details/item-details.component";
import ItemImages from "../../components/item-images/item-images.component";

import SHOP_DATA from "../shoppage/shop.data";

import { ItemPageCont, MainItem } from "./item-page.styles";

const ShopItemPage = () => {
	const id = useParams();
	let item = SHOP_DATA.items[id.id - 1];
	return (
		<ItemPageCont>
			<MainItem>
				<ItemImages imageUrl={item.imageUrl} imageAlt={item.name} />
				<ItemDetails item={item} />
			</MainItem>
			<div className="featured-items"></div>
		</ItemPageCont>
	);
};

export default ShopItemPage;
