import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { v4 as uuidv4 } from "uuid";

import { selectShopItems } from "../../redux/shop/shop.selector";

import ShopItem from "../../components/shop-item/shop-item.component";

import { ShopPageCont, ShopGrid } from "./shoppage.styles.js";

const ShopPage = ({ shopItems }) => {
	console.log("shoppage", shopItems);
	return (
		<ShopPageCont>
			<ShopGrid>
				{shopItems.map((item) => (
					<ShopItem key={uuidv4()} item={item} />
				))}
			</ShopGrid>
		</ShopPageCont>
	);
};

const mapStateToProps = createStructuredSelector({
	shopItems: selectShopItems,
});

export default connect(mapStateToProps)(ShopPage);
