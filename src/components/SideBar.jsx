import React from "react";
import styled from "styled-components";
// import PlusCircleIcon from "./SideBar.jsx";
import Scrollspy from "react-scrollspy";

const SideNav = styled.nav`
  width: 50rem;
  height: 100vh;
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

export default function SideBar() {
  return (
    <div>
      <SideNav>
        <StyledNavList>
          <StyledNavItem>
            <h5 className="lead">Filter</h5>
          </StyledNavItem>
          <div>
            <section id="section-1">section 1</section>
            <section id="section-2">section 2</section>
            <section id="section-3">section 3</section>
          </div>

          <Scrollspy
            items={["section-1", "section-2", "section-3"]}
            currentClassName="is-current"
          >
            <li>
              <a href="#section-1">section 1</a>
            </li>
            <li>
              <a href="#section-2">section 2</a>
            </li>
            <li>
              <a href="#section-3">section 3</a>
            </li>
          </Scrollspy>
        </StyledNavList>
      </SideNav>
    </div>
  );
}
