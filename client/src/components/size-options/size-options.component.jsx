import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { updateSize } from "../../redux/shop-item/shop-item.actions";
import { selectSize } from "../../redux/shop-item/shop-item.selector";

import { OptionBtn, SizeOptionsCont } from "./size-options.styles";

const SizeOptions = ({ size, updateSize }) => {
	const handleClick = (size) => {
		updateSize(size);
	};

	return (
		<SizeOptionsCont activeSize={size}>
			<OptionBtn className="s" onClick={() => handleClick("s")}>
				S
			</OptionBtn>
			<OptionBtn className="m" onClick={() => handleClick("m")}>
				M
			</OptionBtn>
			<OptionBtn className="l" onClick={() => handleClick("l")}>
				L
			</OptionBtn>
			<OptionBtn className="xl" onClick={() => handleClick("xl")}>
				XL
			</OptionBtn>
			<OptionBtn className="xxl" onClick={() => handleClick("xxl")}>
				XXL
			</OptionBtn>
		</SizeOptionsCont>
	);
};

const mapStateToProps = createStructuredSelector({
	size: selectSize,
});

const mapDispatchToProps = (dispatch) => ({
	updateSize: (newSize) => dispatch(updateSize(newSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SizeOptions);
