import React from "react";
import { Card, Nav, Button, Badge } from "react-bootstrap";
import moment from "moment";
import TripRating from "./TripRating.jsx";

function calcAvg(startDate, endDate, totalCost) {
  const start = moment(`${startDate}`);
  const end = moment(`${endDate}`);
  const diff = end.diff(start, "days");

  return Math.floor(totalCost / diff);
}

const TripCards = ({ hotel, type, city, startDate, endDate, totalCost }) => {
  return (
    <div>
      <Card className="mb-5">
        <Card.Header>
          <Nav.Item className="mb-2">
            <Card.Title className="lead mt-2">{hotel}</Card.Title>
            <span>{<TripRating />}</span>
          </Nav.Item>
          <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">More</Nav.Link>
            </Nav.Item>
            <Nav.Item className="ml-auto">
              <Nav.Link href="#disabled" disabled>
                <Badge pill variant="warning">
                  {type}
                </Badge>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <h5 className="text-capitalize">City: {city}</h5>
            <p>Cost / Day: ${calcAvg(startDate, endDate, totalCost)}</p>
          </Card.Text>
          <Button variant="dark">Find out more</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TripCards;
