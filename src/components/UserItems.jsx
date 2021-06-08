import { useContext } from "react";
import { PlanningContext } from "../store";
import { Container, Row, Col } from "react-bootstrap";

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
    <div className="card" style={{ width: "20rem", height: "10rem" }}>
      <div className="card-body">
        <h5 className="card-title">{fd.name}</h5>
        <p className="card-text">{fd.address}</p>
      </div>
    </div>
  ));

  activities = items.activities.map((activity) => (
    <div className="card" style={{ width: "20rem", height: "10rem" }}>
      <div className="card-body">
        <h5 className="card-title">{activity.name}}</h5>
        <p className="card-text">{activity.address}</p>
      </div>
    </div>
  ));

  return (
    <Container>
      <div className="row userItems mt-5">
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
