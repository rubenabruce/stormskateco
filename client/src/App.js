import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";

import Homepage from "./pages/homepage/homepage.component";
import ShopRoutes from "./pages/shop-routes/shop-routes.component";
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
			<Footer />
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
