import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopItems } from "../../redux/shop/shop.selector";

import ShopItem from "../../components/shop-item/shop-item.component";

import { ShopPageCont, ShopGrid } from "./shoppage.styles.js";

const ShopPage = ({ shopItems }) => {
	return (
		<ShopPageCont>
			<ShopGrid>
				{shopItems.map((item) => (
					<ShopItem key={item.id} item={item} />
				))}
			</ShopGrid>
		</ShopPageCont>
	);
};

const mapStateToProps = createStructuredSelector({
	shopItems: selectShopItems,
});

export default connect(mapStateToProps)(ShopPage);
