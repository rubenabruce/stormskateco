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
	background-color: invert("black");
	border-top: solid 2px white;

	@media screen and (max-width: 600px) {
		height: 60px;
	}

	@media screen and (max-width: 400px) {
		height: 45px;
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

	@media screen and (max-width: 800px) {
		width: 80%;
	}
	@media screen and (max-width: 400px) {
		width: 90%;
	}
`;

export const FooterLinks = styled.img`
	filter: invert(1);
	height: 100%;
`;

export const FooterStorm = styled.img`
	height: 100%;
`;
