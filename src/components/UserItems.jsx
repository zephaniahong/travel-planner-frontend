import { useContext } from "react";
import { PlanningContext } from "../store";
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
    <div className="row userItems">
      <div className="col">
        <h2>Sites</h2>
        {sites}
      </div>
      <div className="col">
        <h2>Food</h2>
        {food}
      </div>
      <div className="col">
        <h2>Activities</h2>
        {activities}
      </div>
    </div>
  );
};

export default UserItems;
