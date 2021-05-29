import React, { useState, useEffect, useContext } from "react";
import { PlanningContext, getlikedItems } from "../store";
import SideBar from "./SideBar.jsx";
import GoogleSearch from "./GoogleSearch.jsx";
import UserItems from "./UserItems.jsx";

export default function TripPlanningPage() {
  const { store, dispatch } = useContext(PlanningContext);
  const { likedItems } = store;
  const [search, setSearch] = useState("google");
  const [type, setType] = useState("food");
  useEffect(() => {
    // get all liked items from db for this trip
    getlikedItems(dispatch);
  }, []);
  console.log(likedItems);
  if (search === "google") {
    return (
      <React.Fragment>
        <SideBar>
          <button onClick={() => setSearch("liked")}>Liked Items</button>
          <GoogleSearch />
        </SideBar>
        <UserItems />
      </React.Fragment>
    );
  } else if (search === "liked") {
    return (
      <React.Fragment>
        <SideBar>
          <button className="d-block" onClick={() => setSearch("google")}>
            Google Search
          </button>
          <button onClick={() => setType("food")}>Food</button>
          <button onClick={() => setType("sites")}>Sites</button>
          <button onClick={() => setType("activities")}>Activities</button>
        </SideBar>
        <UserItems />
      </React.Fragment>
    );
  }
  return null;
}
