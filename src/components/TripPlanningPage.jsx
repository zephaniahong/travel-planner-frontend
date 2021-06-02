import React, { useState, useEffect, useContext } from "react";
import { PlanningContext, getlikedItems, addItem } from "../store";
import SideBar from "./SideBar.jsx";
import GoogleSearch from "./GoogleSearch.jsx";
import UserItems from "./UserItems.jsx";

export default function TripPlanningPage() {
  const { store, dispatch } = useContext(PlanningContext);
  const { likedItems, tripId } = store;
  const [search, setSearch] = useState("google");
  const [type, setType] = useState("food");

  useEffect(() => {
    // get all liked items from db for this trip
    getlikedItems(dispatch);
  }, []);

  const filteredLikedItems = likedItems.filter((item) => item.type === type);
  const displayLikedItems = filteredLikedItems.map((item) => (
    <div className="card mb-2" style={{ width: "18rem" }} key={item.id}>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.address}</p>
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          addItem(dispatch, item.type, tripId, item.name, item.address);
        }}
      >
        Add
      </button>
    </div>
  ));

  if (search === "google") {
    return (
      <React.Fragment>
        <SideBar>
          <div>
            <button
              className="btn btn-primary mb-5"
              onClick={() => setSearch("liked")}
            >
              Liked Items
            </button>
            <button
              className="btn btn-primary mb-5"
              onClick={() => setSearch("google")}
            >
              Google Search
            </button>
          </div>
          <GoogleSearch />
        </SideBar>
        <UserItems />
      </React.Fragment>
    );
  } else if (search === "liked") {
    return (
      <React.Fragment>
        <SideBar>
          <div>
            <button
              className="btn btn-primary mb-5"
              onClick={() => setSearch("liked")}
            >
              Liked Items
            </button>
            <button
              className="btn btn-primary mb-5"
              onClick={() => setSearch("google")}
            >
              Google Search
            </button>
          </div>
          <button
            className="btn btn-secondary mb-2"
            onClick={() => setType("food")}
          >
            Food
          </button>
          <button
            className="btn btn-secondary mb-2"
            onClick={() => setType("sites")}
          >
            Sites
          </button>
          <button
            className="btn btn-secondary mb-2"
            onClick={() => setType("activities")}
          >
            Activities
          </button>
          {displayLikedItems}
        </SideBar>
        <UserItems />
      </React.Fragment>
    );
  }
  return null;
}
