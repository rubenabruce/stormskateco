import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import CartSlider from "./components/cart-slider/cart-slider.component";
import Header from "./components/header/header.component";

import Homepage from "./pages/homepage/homepage.component";
import ShopItemPage from "./pages/item-page/item-page.component";
import ShopRoutes from "./pages/shop-routes/shop-routes.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SuccessPage from "./pages/success-page/success-page.component";
import VideoPage from "./pages/videopage/videopage.component";

function App() {
	let location = useLocation();

	return (
		<div className="App">
			{location.pathname === "/" ? "" : <Header />}
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route path="/shop/*" element={<ShopRoutes location={location} />} />
				<Route path="/success" element={<SuccessPage />} />
				<Route path="/videos" element={<VideoPage />} />
			</Routes>
		</div>
	);
}

export default App;

// <Route
// 	exact
// 	path="/shop/:id"
// 	element={<ShopItemPage location={location} />}
// />
// <Route path="/shop" element={<ShopPage />} />
