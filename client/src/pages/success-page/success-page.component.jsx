import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { clearAllFromCart } from "../../redux/cart/cart.actions";

// import SpinningLogoGif from "../../assets/stormLogoGif.gif";
import LogoSpinWebm from "../../assets/spinningLogowebm.webm";
import LogoSpinPoster from "../../assets/spinningLogoPoster.png";

import {
	SuccessPageCont,
	ContentCont,
	Message,
	SpinningLogo,
} from "./success-page.styles";

const SuccessPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(clearAllFromCart());
	});

	return (
		<SuccessPageCont>
			<ContentCont>
				<Message>Thank you for helping the cause</Message>
				<SpinningLogo
					poster={LogoSpinPoster}
					autoPlay
					id="spinLogo"
					playsinline
					muted
					loop
				>
					<source src={LogoSpinWebm} type="video/webm" />
				</SpinningLogo>
				<Message>Garms will be sent to the given address ASAP</Message>
			</ContentCont>
		</SuccessPageCont>
	);
};

export default SuccessPage;
