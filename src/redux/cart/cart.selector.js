import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsById = (cartItemId) =>
	createSelector([selectCartItems], (cartItems) =>
		cartItems.find((cartItem) => cartItem.id === cartItemId)
	);

export const selectCartQuantity = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumalatedQuantity, cartItem) =>
				accumalatedQuantity + cartItem.quantity,
			0
		)
);
