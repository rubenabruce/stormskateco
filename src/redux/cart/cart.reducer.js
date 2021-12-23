import { cartActionTypes } from "./cart.types";
import { addItemToCart, updateQuantity } from "./cart.utils";

const INITIAL_STATE = {
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case cartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: [...state.cartItems],
			};
		case cartActionTypes.UPDATE_QUANTITY:
			return {
				...state,
				cartItems: updateQuantity(state.cartItems, action.payload),
			};
		case cartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) =>
						cartItem.id !== action.payload.id ||
						cartItem.size !== action.payload.size
				),
			};
		default:
			return state;
	}
};

export default cartReducer;
