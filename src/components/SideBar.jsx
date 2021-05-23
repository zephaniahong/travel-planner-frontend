import React from "react";
import styled from "styled-components";
// import PlusCircleIcon from "./SideBar.jsx";
import { Container, Row, Col } from "react-bootstrap";
import Scrollspy from "react-scrollspy";

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

export default function SideBar() {
  return (
    <div>
      <SideNav>
        <StyledNavList>
          <StyledNavItem>
            <h5 className="lead">Filters</h5>
          </StyledNavItem>
          <Container>
            <Row>
              <Col md="3">
                {" "}
                <Scrollspy
                  items={[
                    "section1",
                    "section2",
                    "section3",
                    "section4",
                    "section5",
                  ]}
                  currentClassName="active"
                  offset={-100}
                >
                  <li>
                    <a href="#section1">Section 01</a>
                  </li>
                  <li>
                    <a href="#section2">Section 02</a>
                  </li>
                  <li>
                    <a href="#section3">Section 03</a>
                  </li>
                  <li>
                    <a href="#section4">Section 04</a>
                  </li>
                  <li>
                    <a href="#section5">Section 05</a>
                  </li>
                </Scrollspy>
              </Col>
              <Col md="9">
                <section id="section1">
                  <h2 className="text-light text-right mr-5 mb-5">
                    Food Card A
                  </h2>
                </section>
                <section id="section2">
                  <h2 className="text-light text-right mr-5 mb-5">
                    Food Card B
                  </h2>
                </section>
                <section id="section3">
                  <h2 className="text-light text-right mr-5 mb-5">
                    Trip Card A
                  </h2>
                </section>
                <section id="section4">
                  <h2 className="text-light text-right mr-5 mb-5">
                    Site Card A
                  </h2>
                </section>
                <section id="section5">
                  <h2 className="text-light text-right mr-5 mb-5">
                    Food Card C
                  </h2>
                </section>
              </Col>
            </Row>
          </Container>
        </StyledNavList>
      </SideNav>
    </div>
  );
}
