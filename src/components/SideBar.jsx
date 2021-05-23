import React from "react";
import styled from "styled-components";
import PlusCircleIcon from "./SideBar.jsx";

const StyledNav = styled.nav`
  width: 15rem;
  height: 100vh;
  position: fixed;
  background-color: black;
`;

const StyledNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background: darkgrey;
  }
`;
const StyledNavItem = styled.li`
  display: flex;
  align-items: center;
  height: 5rem;
  color: white;
  text-decoration: none;

  &:hover {
    background: darkgrey;
  }
`;

const StyledNavLinks = styled.a`
  text-decoration: none;

  &:hover {
    background: darkgrey;
  }
`;

export default function SideBar() {
  return (
    <div>
      <StyledNav>
        <StyledNavList>
          <StyledNavItem>
            <StyledNavLinks>Home</StyledNavLinks>
            <PlusCircleIcon />
          </StyledNavItem>
        </StyledNavList>
      </StyledNav>
    </div>
  );
}
