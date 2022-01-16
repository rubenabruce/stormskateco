import React from "react";
import { v4 as uuidv4 } from "uuid";

import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";

import { ItemImagesCont, MainImage } from "./item-images.styles";

const ItemImages = ({ images, imageAlt }) => {
	// const [imageUrls, setImageUrls] = useState([]);

	// useEffect(() => {
	// 	setImageUrls([]);
	// 	images.forEach((imageRef) => {
	// 		imageRef.includes("https://firebasestorage")
	// 			? setImageUrls([...imageUrls, imageRef])
	// 			: downloadFiles(imageRef)
	// 					.then((imageUrl) => setImageUrls((oldArr) => [...oldArr, imageUrl]))

	// 					.catch((e) => console.log(e));
	// 	});
	// }, []);

	return (
		<ItemImagesCont>
			<AwesomeSlider
				className="aws-btn"
				animation="scaleOutAnimation"
				cssModule={[CoreStyles, AwesomeSliderStyles]}
			>
				{images.map((imageUrl, index) => (
					<MainImage data-src={imageUrl} alt={imageAlt} key={uuidv4()} />
				))}
			</AwesomeSlider>
		</ItemImagesCont>
	);
};

export default ItemImages;
// <MainImage src={images[0]} alt={imageAlt} />
