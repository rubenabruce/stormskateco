import styled from "styled-components";

const getOtherStyles = (props) => {
	return props.otherStyles ? props.otherStyles : "";
};

export const QuantitySelectorCont = styled.div`
	white-space: nowrap;
	display: inline-flex;
	align-items: center;
	border: 1px solid #ddd;
	max-width: 130px;
	margin: 20px 0;

	${getOtherStyles}
`;

export const IncDecCont = styled.span`
	padding: 10px 20px;
	cursor: pointer;
`;

export const QuantityNum = styled.input`
	padding: 10px;
	text-align: center;
	border: none;
	width: 20px;
	font-family: "Red Rose";
	font-size: 1rem;
`;
