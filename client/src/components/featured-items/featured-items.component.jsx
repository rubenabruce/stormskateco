import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { v4 as uuidv4 } from "uuid";

import { selectShopItems } from "../../redux/shop/shop.selector";
import ShopItem from "../shop-item/shop-item.component";

import { FeaturedItemsCont, ItemsGrid } from "./featured-items.styles";

const FeaturedItems = ({ shopItems }) => {
	return (
		<FeaturedItemsCont>
			<h2>OTHER GARMS</h2>
			<ItemsGrid>
				{shopItems.map((item, index) =>
					index < 3 ? <ShopItem item={item} key={uuidv4()} /> : ""
				)}
			</ItemsGrid>
		</FeaturedItemsCont>
	);
};

const mapStateToProps = createStructuredSelector({
	shopItems: selectShopItems,
});

export default connect(mapStateToProps)(FeaturedItems);
