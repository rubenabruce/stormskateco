import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import VideoPage from "./pages/videopage/videopage.component";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/videos" element={<VideoPage />} />
			</Routes>
		</div>
	);
}

export default App;
