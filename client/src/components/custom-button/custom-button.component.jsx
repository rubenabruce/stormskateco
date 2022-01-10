import React from "react";
import { CustomButtonCont } from "./custom-button.styles";

const CustomButton = ({ children, flip, ...props }) => {
	return flip ? (
		<div className="flip">
			<div className="front">{children}</div>
			<div className="back">{children}</div>
		</div>
	) : (
		<CustomButtonCont {...props}>{children}</CustomButtonCont>
	);
};

export default CustomButton;
