import React, { useEffect, useContext } from "react";
import { PlanningContext } from "../store.js";
import { Container, Row, Col } from "react-bootstrap";

export default function AllTrips() {
  const { store, dispatch } = useContext(PlanningContext);

  useEffect(() => {}, []);

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">All Trips</h1>
        </Col>
      </Row>
      <Row>
        <Col>TripCards</Col>
      </Row>
    </Container>
  );
}
