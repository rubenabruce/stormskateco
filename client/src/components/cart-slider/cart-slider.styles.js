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

	/* &:before {
		content: "Cart";
		padding: 50px 70px;
		transform: rotate(90deg);
		left: -50px;
		top: 45%;
		background-color: inherit;
		position: relative;
		color: white;
	} */
`;

export const CartTab = styled.div`
	width: 140px;
	height: 100px;
	background-color: black;
	left: -110px;
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

	&:hover {
		background-color: #393939;
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

export const CartTitle = styled.h2`
	width: 100%;
	text-align: center;
`;

export const HiddenInput = styled.input`
	display: hidden;
`;

export const EmptyMessage = styled.span`
	margin: 50px auto 0;
	position: relative;
	font-size: 18px;
`;
