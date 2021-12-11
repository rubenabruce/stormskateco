import React from "react";
import ItemDetails from "../../components/item-details/item-details.component";
import ItemImages from "../../components/item-images/item-images.component";

import { ItemPageCont, MainItem } from "./item-page.styles";

const ShopItemPage = () => {
	return (
		<ItemPageCont>
			<MainItem>
				<ItemImages />
				<ItemDetails />
			</MainItem>
			<div className="featured-items"></div>
		</ItemPageCont>
	);
};

export default ShopItemPage;
