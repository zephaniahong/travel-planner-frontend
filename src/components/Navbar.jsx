import React, { useContext } from "react";
import { PlanningContext, newTrip, setTripId } from "../store";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ProfileIcon from "./ProfileIcon.jsx";
import styled, { keyframes } from "styled-components";

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// const LogoRotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 30s linear infinite;
// `;

export default function NavBar() {
  const { dispatch } = useContext(PlanningContext);
  const createTrip = () => {
    newTrip(dispatch, setTripId);
  };
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
        <Link to="/">
          <Navbar.Brand className="navbar-brand text-dark px-3">
            {/* <LogoRotate> */}
            <img
              src="./travel-planner-logo.png"
              width="32"
              height="32"
              alt="Travel Planner Brand"
            />
            {/* </LogoRotate> */}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav classname="mr-auto">
            <Link className="btn btn-secondary mx-2 my-1" to="/">
              Explore Map
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Link
              onClick={createTrip}
              className="btn btn-outline-success mx-2 my-1"
              to="/createtrip"
            >
              + Create Trip
            </Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={<ProfileIcon />}
              id="collasible-nav-dropdown"
              className="align-middle m-2 text-light"
              drop="left"
            >
              <NavDropdown.Item>
                <Link to="/alltrips">All Trips</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/settings">Settings</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link>Logout</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
