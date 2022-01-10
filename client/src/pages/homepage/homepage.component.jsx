import React from "react";

import StormBackgroundTrans from "../../assets/stormBackground.gif";
import textLogoSpinTrans from "../../assets/stormTextGifTrans.gif";
// import vxSpin from "../../assets/vx1000.gif";
import tShirtSpinTrans from "../../assets/tshirtGifTrans2.gif";
import vxSpin from "../../assets/vx1000 2.gif";

import {
	HomepageCont,
	SpinningLogo,
	OptionsCont,
	Option,
} from "./homepage.styles.js";

import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<HomepageCont style={{ background: `url(${StormBackgroundTrans})` }}>
			<SpinningLogo
				className="spinningLogo"
				src={textLogoSpinTrans}
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
						src={tShirtSpinTrans}
						alt="Spinning T-shirt"
					/>
				</Link>
			</OptionsCont>
		</HomepageCont>
	);
};

export default Homepage;
