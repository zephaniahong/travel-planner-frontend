import { useContext, useEffect } from "react";
import { PlanningContext } from "../store";
const UserItems = () => {
  const { store } = useContext(PlanningContext);
  const { items } = store;
  console.log(items);
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
    <div className="row">
      <div className="col">{sites}</div>
      <div className="col">{food}</div>
      <div className="col">{activities}</div>
    </div>
  );
};

export default UserItems;
