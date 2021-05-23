import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Container, Col, Row } from "react-bootstrap";

export default function TripPlanningPage() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <DragDropContext>
            <h1>My Trip Planner</h1>
          </DragDropContext>
        </Col>
      </Row>
      <Row>
        <Col lg="2">Side Bar Goes Here</Col>
        <Col lg="10">Trip Kanban Board</Col>
      </Row>
    </Container>
  );
}
