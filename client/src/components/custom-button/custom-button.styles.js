import styled from "styled-components";

const getOtherStyles = (props) => {
	return props.otherstyles ? props.otherstyles : "";
};

const inverted = (props) => {
	return props.inverted
		? "background-color: black; border: 1px white solid; color: white; :hover {background-color: white; color: black}"
		: "";
};

const disabled = (props) => {
	return props.disabled
		? "border: 1px rgba(16, 16, 16, 0.3) solid; cursor: not-allowed; "
		: "";
};

export const CustomButtonCont = styled.button`
	font-family: inherit;
	width: 100%;
  height 2rem;
  background-color: white;
  font-size: 1.3rem;
  cursor: pointer;
  border: 1px solid black;
	transition: all 200ms ease-in-out;

	:hover {background-color: black; color: white}

  ${getOtherStyles}
  ${inverted}
  ${disabled}	
`;
