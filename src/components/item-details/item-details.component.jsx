import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
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

const ItemDetails = ({ item: { id, name, price, sizes }, size }) => {
	console.log(id);
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
			<CustomButton>
				{sizes[size] >= 1 ? "ADD TO CART" : "SOLD OUT"}
			</CustomButton>
		</ItemDetailsCont>
	);
};

const mapStateToProps = createStructuredSelector({
	size: selectSize,
});

export default connect(mapStateToProps)(ItemDetails);
