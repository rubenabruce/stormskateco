import React from "react";

// import StormBackgroundTrans from "../../assets/stormBackground.gif";
import StormBackgroundVid from "../../assets/background-vid.mp4";
import LightningPoster from "../../assets/lightningPoster.png";

import textLogoSpinTrans from "../../assets/stormTextGifTrans2.gif";
// import vxSpin from "../../assets/vx1000.gif";
import tShirtSpinTrans from "../../assets/tshirtGifTrans3.gif";
// import vxSpin from "../../assets/vx1000 2.gif";
import vxSpin from "../../assets/vxSpinning.gif";

import {
	BackgroundVid,
	HomepageCont,
	SpinningLogo,
	OptionsCont,
	Option,
} from "./homepage.styles.js";

import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<React.Fragment>
			<BackgroundVid
				poster={LightningPoster}
				id="bgvid"
				playsinline
				autoPlay
				muted
				loop
			>
				<source src={StormBackgroundVid} type="video/mp4" />
			</BackgroundVid>
			<HomepageCont>
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
		</React.Fragment>
	);
};

export default Homepage;
