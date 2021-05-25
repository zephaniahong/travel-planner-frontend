import React from "react";
import { Card, Nav, Button, Badge } from "react-bootstrap";

const TripCards = ({ hotel, type }) => {
  return (
    <div>
      <Card className="mb-5">
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Add To Board</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">More details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#disabled" disabled>
                <Badge pill variant="warning">
                  {type}
                </Badge>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>{hotel}</Card.Title>
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
