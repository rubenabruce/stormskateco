import React from "react";
import { Link, useLocation } from "react-router-dom";

import TShirtSpinWebm from "../../assets/spinningTwebm3.webm";
import TShirtSpinPoster from "../../assets/spinningTPoster.png";

import VXSpinWebm from "../../assets/spinningVXwebm.webm";
import VXSpinPoster from "../../assets/spinningVxPoster.png";

import LogoSpinWebm from "../../assets/spinningLogowebm.webm";
import LogoSpinPoster from "../../assets/spinningLogoPoster.png";

import { HeaderCont } from "./header.styles.js";

const Header = () => {
	let location = useLocation();
	return (
		<HeaderCont invert={location.pathname.includes("/shop")}>
			<Link to="/videos">
				<video
					poster={VXSpinPoster}
					autoPlay
					id="spinVx"
					playsinline
					muted
					loop
				>
					<source src={VXSpinWebm} type="video/webm" />
				</video>
			</Link>
			<Link to="/">
				<video
					poster={LogoSpinPoster}
					autoPlay
					id="spinLogo"
					playsinline
					muted
					loop
				>
					<source src={LogoSpinWebm} type="video/webm" />
				</video>
			</Link>
			<Link to="/shop">
				<video
					poster={TShirtSpinPoster}
					autoPlay
					id="spinT"
					playsinline
					muted
					loop
				>
					<source src={TShirtSpinWebm} type="video/webm" />
				</video>
			</Link>
		</HeaderCont>
	);
};

export default Header;
