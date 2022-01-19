import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";

import { ItemImagesCont, MainImage } from "./item-images.styles";
import { downloadFiles } from "../../firebase/firebase.utils";

const ItemImages = ({ images, imageAlt }) => {
	const [imageUrls, setImageUrls] = useState([]);

	useEffect(() => {
		setImageUrls([]);
		images.forEach((imageRef) => {
			downloadFiles(imageRef)
				.then((imageUrl) => setImageUrls((oldArr) => [...oldArr, imageUrl]))
				.catch((e) => console.log(e));
		});
	}, [images]);

	return (
		<ItemImagesCont>
			<AwesomeSlider
				className="aws-btn"
				animation="scaleOutAnimation"
				cssModule={[CoreStyles, AwesomeSliderStyles]}
			>
				{imageUrls.map((image) => (
					<MainImage data-src={image} alt={imageAlt} key={uuidv4()} />
				))}
			</AwesomeSlider>
		</ItemImagesCont>
	);
};

export default ItemImages;
