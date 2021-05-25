import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import SideBar from "./SideBar.jsx";
import GoogleSearch from "./GoogleSearch.jsx";

export default function TripPlanningPage() {
  return (
    <SideBar>
      <GoogleSearch />
    </SideBar>
  );
}
