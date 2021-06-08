import { useContext } from "react";
import { PlanningContext } from "../store";
import { Container, Card, Col } from "react-bootstrap";

const UserItems = () => {
  const { store } = useContext(PlanningContext);
  const { items } = store;

  let sites, food, activities;
  sites = items.sites.map((site) => (
    <div className="card" style={{ width: "20rem", height: "10rem" }}>
      <div className="card-body">
        <h5 className="card-title">{site.name}</h5>
        <p className="card-text">{site.address}</p>
      </div>
    </div>
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
    <div className="card" style={{ width: "20rem", height: "10rem" }}>
      <div className="card-body">
        <h5 className="card-title">{activity.name}</h5>
        <p className="card-text">{activity.address}</p>
      </div>
    </div>
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
