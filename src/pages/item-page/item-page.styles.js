import styled from "styled-components";

export const ItemPageCont = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	position: relative;
	width: 100%;
`;

export const MainItem = styled.section`
	display: flex;
	width: 80%;
	height: 80vh;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		height: unset;
	}
`;
