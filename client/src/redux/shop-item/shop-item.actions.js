import { shopItemActionTypes } from "./shop-item.types";

export const updateShopItemQuantity = (newQuantity) => ({
	type: shopItemActionTypes.UPDATE_QUANTITY,
	payload: newQuantity,
});

export const updateSize = (newSize) => ({
	type: shopItemActionTypes.UPDATE_SIZE,
	payload: newSize,
});
