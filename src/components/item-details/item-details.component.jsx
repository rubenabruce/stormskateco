import React from "react";

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

const ItemDetails = () => {
	return (
		<ItemDetailsCont>
			<Name>name</Name>
			<Price>price</Price>
			<Description>
				<li>Description</li>
			</Description>
			<ItemOption>
				<Label>size</Label>
				<SizeOptions />
			</ItemOption>
			<ItemOption>
				<Label>quantity</Label>
				<QuantitySelector />
			</ItemOption>
			<CustomButton>ADD TO CART</CustomButton>
		</ItemDetailsCont>
	);
};

export default ItemDetails;
