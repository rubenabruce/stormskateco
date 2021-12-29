import { shopItemActionTypes } from "./shop-item.types";

const INITIAL_STATE = {
	size: "m",
	quantity: 1,
};

const shopItemReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case shopItemActionTypes.UPDATE_QUANTITY:
			return {
				...state,
				quantity: action.payload,
			};
		case shopItemActionTypes.UPDATE_SIZE:
			return {
				...state,
				size: action.payload,
			};
		default:
			return state;
	}
};

export default shopItemReducer;
