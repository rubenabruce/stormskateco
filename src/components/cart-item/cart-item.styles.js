import styled from "styled-components";

import { ReactComponent as BinSvg } from "../../assets/bin.svg";

export const CartItemCont = styled.div`
	width: 90%;
	height: 7rem;
	display: flex;
	margin: 20px auto;
`;

export const ImageCont = styled.img`
	height: 100%;
`;

export const ItemDetails = styled.div`
	margin-left: 0.4rem;
	justify-content: space-between;
	display: flex;
	flex-direction: column;
`;

export const Detail = styled.p`
	margin: 0.5rem 0;
	margin-block-start: 0;
	margin-block-end: 0;
`;

export const QuantBinCont = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-top: 20px;
`;

export const BinCont = styled(BinSvg)`
	align-self: center;
	cursor: pointer;
`;
