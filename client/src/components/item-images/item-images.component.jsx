import React, { useEffect, useState } from "react";
import { downloadFiles } from "../../firebase/firebase.utils";

import { ItemImagesCont, MainImage } from "./item-images.styles";

const ItemImages = ({ images, imageAlt }) => {
	const [imageUrls, setImageUrls] = useState([]);

	useEffect(() => {
		setImageUrls([]);
		images.forEach((imageRef) => {
			imageRef.includes("https://firebasestorage")
				? setImageUrls([...imageUrls, imageRef])
				: downloadFiles(imageRef)
						.then((imageUrl) => setImageUrls((oldArr) => [...oldArr, imageUrl]))

						.catch((e) => console.log(e));
		});
	}, []);

	return (
		<ItemImagesCont>
			<MainImage src={imageUrls[0]} alt={imageAlt} />
		</ItemImagesCont>
	);
};

export default ItemImages;
