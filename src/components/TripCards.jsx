import React from "react";
import { Card, Nav, Button } from "react-bootstrap";

const TripCards = () => {
  return (
    <div>
      <Card className="mb-5">
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Add To Board</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">See This in Other Trips </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled" disabled>
                Remove
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="dark">Find out more</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TripCards;
