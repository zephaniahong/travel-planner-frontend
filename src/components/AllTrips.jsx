import React, { useEffect, useContext } from "react";
import { PlanningContext, getUserTrips } from "../store.js";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
                  <Button
                    href={`/createtrip/${trip.id}`}
                    variant="success"
                    className="mx-2"
                    type="submit"
                  >
                    Continue Planning
                  </Button>
                  <Button variant="outline-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
