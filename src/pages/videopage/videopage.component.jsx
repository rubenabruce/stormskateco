import React from "react";
// import ReactPlayer from "react-player";

import {
	VideoPageCont,
	VideosCont,
	IFrameCont,
	IFrame,
} from "./videopage.styles.js";
// AIzaSyDezgLN163IDtIJ2AHqawgNW0XuWrc9rKA
const VideoPage = () => {
	return (
		<VideoPageCont>
			<VideosCont>
				<IFrameCont>
					<IFrame
						title="Storm"
						src="https://www.youtube.com/embed/v2ioj-sAHr8?autoplay=1&loop=0&modestbranding=1&showinfo=0&rel=0"
						width="560"
						height="315"
						frameborder="0"
					></IFrame>
				</IFrameCont>
			</VideosCont>
		</VideoPageCont>
	);
};

export default VideoPage;
