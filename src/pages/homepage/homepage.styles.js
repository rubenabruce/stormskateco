import styled from "styled-components";

export const HomepageCont = styled.div`
	background-image: url("../../assets/stormBackground.gif");
	background-size: cover;
	background-color: black;
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

export const SpinningLogo = styled.img`
	height: 80%;
	position: relative;
	top: -10%;

	@media screen and (max-width: 1000px) {
		height: unset;
		width: 100%;
		top: unset;
		margin-top: 50vh;
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
	}

	@media screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
		height: unset;
		position: relative;
		display: contents;
	}
`;

export const Option = styled.img`
	height: 70%;
	cursor: pointer;

	:hover {
		filter: invert(1);
	}

	@media screen and (max-width: 500px) {
		width: 100%;
	}
`;
