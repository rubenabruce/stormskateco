import styled from "styled-components";

export const ItemImagesCont = styled.div`
	width: 55%;
	height: 70vh;
	max-height: 80vh;

	.awssld {
		height: 100%;

		--organic-arrow-color: black;
		--control-bullet-color: #636363;
		--control-bullet-active-color: black;

		.awssld__content {
			background-color: white;

			> img {
				position: relative;
				width: unset;
			}
		}
	}

	@media screen and (max-width: 800px) {
		width: 100%;
		margin-bottom: 40px;
	}

	@media screen and (max-width: 400px) {
		height: 50vh;
	}
`;

export const MainImage = styled.img`
	width: 100%;
	background-color: transparent;
`;
