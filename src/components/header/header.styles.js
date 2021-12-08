import styled from "styled-components";

export const HeaderCont = styled.div`
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 10%;
	position: relative;
	background-color: ${({ invert }) => (invert ? "white" : "black")};

	& > a {
		height: 100%;
		width: 140px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& > a > img {
		height: 100%;
		filter: ${({ invert }) => (invert ? "invert(1)" : "invert(0)")};
	}
`;
