import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import shopItemReducer from "./shop-item/shop-item.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: "cart",
};

const rootReducer = combineReducers({
	shop: shopReducer,
	cart: cartReducer,
	shopItem: shopItemReducer,
});

export default persistReducer(persistConfig, rootReducer);
