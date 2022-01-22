import styled from "styled-components";

export const CartSliderCont = styled.div`
	height: 100vh;
	position: fixed;
	top: 0;
	width: 400px;
	right: ${({ open }) => (open ? "0;" : "-400")}px;
	transition: right 500ms ease-in-out;
	background-color: black;
	color: white;
	z-index: 10;

	@media screen and (max-width: 800px) {
		width: 100vw;
		right: ${({ open }) => (open ? "0;" : "-100vw")};
	}
`;

export const CartTab = styled.div`
	width: 140px;
	height: 100px;
	background-color: #000000a1;
	left: ${({ visible }) => (visible ? "-110px" : "0px")};
	transform: rotate(-90deg);
	top: 45%;
	position: absolute;
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	cursor: pointer;
	transition: all 300ms ease-in-out;

	&:hover {
		background-color: black;
	}
`;

export const CartItemsCont = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 100%;
	margin: 40px auto;
	overflow-y: scroll;
	::-webkit-scrollbar {
		background-color: transparent;
	}
`;

export const CartTitleCont = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CartTitle = styled.h2`
	width: 100%;
	text-align: center;
`;

export const MobileCartClose = styled.span`
	@media screen and (min-width: 800px) {
		display: none;
	}
`;

export const HiddenInput = styled.input`
	display: hidden;
`;

export const EmptyMessage = styled.span`
	margin: 50px auto 0;
	position: relative;
	font-size: 18px;
`;

export const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	position: absolute;
	cursor: none;
	background-color: white;
	z-index: 10;
`;
