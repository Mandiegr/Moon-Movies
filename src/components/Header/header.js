import { useState } from "react";
import {
  HeaderContainer,
  Logo,
  LogoImage,
  HamburgerButton,
  Nav,
  NavList,
  NavItem,
  StyledLink,
} from "./headerStyles";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <Logo>
        <LogoImage
          src="https://image.cdn2.seaart.me/2024-11-27/ct391gde878c739gdb8g-2/4f3a5ffafbc64cbd27db9958be05ff91_high.webp"
          alt="Moon Movies Logo"
        />
      </Logo>
      <HamburgerButton onClick={toggleMenu}>
        <span />
        <span />
      </HamburgerButton>
      <Nav isOpen={isMenuOpen}>
        <NavList>
          <NavItem>
            <StyledLink to={"/"}>HOME</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to={"/category/category/genere"}>CATEGORY</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to={"/movies"}>NEWS</StyledLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}
