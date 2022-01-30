import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { firestore } from "../../firebase/firebase.utils";

import { updateShopItems } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import ShopPage from "../shoppage/shoppage.component";
import ShopItemPage from "../item-page/item-page.component";
import CartSlider from "../../components/cart-slider/cart-slider.component";
import NotFound from "../not-found/not-found.component";

const ShopPageWithSpinner = WithSpinner(ShopPage);
const ShopItemPageWithSpinner = WithSpinner(ShopItemPage);

class ShopRoutes extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateShopItems } = this.props;
		const collectionRef = firestore.collection("shop");

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (collectionSnapShot) => {
				const shopItems = [];
				collectionSnapShot.forEach((doc) => shopItems.push(doc.data()));
				updateShopItems(shopItems);
				this.setState({ loading: false });

				// Code below is downloading all images for the shopdata we've just retrieved

				// shopItems.forEach((item, shopIndex) => {
				// 	item.images.forEach((image, index) => {
				// 		downloadFiles(image)
				// 			.then(
				// 				(itemImageUrl) =>
				// 					(shopItems[shopIndex].images[index] = itemImageUrl)
				// 			)
				// 			.then(() => {
				// 				updateShopItems(shopItems);
				// 				this.setState({ loading: false });
				// 			})
				// 			.catch((err) => console.log(err));
				// 	});
				// });
			}
		);
	}

	render() {
		const { location } = this.props;
		const { loading } = this.state;

		console.log(location);
		return (
			<div id="shopRoutes">
				<Routes>
					<Route
						exact
						path={``}
						element={<ShopPageWithSpinner isLoading={loading} />}
					/>
					<Route
						path={`:id`}
						element={
							<ShopItemPageWithSpinner
								isLoading={loading}
								location={location}
							/>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
				{loading ? null : <CartSlider />}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateShopItems: (shopItems) => dispatch(updateShopItems(shopItems)),
});

export default connect(null, mapDispatchToProps)(ShopRoutes);
