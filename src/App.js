import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";

import Homepage from "./pages/homepage/homepage.component";
import ShopItemPage from "./pages/item-page/item-page.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import VideoPage from "./pages/videopage/videopage.component";

function App() {
	let location = useLocation();
	return (
		<div className="App">
			{location.pathname === "/" ? "" : <Header />}
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/shop/:id" element={<ShopItemPage />} />
				<Route path="/videos" element={<VideoPage />} />
			</Routes>
		</div>
	);
}

export default App;
