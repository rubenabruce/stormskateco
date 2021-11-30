import React from "react";

import textLogoSpin from "../../assets/stormTextGif.gif";
import vxSpin from "../../assets/vx1000.gif";
import tShirtSpin from "../../assets/tshirtGif.gif";

import "./homepage.css";

const Homepage = () => {
	return (
		<div className="homepage">
			<img className="spinningLogo" src={textLogoSpin} alt="Storm logo" />
			<div className="optionsCont">
				<img className="spinningVX option" src={vxSpin} alt="Spinning VX1000" />
				<img
					className="spinningTshirt option"
					src={tShirtSpin}
					alt="Spinning T-shirt"
				/>
			</div>
		</div>
	);
};

export default Homepage;
