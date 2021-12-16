import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { addItem } from "../../redux/cart/cart.actions";
import { selectSize } from "../../redux/shop-item/shop-item.selector";

import CustomButton from "../custom-button/custom-button.component";
import QuantitySelector from "../quantity-selector/quantity-selector.component";
import SizeOptions from "../size-options/size-options.component";

import {
	ItemDetailsCont,
	Name,
	Price,
	Description,
	ItemOption,
	Label,
} from "./item-details.styles";

const ItemDetails = ({
	item: { id, name, price, imageUrl, sizes },
	size,
	addItem,
}) => {
	let item = { id, name, price, imageUrl, size };

	const handleClick = () => {
		if (sizes[size] >= 1) {
			addItem(item);
		}
	};

	return (
		<ItemDetailsCont>
			<Name>{name.toUpperCase()}</Name>
			<Price>£{price}</Price>
			<Description>
				<li>Description</li>
			</Description>
			<ItemOption>
				<Label>SIZE:</Label>
				<SizeOptions />
			</ItemOption>
			<ItemOption>
				<Label>QUANTITY:</Label>
				<QuantitySelector sizes={sizes} />
			</ItemOption>
			<CustomButton
				disabled={!(sizes[size] >= 1)}
				onClick={() => handleClick()}
			>
				{sizes[size] >= 1 ? "ADD TO CART" : "SOLD OUT"}
			</CustomButton>
		</ItemDetailsCont>
	);
};

const mapStateToProps = createStructuredSelector({
	size: selectSize,
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
