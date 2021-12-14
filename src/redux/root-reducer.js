import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer";
import shopItemReducer from "./shop-item/shop-item.reducer";
import shopReducer from "./shop/shop.reducer";

export default combineReducers({
	shop: shopReducer,
	cart: cartReducer,
	shopItem: shopItemReducer,
});
