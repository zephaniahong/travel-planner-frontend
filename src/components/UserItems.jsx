import { useContext } from "react";
import { PlanningContext } from "../store";
import { Container, Card, Col } from "react-bootstrap";

const UserItems = () => {
  const { store } = useContext(PlanningContext);
  const { items } = store;

  let sites, food, activities;
  sites = items.sites.map((site) => (
    <Card
      bg={site.name.toLowerCase()}
      border="info"
      key={site.id.toString()}
      style={{ width: "20rem", height: "10rem" }}
      className="mb-2"
    >
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title className="text-info">{site.name}</Card.Title>
        <Card.Text>{site.address}</Card.Text>
      </Card.Body>
    </Card>
  ));

  food = items.food.map((fd) => (
    <Card
      bg={fd.name.toLowerCase()}
      border="warning"
      key={fd.id.toString()}
      style={{ width: "20rem", height: "10rem" }}
      className="mb-2"
    >
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title className="text-warning">{fd.name}</Card.Title>
        <Card.Text>{fd.address}</Card.Text>
      </Card.Body>
    </Card>
  ));

  activities = items.activities.map((activity) => (
    <Card
      bg={activity.name.toLowerCase()}
      border="primary"
      key={activity.id.toString()}
      style={{ width: "20rem", height: "10rem" }}
      className="mb-2"
    >
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title className="text-primary">{activity.name}</Card.Title>
        <Card.Text>{activity.address}</Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <Container>
      <h1 className="text-center mt-5">Trip Planning</h1>
      <div className="row mt-5">
        <Col>
          <h2 className="text-warning">Food</h2>
          {food}
        </Col>
        <Col>
          <h2 className="text-primary">Activities</h2>
          {activities}
        </Col>
        <Col>
          <h2 className="text-info">Sites</h2>
          {sites}
        </Col>
      </div>
    </Container>
  );
};

export default UserItems;
