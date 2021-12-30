import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import CartSlider from "./components/cart-slider/cart-slider.component";
import Header from "./components/header/header.component";

import Homepage from "./pages/homepage/homepage.component";
import ShopItemPage from "./pages/item-page/item-page.component";
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
				<Route
					exact
					path="/shop/:id"
					element={<ShopItemPage location={location} />}
				/>
				<Route path="/success" element={<SuccessPage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/videos" element={<VideoPage />} />
			</Routes>
			{location.pathname.includes("shop") ? <CartSlider /> : null}
		</div>
	);
}

export default App;
