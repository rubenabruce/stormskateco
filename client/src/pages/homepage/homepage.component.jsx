import React from "react";

import StormBackgroundVid from "../../assets/background-vid.mp4";
import LightningPoster from "../../assets/lightningPoster.png";

// import TextLogoSpinWebm from "../../assets/spinningTextLogowebm.webm";
import TextLogoSpinWebm from "../../assets/storm-text.webm";
import TextLogoSpinPoster from "../../assets/spinningTextLogoPoster.png";

import TShirtSpinWebm from "../../assets/spinningTwebm3.webm";
import TShirtSpinPoster from "../../assets/spinningTPoster.png";

// import VXSpinWebm from "../../assets/spinningVXwebm2.webm";
import VXSpinWebm from "../../assets/vx3.webm";
import VXSpinPoster from "../../assets/spinningVxPoster.png";

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
				playsInline
				autoPlay
				muted
				loop
				disablePictureInPicture
			>
				<source src={StormBackgroundVid} type="video/mp4" />
			</BackgroundVid>
			<HomepageCont>
				<SpinningLogo
					className="spinningLogo"
					poster={TextLogoSpinPoster}
					id="spinLogo"
					playsinline
					playsInline
					autoPlay
					muted
					loop
					disablePictureInPicture
				>
					<source src={TextLogoSpinWebm} type="video/webm" />
				</SpinningLogo>
				<OptionsCont className="optionsCont">
					<Link to={"/videos"}>
						<Option
							className="spinningVX option"
							poster={VXSpinPoster}
							id="spinVX"
							playsinline
							playsInline
							autoPlay
							muted
							loop
							disablePictureInPicture
						>
							<source src={VXSpinWebm} type="video/webm" />
						</Option>
					</Link>
					<Link to={"/shop"}>
						<Option
							className="spinningTshirt option"
							poster={TShirtSpinPoster}
							id="spinT"
							playsinline
							playsInline
							autoPlay
							muted
							loop
							disablePictureInPicture
						>
							<source src={TShirtSpinWebm} type="video/webm" />
						</Option>
					</Link>
				</OptionsCont>
			</HomepageCont>
		</React.Fragment>
	);
};

export default Homepage;
