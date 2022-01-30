import React from "react";
import { Link } from "react-router-dom";

import {
	CustomButtonStyled,
	NotFoundCont,
	OverText,
	TextCont,
	UnderText,
} from "./not-found.styles";

const NotFound = () => {
	return (
		<NotFoundCont>
			<TextCont>
				<UnderText>404</UnderText>
				<OverText>PAGE NOT FOUND</OverText>
			</TextCont>
			<Link to="/">
				<CustomButtonStyled inverted>HOMEPAGE</CustomButtonStyled>
			</Link>
		</NotFoundCont>
	);
};

export default NotFound;
