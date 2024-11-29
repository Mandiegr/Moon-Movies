
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #00072d;

  @media (max-width: 768px) {
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  margin: 0;
`;

export const LogoImage = styled.img`
  width: 60px;
  height: 40px;
  margin-right: 10px;
`;

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    width: 100%;
    height: 3px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #00072d;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 150px;
    z-index: 1; 
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px 0;
  }
`;

export const NavItem = styled.li``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: pink;
  }
`;
