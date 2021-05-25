import React, { useState } from "react";
import styled from "styled-components";
import PlusCircleIcon from "./PlusCircleIcon.jsx";

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

export default function SideBar({ children }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="sidebar-btn">
        <PlusCircleIcon setShowNav={setShowNav} showNav={showNav} />
      </header>

      <div show={showNav}>
        <div className={showNav ? "sidenav active" : "sidenav"}>
          <StyledNavList>
            <StyledNavItem>
              <h5 className="lead">Filters</h5>
            </StyledNavItem>
            <div>{children}</div>
          </StyledNavList>
        </div>
      </div>
    </>
  );
}
