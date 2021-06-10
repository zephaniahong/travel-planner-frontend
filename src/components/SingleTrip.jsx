import React, { useEffect, useContext, useState } from "react";
import {
  PlanningContext,
  addToLikedItems,
  dltFromLikedItems,
  resetCountryAction,
} from "../store.js";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import HeartIcon from "./HeartIcon.jsx";
import Notification from "./Notification.jsx";
import { useHistory } from "react-router-dom";

export default function SingleTrip({
  items,
  selectedTrip,
  onDeepLink,
  show,
  setToast,
}) {
  const { store, dispatch } = useContext(PlanningContext);
  const { country } = store;
  let { tripId } = useParams();
  const [itemMsg, setItemMsg] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (!selectedTrip) {
      onDeepLink(Number(tripId));
    }
  }, []);

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

  const handleBackBtnClick = () => {
    dispatch(resetCountryAction(null));
    history.push("/");
  };

  return (
    <Container fluid>
      <Notification show={show} setToast={setToast} itemMsg={itemMsg} />
      <h1 className="my-3 text-center font-weight-light">Trip Items</h1>
      <h2 className="text-center lead">
        Start point: <br />
        {selectedTrip.hotel}
      </h2>
      <Row className="mx-3 mb-5"></Row>
      <Row className="mx-3">
        <Col>
          <h1 className="text-warning">Food</h1>
          {items
            .filter((item) => item.type === "food")
            .map((item) => {
              return (
                <Card
                  bg={item.name.toLowerCase()}
                  border="warning"
                  key={item.id.toString()}
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>
                    <HeartIcon
                      heartColour={item.liked ? "red" : "grey"}
                      handleClick={() => {
                        if (!item.liked) {
                          addToLikedItems(dispatch, item.id);
                          setItemMsg(item);
                        } else if (item.liked) {
                          dltFromLikedItems(dispatch, item.id);
                          setItemMsg(item);
                        }
                        setToast(true);
                      }}
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="text-warning">
                      {item.name}
                    </Card.Title>
                    <Card.Text>{item.address}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
        </Col>
        <Col>
          <h1 className="text-primary">Activities</h1>
          {items
            .filter((item) => item.type === "activities")
            .map((item) => {
              return (
                <Card
                  bg={item.name.toLowerCase()}
                  border="primary"
                  git
                  key={item.id.toString()}
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>
                    <HeartIcon
                      heartColour={item.liked ? "red" : "grey"}
                      handleClick={() => {
                        if (!item.liked) {
                          addToLikedItems(dispatch, item.id);
                          setItemMsg(item);
                        } else if (item.liked) {
                          dltFromLikedItems(dispatch, item.id);
                          setItemMsg(item);
                        }
                        setToast(true);
                      }}
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="text-primary">
                      {item.name}{" "}
                    </Card.Title>
                    <Card.Text>{item.address}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
        </Col>
        <Col>
          <h1 className="text-info">Sites</h1>
          {items
            .filter((item) => item.type === "sites")
            .map((item) => {
              return (
                <Card
                  bg={item.name.toLowerCase()}
                  border="info"
                  key={item.id.toString()}
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>
                    <HeartIcon
                      heartColour={item.liked ? "red" : "grey"}
                      handleClick={() => {
                        if (!item.liked) {
                          addToLikedItems(dispatch, item.id);
                          setItemMsg(item);
                        } else if (item.liked) {
                          dltFromLikedItems(dispatch, item.id);
                          setItemMsg(item);
                        }
                        setToast(true);
                      }}
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="text-info">{item.name} </Card.Title>
                    <Card.Text>{item.address}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
        </Col>
      </Row>
      <Button variant="dark" className="px-3 m-5" onClick={handleBackBtnClick}>
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
    </Container>
  );
}
