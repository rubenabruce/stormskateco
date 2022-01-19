import styled from "styled-components";

export const ShopPageCont = styled.div`
	background-color: white;
	color: black;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	min-height: 100vh;
`;

export const ShopGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: normal;
	row-gap: 20px;
	width: 80%;
	margin-top: 30px;
	column-gap: 20px;

	@media screen and (max-width: 600px) {
		width: 90%;

		grid-template-columns: repeat(2, 1fr);
	}
`;
