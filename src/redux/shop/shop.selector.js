import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
	[selectShop],
	(shop) => shop.shopItems.items
);

export const selectShopItemById = (itemId) =>
	createSelector([selectShopItems], (shopItems) =>
		shopItems.find((item) => item.id === parseInt(itemId))
	);
