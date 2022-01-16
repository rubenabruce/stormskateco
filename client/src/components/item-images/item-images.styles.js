import styled from "styled-components";

export const ItemImagesCont = styled.div`
	width: 55%;

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
`;

export const MainImage = styled.img`
	width: 100%;
	background-color: transparent;
`;
