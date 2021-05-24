import React, { useState } from "react";
import styled from "styled-components";
import PlusCircleIcon from "./PlusCircleIcon.jsx";
// import HamburgerIcon from "./HamburgerIcon.jsx";

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

const Hamburger = styled.header`
  position: fixed;
  width: 60px;
  height: 60px;
  top: 100px;
  left: 0px;
  background-color: #0c9;
  color: #fff;
  border-radius: 20px;
  text-align: center;
  box-shadow: 2px 2px 1px #999;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SideBar({ children }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <Hamburger className="ml-3">
        <PlusCircleIcon onClick={() => setShowNav(!showNav)} />
      </Hamburger>
      <SideNav show={showNav}>
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
