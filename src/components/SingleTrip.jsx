import React, { useContext, useEffect } from "react";
import { PlanningContext } from "../store.js";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function SingleTrip({ selectedTrip, onDeepLink }) {
  const { store, dispatch } = useContext(PlanningContext);
  let { tripId } = useParams();

  useEffect(() => {
    if (!selectedTrip) {
      onDeepLink(tripId);
    }
  }, []);

  if (!selectedTrip) {
    return (
      <div>
        <h1>Trip is empty!</h1>
      </div>
    );
  }

  return (
    <Container fluid>
      <Row className="mx-3 mt-3 mb-5">
        <h1>Trip Id: {selectedTrip.id}</h1>
      </Row>
      <Row className="mx-3">
        <Col>
          <h1>Food</h1>
        </Col>
        <Col>
          <h1>Activities</h1>
        </Col>
        <Col>
          <h1>Sites</h1>
        </Col>
      </Row>
    </Container>
  );
}
