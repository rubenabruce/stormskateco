import styled from "styled-components";

export const HomepageCont = styled.div`
	background-color: black;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
`;

export const SpinningLogo = styled.img`
	height: 80%;
	position: relative;
	top: -10%;
`;

export const OptionsCont = styled.div`
	height: 35%;
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: absolute;
	bottom: 20%;
`;

export const Option = styled.img`
	height: 70%;
	cursor: pointer;
`;
