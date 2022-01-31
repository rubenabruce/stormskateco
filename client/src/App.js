import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import SuspenseComponent from "./components/suspense-component/suspense.component";
import NotFoundPage from "./pages/not-found-page/not-found-page.component";

const SuspendedHomepage = SuspenseComponent(
	lazy(() => import("./pages/homepage/homepage.component"))
);
const SuspendedSuccessPage = SuspenseComponent(
	lazy(() => import("./pages/success-page/success-page.component"))
);
const SuspendedVideoPage = SuspenseComponent(
	lazy(() => import("./pages/videopage/videopage.component"))
);

const SuspendedShopRoutes = SuspenseComponent(
	lazy(() => import("./pages/shop-routes/shop-routes.component"))
);

function App() {
	let location = useLocation();

	return (
		<div className="App">
			{location.pathname === "/" ? "" : <Header />}

			<Routes>
				<Route exact path="/" element={<SuspendedHomepage />} />
				<Route
					path="/shop/*"
					element={<SuspendedShopRoutes location={location} />}
				/>
				<Route path="/success" element={<SuspendedSuccessPage />} />
				<Route path="/videos" element={<SuspendedVideoPage />} />
				<Route path="*" element={<NotFoundPage />} />
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
