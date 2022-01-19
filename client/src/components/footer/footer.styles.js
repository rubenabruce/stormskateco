import styled from "styled-components";

export const FooterCont = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
	height: 80px;
	position: relative;
	bottom: 0px;
	padding: 20px;

	background-color: ${({ invert }) => (invert ? "white" : "black")};

	< div < a < img {
		filter: invert ${({ invert }) => (invert ? "(0)" : "(1)")};
	}
`;

export const InnerFooter = styled.div`
	height: 100%;
	width: 60%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	> a {
		height: 80%;
	}
`;

export const FooterLinks = styled.img`
	filter: invert(1);
	height: 100%;
`;

export const FooterStorm = styled.img`
	height: 100%;
`;
