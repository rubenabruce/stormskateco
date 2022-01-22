import styled from "styled-components";

export const VideoPageCont = styled.div`
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	height: 100%;
	padding: 4rem 0;

	@media screen and (max-width: 800px) {
		min-height: 95vh;
	}
`;

export const VideosCont = styled.div`
	width: 80%;
`;

export const IFrameCont = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: 56.25%;
	height: 0;
`;

export const IFrame = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: none;
`;
