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
          <h1 className="text-center mb-5">All Trips</h1>
        </Col>
      </Row>
      <Row>
        {userTrips.map((trip) => {
          return (
            <Col>
              <Card
                border="success"
                style={{ width: "18rem" }}
                className="m-2 text-center"
              >
                <Card.Body>
                  <Card.Title>{trip.tripType} Trip</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Cost / Day: $
                    {Math.floor(
                      trip.totalCost / dateDiff(trip.startDate, trip.endDate)
                    )}
                  </Card.Subtitle>
                  <Card.Text>
                    Start destination: <br /> {trip.hotel}
                  </Card.Text>
                  <Card.Link href="#">Continue Planning</Card.Link>
                  <Card.Link href="#">Delete</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
