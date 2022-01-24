import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import FeaturedItems from "../../components/featured-items/featured-items.component";
import ItemDetails from "../../components/item-details/item-details.component";
import ItemImages from "../../components/item-images/item-images.component";

import { selectShopItemById } from "../../redux/shop/shop.selector";

import { ItemPageCont, MainItem } from "./item-page.styles";

const ShopItemPage = ({ item }) => {
	const pageRef = useRef(null);

	useEffect(() => {
		// console.log(document.getElementById("shopRoutes").scrollTop);
		window.scrollTo(0, 0);
		console.log("yo");
	}, [item]);

	return (
		<ItemPageCont ref={pageRef}>
			<MainItem>
				<ItemImages images={item.images} imageAlt={item.name} />
				<ItemDetails item={item} />
			</MainItem>
			<FeaturedItems />
		</ItemPageCont>
	);
};

const mapStateToProps = (state, ownProps) => ({
	item: selectShopItemById(
		ownProps.location.pathname.substring(
			ownProps.location.pathname.substring(1).search(/[/]/g) + 2
		)
	)(state),
});

export default connect(mapStateToProps)(ShopItemPage);
