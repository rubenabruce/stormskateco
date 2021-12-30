import React from "react";

import SpinningLogoGif from "../../assets/stormLogoGif.gif";

import {
	SuccessPageCont,
	ContentCont,
	Message,
	SpinningLogo,
} from "./success-page.styles";

const SuccessPage = () => {
	return (
		<SuccessPageCont>
			<ContentCont>
				<Message>Thank you for helping the cause</Message>
				<SpinningLogo src={SpinningLogoGif} alt="logo" />
				<Message>Garms will be sent to the given address ASAP</Message>
			</ContentCont>
		</SuccessPageCont>
	);
};

export default SuccessPage;
