import styled from "styled-components";

export const HeaderCont = styled.div`
	height: 9vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5vh 10%;
	position: relative;
	background-color: ${({ invert }) => (invert ? "white" : "black")};

	@media screen and (max-width: 800px) {
		padding: 10px 5%;
	}

	& > a {
		height: 100%;
		width: 140px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& > a > video {
		height: 100%;
		filter: ${({ invert }) => (invert ? "invert(1)" : "invert(0)")};

		:hover {
			filter: ${({ invert }) => (invert ? "invert(0)" : "invert(1)")};
		}
	}
`;
