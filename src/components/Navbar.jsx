import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
        <a className="navbar-brand text-dark px-3" href="#">
          <img
            src="./travel-planner-logo.png"
            width="32"
            height="32"
            alt="Travel Planner Brand"
          />
        </a>
        <ul className="mr-auto">
          <button className="btn btn-dark px-3 mx-3" type="button">
            Explore Map
          </button>
        </ul>
        <ul className="align-middle m-2 text-light">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </a>
        </ul>
      </nav>
    </div>
  );
}
