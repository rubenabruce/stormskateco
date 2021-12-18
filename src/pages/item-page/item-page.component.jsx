import React from "react";
import { connect } from "react-redux";

import ItemDetails from "../../components/item-details/item-details.component";
import ItemImages from "../../components/item-images/item-images.component";
import { selectShopItemById } from "../../redux/shop/shop.selector";

import { ItemPageCont, MainItem } from "./item-page.styles";

const ShopItemPage = ({ item }) => {
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

const mapStateToProps = (state, ownProps) => ({
	item: selectShopItemById(
		ownProps.location.pathname.substring(
			ownProps.location.pathname.substring(1).search(/[/]/g) + 2
		) - 1
	)(state),
});

export default connect(mapStateToProps)(ShopItemPage);
