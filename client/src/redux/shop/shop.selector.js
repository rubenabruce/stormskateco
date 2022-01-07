import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector([selectShop], (shop) =>
	shop.shopItems ? shop.shopItems : []
);

export const selectShopItemById = (itemId) =>
	createSelector([selectShopItems], (shopItems) =>
		shopItems ? shopItems.find((item) => item.id === parseInt(itemId)) : null
	);
