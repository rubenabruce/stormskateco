import { cartActionTypes } from "./cart.types";

export const addItem = (item) => ({
	type: cartActionTypes.ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: cartActionTypes.REMOVE_ITEM,
	payload: item,
});

export const updateCartItemQuantity = (item) => ({
	type: cartActionTypes.UPDATE_QUANTITY,
	payload: item,
});
