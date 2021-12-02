import React from "react";

import "./shop-item.styles.scss";

const ShopItem = ({ item: { imageUrl, name, price } }) => {
	return (
		<div className="shop-item">
			<div
				className="item-image-cont"
				style={{ backgroundImage: `url(${imageUrl})` }}
			>
				<div className="name-price-cont">
					<p className="item-name">{name}</p>
					<p className="item-price">{price}</p>
				</div>
			</div>
		</div>
	);
};

export default ShopItem;
