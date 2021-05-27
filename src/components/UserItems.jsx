import { useContext, useEffect } from "react";
import { PlanningContext } from "../store";
const UserItems = () => {
  const { store } = useContext(PlanningContext);
  const { items } = store;
  console.log(items);
  let sites, foods, activities;
  if (items !== null) {
    if (items.sites) {
      sites = items.sites.map((site) => (
        <div className="card" style={{ width: "20rem", height: "10rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{site.address}</p>
          </div>
        </div>
      ));
    }
    if (items.food) {
      foods = items.food.map((food) => (
        <div className="card" style={{ width: "20rem", height: "10rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{food.address}</p>
          </div>
        </div>
      ));
    }
    if (items.activites) {
      activities = items.activites.map((activity) => (
        <div className="card" style={{ width: "20rem", height: "10rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{activity.address}</p>
          </div>
        </div>
      ));
    }
    return (
      <div className="row">
        <div className="col">{sites}</div>
        <div className="col">{foods}</div>
        <div className="col">{activities}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default UserItems;
