import styled from "styled-components";

export const FeaturedItemsCont = styled.section`
	width: 70%;
	margin-top: 2rem;
	margin-bottom: 100px;
	text-align: center;

	@media screen and (max-width: 800px) {
		width: 90%;
	}
`;

export const Title = styled.h2`
	width: 100%;
`;

export const ItemsGrid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 1rem;
	row-gap: 1rem;

	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
