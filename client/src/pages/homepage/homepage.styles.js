import styled from "styled-components";

export const BackgroundVid = styled.video`
	position: fixed;
	top: 50%;
	left: 50%;
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;
	z-index: -100;
	transform: translateX(-50%) translateY(-50%);
	background-color: black;
	background-size: cover;
	transition: 1s opacity;
`;

export const HomepageCont = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 1000px) {
		flex-direction: column;
		overflow: hidden scroll;
		align-items: center;
	}
`;

export const SpinningLogo = styled.video`
	height: 20%;
	position: relative;
	top: 20%;

	@media screen and (max-width: 1000px) {
		height: unset;
		width: 100%;
		top: unset;
		margin-top: 0vh;
	}
`;

export const OptionsCont = styled.div`
	height: 35%;
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: absolute;
	bottom: 20%;

	& .spinningTshirt {
		margin-right: 100px;
		margin-top: 20px;
	}

	@media screen and (max-width: 1000px) {
		align-items: center;
		height: unset;
		position: relative;
		bottom: 0;
		/* display: contents; */

		& .spinningTshirt {
			margin-right: unset;
		}
	}
`;

export const Option = styled.video`
	height: 70%;
	cursor: pointer;

	:hover {
		filter: invert(1);
	}

	@media screen and (max-width: 500px) {
		max-width: 40vw;
		max-height: 200px;
		pointer-events: none;
	}
`;
