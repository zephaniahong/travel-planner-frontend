import React, { useEffect, useContext } from "react";
import { PlanningContext, getUserTrips } from "../store.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import moment from "moment";

export default function AllTrips() {
  const { store, dispatch } = useContext(PlanningContext);
  const { userTrips } = store;

  useEffect(() => {
    getUserTrips(dispatch);
  }, [dispatch]);

  function dateDiff(startDate, endDate) {
    const start = moment(`${startDate}`);
    const end = moment(`${endDate}`);

    return end.diff(start, "days");
  }

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">All Trips</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {userTrips.map((trip) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{trip.hotel}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Cost / Day: $
                    {Math.floor(
                      trip.totalCost / dateDiff(trip.startDate, trip.endDate)
                    )}
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Start Planning</Card.Link>
                  <Card.Link href="#">Delete</Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
