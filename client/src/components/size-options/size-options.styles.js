import styled from "styled-components";

export const SizeOptionsCont = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 2rem;
	align-items: center;
	margin: 20px 0;

	& .${({ activeSize }) => activeSize} {
		border: 2px black solid;
	}
`;

export const OptionBtn = styled.button`
	width: 18%;
	height: 80%;
	background-color: ${({ active }) => (active ? "black" : "white")};
	border: 1px #ddd solid;
	font-family: "Reenie Beanie";
	font-size: 1.3rem;
	cursor: pointer;
	transition: all 300ms ease-in-out;
`;