import styled from "styled-components";

export const ItemDetailsCont = styled.div`
	width: 40%;

	@media screen and (max-width: 800px) {
		width: 100%;
		margin-top: 1rem;
	}
`;

export const Name = styled.h2`
	margin-top: 0;
`;

export const Price = styled.h3`
	color: #636363;
`;

export const Description = styled.ul``;

export const ItemOption = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	font-size: 1.3rem;
`;
