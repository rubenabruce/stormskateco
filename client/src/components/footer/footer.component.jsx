import React from "react";
import { useLocation } from "react-router-dom";

import {
	FooterCont,
	InnerFooter,
	FooterLinks,
	FooterStorm,
} from "./footer.styles";

import InstagramLogo from "../../assets/instagram.svg";
import YoutubeLogo from "../../assets/youtube.svg";
import StormLogo from "../../assets/NEWERLOGO  .png";

const Footer = () => {
	let location = useLocation();

	return (
		<FooterCont invert={location.pathname.includes("videos")}>
			<InnerFooter>
				<a
					href="https://www.instagram.com/stormskateco/"
					target="_blank"
					rel="noreferrer"
				>
					<FooterLinks src={InstagramLogo} alt="Instagram Logo" />
				</a>
				<FooterStorm src={StormLogo} alt="Storm" />
				<a
					href="https://www.youtube.com/c/charvao/featured"
					target="_blank"
					rel="noreferrer"
				>
					<FooterLinks src={YoutubeLogo} alt="Youtube Logo" />
				</a>
			</InnerFooter>
		</FooterCont>
	);
};

export default Footer;
