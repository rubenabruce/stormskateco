import React from "react";
import { Link, useLocation } from "react-router-dom";

import TShirtSpinWebm from "../../assets/spinningTwebm3.webm";
import TShirtSpinPoster from "../../assets/spinningTPoster.png";

import VXSpinWebm from "../../assets/vx3.webm";
import VXSpinPoster from "../../assets/spinningVxPoster.png";

// import LogoSpinWebm from "../../assets/spinningLogowebm.webm";
import LogoSpinWebm from "../../assets/storm-logo.webm";
import LogoSpinPoster from "../../assets/spinningLogoPoster.png";

import { HeaderCont, HeaderVideos, TshirtVid } from "./header.styles.js";

const Header = () => {
	let location = useLocation();
	return (
		<HeaderCont invert={location.pathname.includes("/shop")}>
			<Link to="/videos">
				<HeaderVideos
					poster={VXSpinPoster}
					autoPlay
					id="spinVx"
					playsInline
					playsinline
					muted
					loop
					disablePictureInPicture
				>
					<source src={VXSpinWebm} type="video/webm" />
					Sorry, your browser doesn't support embedded videos.
				</HeaderVideos>
			</Link>
			<Link to="/">
				<HeaderVideos
					poster={LogoSpinPoster}
					autoPlay
					id="spinLogo"
					playsInline
					playsinline
					muted
					loop
					disablePictureInPicture
				>
					<source src={LogoSpinWebm} type="video/webm" />
					Sorry, your browser doesn't support embedded videos.
				</HeaderVideos>
			</Link>
			<Link to="/shop">
				<TshirtVid
					poster={TShirtSpinPoster}
					cla
					autoPlay
					id="spinT"
					playsInline
					playsinline
					muted
					loop
					disablePictureInPicture
				>
					<source src={TShirtSpinWebm} type="video/webm" />
					Sorry, your browser doesn't support embedded videos.
				</TshirtVid>
			</Link>
		</HeaderCont>
	);
};

export default Header;
