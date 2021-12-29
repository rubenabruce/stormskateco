export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(item) => cartItemToAdd.id === item.id && cartItemToAdd.size === item.size
	);
	console.log(cartItemToAdd.size);
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === existingCartItem.id &&
			cartItemToAdd.size === cartItem.size
				? { ...cartItem, quantity: cartItem.quantity + cartItemToAdd.quantity }
				: cartItem
		);
	}

	return [...cartItems, cartItemToAdd];
};

export const updateQuantity = (cartItems, currentCartItem) => {
	if (currentCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === currentCartItem.id &&
			cartItem.size === currentCartItem.size
				? { ...cartItem, quantity: currentCartItem.quantity }
				: cartItem
		);
	}

	return cartItems;
};
