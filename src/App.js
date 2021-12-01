import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
