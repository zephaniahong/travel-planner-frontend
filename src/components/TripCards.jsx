import React from "react";
import { Card, Nav, Badge } from "react-bootstrap";
import moment from "moment";
import TripRating from "./TripRating.jsx";
import { Link } from "react-router-dom";

function calcAvg(startDate, endDate, totalCost) {
  const start = moment(`${startDate}`);
  const end = moment(`${endDate}`);
  const diff = end.diff(start, "days");

  return Math.floor(totalCost / diff);
}

const TripCards = ({
  hotel,
  tripId,
  type,
  city,
  startDate,
  endDate,
  totalCost,
  stars,
}) => {
  return (
    <div>
      <Card className="mb-4">
        <Card.Header>
          <Card.Title className="lead mt-2">{hotel}</Card.Title>
          {<TripRating stars={stars} />}
          <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Info</Nav.Link>
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
            <h6>Star Point: {hotel}</h6>
            <p>Cost / Day: ${calcAvg(startDate, endDate, totalCost)}</p>
          </Card.Text>
          {/* This info will be passed to SingleTrip.jsx. */}
          <Link
            to={{
              pathname: `trips/${tripId}`,
              state: {
                from: "root",
              },
            }}
            className="btn btn-outline-dark"
          >
            View Trip
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TripCards;
