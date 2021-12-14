import React from "react";

import { ItemImagesCont, MainImage } from "./item-images.styles";

const ItemImages = ({ imageUrl, imageAlt }) => {
	return (
		<ItemImagesCont>
			<MainImage src={imageUrl} alt={imageAlt} />
		</ItemImagesCont>
	);
};

export default ItemImages;
