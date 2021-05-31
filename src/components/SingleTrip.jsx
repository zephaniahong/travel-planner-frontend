import React, { useEffect, useContext, useState } from "react";
import {
  PlanningContext,
  getlikedItems,
  addToLikedItems,
  dltFromLikedItems,
} from "../store.js";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon.jsx";
import Notification from "./Notification.jsx";

export default function SingleTrip({ items, selectedTrip, onDeepLink }) {
  console.log("============ SingleTrip rendering! ============ ");
  const { store, dispatch } = useContext(PlanningContext);
  let { tripId } = useParams();
  const { likedItems } = store;
  const [show, setShow] = useState(false);
  const [itemMsg, setItemMsg] = useState({});

  useEffect(() => {
    if (!selectedTrip) {
      onDeepLink(Number(tripId));
    }
    getlikedItems(dispatch); // get all user liked items for this trip
  }, []);

  // See if item that is to be clicked is in liked items.
  const likedIds = likedItems.map((item) => item.id);

  if (!selectedTrip) {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Trip is empty!</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  const setToast = (bool) => {
    setShow(bool);
  };

  return (
    <Container fluid>
      <Notification show={show} setToast={setToast} itemMsg={itemMsg} />
      <Row className="mx-3 mt-3 mb-5">
        <Link to="/">
          <Button variant="dark" className="px-3 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
              />
            </svg>
          </Button>
        </Link>
        <h1>{selectedTrip.hotel}</h1>
      </Row>
      <Row className="mx-3">
        <Col>
          <h1>Food</h1>
          {items
            .filter((item) => item.type === "food")
            .map((item) => {
              return (
                <Card
                  bg={item.name.toLowerCase()}
                  key={item.id.toString()}
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>
                    <HeartIcon
                      heartColour={likedIds.includes(item.id) ? "red" : "grey"}
                      handleClick={() => {
                        if (!likedIds.includes(item.id)) {
                          addToLikedItems(dispatch, item.id);
                          setItemMsg(item);
                        } else if (likedIds.includes(item.id)) {
                          dltFromLikedItems(dispatch, item.id);
                          setItemMsg(item);
                        }

                        setToast(true);
                      }}
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.address}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
        </Col>
        <Col>
          <h1>Activities</h1>
          {items
            .filter((item) => item.type === "activities")
            .map((item) => {
              return (
                <Card
                  bg={item.name.toLowerCase()}
                  key={item.id.toString()}
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>
                    <HeartIcon
                      heartColour={likedIds.includes(item.id) ? "red" : "grey"}
                      handleClick={() => {
                        if (!likedIds.includes(item.id)) {
                          addToLikedItems(dispatch, item.id);
                          setItemMsg(item);
                        } else if (likedIds.includes(item.id)) {
                          dltFromLikedItems(dispatch, item.id);
                          setItemMsg(item);
                        }

                        setToast(true);
                      }}
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{item.name} </Card.Title>
                    <Card.Text>{item.address}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
        </Col>
        <Col>
          <h1>Sites</h1>
          {items
            .filter((item) => item.type === "sites")
            .map((item) => {
              return (
                <Card
                  bg={item.name.toLowerCase()}
                  key={item.id.toString()}
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header></Card.Header>
                  <Card.Body>
                    <Card.Title>{item.name} </Card.Title>
                    <Card.Text>{item.address}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
        </Col>
      </Row>
    </Container>
  );
}
