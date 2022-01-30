import styled from "styled-components";
import CustomButton from "../../components/custom-button/custom-button.component";

export const NotFoundCont = styled.div`
	background-color: black;
	color: white;
	height: calc(81vh - 40px);
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const TextCont = styled.div`
	text-align: center;
	position: relative;
	height: 200px;
	width: 100%;
	overflow: hidden;
	margin-bottom: 40px;
`;

export const UnderText = styled.h1`
	font-size: 10rem;
	position: absolute;
	left: 50%;
	top: 0;
	transform: translate(-50%, -50%);
	opacity: 60%;
	user-select: none;
	z-index: 0;
`;

export const OverText = styled.h2`
	margin-top: 100px;
`;

export const CustomButtonStyled = styled(CustomButton)`
	width: 200px;
	z-index: 1;
	margin-bottom: 100px;
`;
