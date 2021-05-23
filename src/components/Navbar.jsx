import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
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
        <Navbar.Brand className="navbar-brand text-dark px-3" href="#">
          <img
            src="./travel-planner-logo.png"
            width="32"
            height="32"
            alt="Travel Planner Brand"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav classname="mr-auto">
            <Link className="btn btn-secondary" to="/">
              Explore Map
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Link className="btn btn-outline-success mr-3" to="/createtrip">
              + Create Trip
            </Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={<ProfileIcon />}
              id="collasible-nav-dropdown"
              className="align-middle m-2 text-light"
            >
              <NavDropdown.Item>All Trips</NavDropdown.Item>
              <NavDropdown.Item>Settings</NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
