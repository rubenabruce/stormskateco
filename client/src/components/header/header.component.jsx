import React from "react";
import { Link, useLocation } from "react-router-dom";

// import stormTextLogo from "../../assets/NEWERLOGO  .png";
import stormLogo from "../../assets/stormLogoGif.gif";
import videoLogo from "../../assets/vxSpinning.gif";
import garmLogo from "../../assets/tshirtGifTrans3.gif";

import { HeaderCont } from "./header.styles.js";

const Header = () => {
	let location = useLocation();
	return (
		<HeaderCont invert={location.pathname.includes("/shop")}>
			<Link to="/videos">
				<img src={videoLogo} alt="Spinning vx1000 camera" />
			</Link>
			<Link to="/">
				<img className="storm-logo" src={stormLogo} alt="Storm logo" />
			</Link>
			<Link to="/shop">
				<img src={garmLogo} alt="Spinning t-shirt" />
			</Link>
		</HeaderCont>
	);
};

export default Header;
