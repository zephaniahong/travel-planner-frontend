import React from "react";
import styled from "styled-components";

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
`;
const StyledNavItem = styled.li`
  display: flex;
  align-items: center;
  height: 5rem;
  color: white;
  text-decoration: none;
`;

const StyledNavLinks = styled.a`
  text-decoration: none;
`;

export default function SideBar() {
  return (
    <div>
      <StyledNav>
        <StyledNavList>
          <StyledNavItem>
            <a href="#">Home</a>
          </StyledNavItem>
        </StyledNavList>
      </StyledNav>
    </div>
  );
}
