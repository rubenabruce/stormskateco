import React from "react";
import { CustomButtonCont } from "./custom-button.styles";

const CustomButton = ({ children, flip, ...props }) => {
	return false ? (
		<CustomButtonCont className="flip" flip>
			<div className="front">{children}</div>
			<div className="back">{children}</div>
		</CustomButtonCont>
	) : (
		<CustomButtonCont {...props}>{children}</CustomButtonCont>
	);
};

export default CustomButton;
