import React from "react";
import styled from "styled-components";
// import PlusCircleIcon from "./SideBar.jsx";
import TripCards from "./TripCards.jsx";

const SideNav = styled.nav`
  width: 50rem;
  height: 100%;
  position: absolute;
  background-color: black;
  padding: 0 30px;
  transition: all 1s;
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
  list-style: none;
  display: flex;
  align-items: center;
  height: 5rem;
  color: white;
  text-decoration: none;
`;

const StyledNavLinks = styled.a`
  list-style: none;
  text-decoration: none;
  color: white;
`;

export default function SideBar({ children }) {
  return (
    <div>
      <SideNav>
        <StyledNavList>
          <StyledNavItem>
            <h5 className="lead">Filters</h5>
          </StyledNavItem>
          <div>{children}</div>
        </StyledNavList>
      </SideNav>
    </div>
  );
}
