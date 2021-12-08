import styled from "styled-components";

export const ShopPageCont = styled.div`
	background-color: white;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const ShopGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: normal;
	row-gap: 20px;
	width: 80%;
	margin-top: 30px;

	@media screen and (max-width: 600px) {
		width: 90%;
		grid-template-columns: repeat(2, 1fr);
	}
`;
