import React from "react";
import ShopItem from "../../components/shop-item/shop-item.component";

import SHOP_DATA from "./shop.data";

import { ShopPageCont, ShopGrid } from "./shoppage.styles.js";

// 			<h1 className="title">Garms</h1>

const ShopPage = () => {
	return (
		<ShopPageCont>
			<ShopGrid>
				{SHOP_DATA.items.map((item) => (
					<ShopItem key={item.id} item={item} />
				))}
			</ShopGrid>
		</ShopPageCont>
	);
};

export default ShopPage;
