import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSize } from "../../redux/shop-item/shop-item.selector";

import {
	IncDecCont,
	QuantityNum,
	QuantitySelectorCont,
} from "./quantity-selector.styles";

const QuantitySelector = ({ sizes, size }) => {
	const [quantity, setQuantity] = useState(1);

	const handleDecrease = () => {
		quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity);
		console.log(quantity);
	};

	const handleIncrease = () => {
		console.log("sizes", sizes, "size", size);
		quantity < sizes[size] ? setQuantity(quantity + 1) : setQuantity(quantity);
	};

	return (
		<QuantitySelectorCont>
			<IncDecCont onClick={handleDecrease}>-</IncDecCont>
			<QuantityNum type="text" pattern="[0-9]*" value={quantity} readOnly />
			<IncDecCont onClick={handleIncrease}>+</IncDecCont>
		</QuantitySelectorCont>
	);
};

const mapStateToProps = createStructuredSelector({
	size: selectSize,
});

export default connect(mapStateToProps)(QuantitySelector);
