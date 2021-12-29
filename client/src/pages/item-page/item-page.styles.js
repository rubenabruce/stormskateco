import styled from "styled-components";

export const ItemPageCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
	width: 100%;
`;

export const MainItem = styled.section`
	display: flex;
	margin-top: 2rem;
	width: 70%;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		height: unset;
		width: 90%;
	}
`;
