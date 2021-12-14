import React from "react";
import { CustomButtonCont } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
	return <CustomButtonCont {...props}>{children}</CustomButtonCont>;
};

export default CustomButton;
