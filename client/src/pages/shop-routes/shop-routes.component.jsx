import React from "react";
import { Route, Routes } from "react-router-dom";

import ShopPage from "../shoppage/shoppage.component";
import ShopItemPage from "../item-page/item-page.component";

const ShopRoutes = ({ location }) => {
	console.log(location);
	return (
		<div>
			<Routes>
				<Route exact path={``} element={<ShopPage />} />
				<Route path={`:id`} element={<ShopItemPage location={location} />} />
			</Routes>
		</div>
	);
};

export default ShopRoutes;
