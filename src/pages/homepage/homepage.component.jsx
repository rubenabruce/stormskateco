import React from "react";

import textLogoSpin from "../../assets/stormTextGif.gif";
import vxSpin from "../../assets/vx1000.gif";
import tShirtSpin from "../../assets/tshirtGif.gif";

import {
	HomepageCont,
	SpinningLogo,
	OptionsCont,
	Option,
} from "./homepage.styles.js";

import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<HomepageCont>
			<SpinningLogo
				className="spinningLogo"
				src={textLogoSpin}
				alt="Storm logo"
			/>
			<OptionsCont className="optionsCont">
				<Link to={"/videos"}>
					<Option
						className="spinningVX option"
						src={vxSpin}
						alt="Spinning VX1000"
					/>
				</Link>
				<Link to={"/shop"}>
					<Option
						className="spinningTshirt option"
						src={tShirtSpin}
						alt="Spinning T-shirt"
					/>
				</Link>
			</OptionsCont>
		</HomepageCont>
	);
};

export default Homepage;
