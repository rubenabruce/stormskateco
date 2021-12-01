import React from "react";

import "./shop-item.styles.scss";

const ShopItem = ({ item: { imageUrl, name, price } }) => {
	return (
		<div className="shop-item">
			<div className="item-image-cont">
				<img className="item-image" src={imageUrl} alt={name} />
			</div>
			<div className="name-price-cont">
				<p className="item-name">{name}</p>
				<p className="item-price">{price}</p>
			</div>
		</div>
	);
};

export default ShopItem;
