import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";
import ProfileIcon from "./ProfileIcon.jsx";

export default function NavBar() {
  return (
    <div>
      <Nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
        <NavItem className="navbar-brand text-dark px-3" href="#">
          <img
            src="./travel-planner-logo.png"
            width="32"
            height="32"
            alt="Travel Planner Brand"
          />
        </NavItem>
        <NavItem className="mr-auto">
          <Link className="btn btn-secondary px-3 mx-3" to="/">
            Explore Map
          </Link>
        </NavItem>
        <NavItem>
          <Link className="btn btn-outline-success">+ Create Trip</Link>
        </NavItem>
        <NavItem>
          <ul className="align-middle m-2 text-light">
            <Link>
              <ProfileIcon />
            </Link>
          </ul>
        </NavItem>
      </Nav>
    </div>
  );
}
