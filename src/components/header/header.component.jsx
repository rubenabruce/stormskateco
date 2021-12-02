import React from "react";

// import stormTextLogo from "../../assets/NEWERLOGO  .png";
import stormLogo from "../../assets/stormLogoGif.gif";
import videoLogo from "../../assets/vx1000.gif";
import garmLogo from "../../assets/tshirtGif.gif";

import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<Link to="/videos">
				<img src={videoLogo} alt="Spinning vx1000 camera" />
			</Link>
			<Link to="/">
				<img className="storm-logo" src={stormLogo} alt="Storm logo" />
			</Link>
			<Link to="/shop">
				<img src={garmLogo} alt="Spinning t-shirt" />
			</Link>
		</div>
	);
};

export default Header;
