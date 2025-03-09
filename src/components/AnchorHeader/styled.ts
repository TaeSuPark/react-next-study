import styled from "styled-components"
import theme from "@/styles/theme"

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${theme.colors.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 32px;
`

export const NavItem = styled.div<{ $active: boolean }>`
  font-size: 18px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active }) =>
    $active ? theme.colors.primary : theme.colors["gray-800"]};
  cursor: pointer;
  padding: 8px 16px;
  border-bottom: 2px solid
    ${({ $active }) => ($active ? theme.colors.primary : "transparent")};
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`
