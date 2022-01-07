import { shopActionTypes } from "./shop.types";

export const updateShopItems = (shopItems) => ({
	type: shopActionTypes.UPDATE_SHOP_ITEMS,
	payload: shopItems,
});
