import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ProfileIcon from "./ProfileIcon.jsx";

export default function NavBar() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        bg="dark"
        expand="lg"
        variant="dark"
        className="mb-5"
      >
        <Link to="/">
          <Navbar.Brand className="navbar-brand text-dark px-3">
            <img
              src="./travel-planner-logo.png"
              width="32"
              height="32"
              alt="Travel Planner Brand"
            />
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
