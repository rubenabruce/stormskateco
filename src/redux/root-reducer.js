import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";

export default combineReducers({
	shop: shopReducer,
	cart: cartReducer,
});
