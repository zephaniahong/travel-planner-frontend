import { useState, useContext } from "react";
import WorldMap from "./WorldMap.jsx";
import { PlanningContext } from "../store";

const Home = () => {
  const { store } = useContext(PlanningContext);

  // only render home page if user has not selected country
  if (store.country === null) {
    return (
      <div className="text-center">
        <div
          className="w-100 d-flex justify-content-center mt-4"
          id="search-bar"
        ></div>

        <WorldMap />
      </div>
    );
  } else {
    return null;
  }
};

export default Home;
