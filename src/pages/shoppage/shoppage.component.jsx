import React from "react";
import ShopItem from "../../components/shop-item/shop-item.component";

import SHOP_DATA from "./shop.data";

import "./shoppage.styles.scss";

// 			<h1 className="title">Garms</h1>

const ShopPage = () => {
	return (
		<div className="shop-page">
			<div className="shop-grid">
				{SHOP_DATA.items.map((item) => (
					<ShopItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default ShopPage;
