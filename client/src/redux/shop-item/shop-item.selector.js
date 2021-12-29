import { createSelector } from "reselect";

const selectShopItem = (state) => state.shopItem;

export const selectQuantity = createSelector(
	[selectShopItem],
	(shopItem) => shopItem.quantity
);

export const selectSize = createSelector(
	[selectShopItem],
	(shopItem) => shopItem.size
);
