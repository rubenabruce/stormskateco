// import SHOP_DATA from "../../pages/shoppage/shop.data";
import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
	shopItems: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case shopActionTypes.UPDATE_SHOP_ITEMS:
			return {
				shopItems: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
