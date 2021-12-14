import styled from "styled-components";

const getOtherStyles = (props) => {
	return props.otherstyles ? props.otherstyles : "";
};

export const CustomButtonCont = styled.button`
	font-family: inherit;
	width: 100%;
  height 2rem;
  background-color: white;
  font-size: 1.3rem;
  cursor: pointer;

  ${getOtherStyles}
`;
