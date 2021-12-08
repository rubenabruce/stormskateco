import styled from "styled-components";

export const ShopItemCont = styled.div`
	width: 90%;
	margin: auto;
	cursor: pointer;

	&:hover {
		.item-image-cont {
			.name-price-cont {
				opacity: 1;
			}
		}
	}
`;

export const ItemImageCont = styled.div`
	width: 100%;
	height: 25vw;
	overflow: hidden;
	background-image: url(${({ imageUrl }) => imageUrl});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	@media screen and (max-width: 600px) {
		height: 40vw;
	} ;;;
`;

export const NamePriceCont = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: rgba(51, 51, 51, 0.5);
	font-weight: 900;
	opacity: 0;
	transition: all 400ms ease-in-out;
	color: white;
`;
