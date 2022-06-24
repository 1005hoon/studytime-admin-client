import React from "react";
import LogoImg from "../../../assets/dgby_logo.png";
import { StyledHeader, StyledHeaderContainer, StyledHeaderLogo } from "./header.styles";

interface HeaderProps {
	children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<StyledHeaderLogo src={LogoImg}></StyledHeaderLogo>
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

export default Header;
