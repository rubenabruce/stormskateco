import React, { useEffect } from "react";
// import ReactPlayer from "react-player";

import "./videopage.styles.scss";
// AIzaSyDezgLN163IDtIJ2AHqawgNW0XuWrc9rKA
const VideoPage = () => {
	useEffect(() => {
		window.scrollTo(0, 150);
		// fetch(
		// 	"https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=UUpRmvjdu3ixew5ahydZ67uA&key={AIzaSyDezgLN163IDtIJ2AHqawgNW0XuWrc9rKA}"
		// )
		// 	.then((res) => console.table(res))
		// 	.catch((err) => console.error(err));
	}, []);

	return (
		<div className="video-page">
			<div className="videos-cont">
				<div className="iframe-cont">
					<iframe
						title="Storm"
						src="https://www.youtube.com/embed/v2ioj-sAHr8?autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0"
						width="560"
						height="315"
						frameborder="0"
					></iframe>
					{
						// videosArr.map(videoSrc => <ReactPlayer url={videoSrc} />)
					}
				</div>
			</div>
		</div>
	);
};

export default VideoPage;
