import { useState, useContext } from "react";
import WorldMap from "./WorldMap.jsx";
import CountrySearch from "./CountrySearch.jsx";
import { PlanningContext } from "../store";

const Home = () => {
  const { store } = useContext(PlanningContext);

  // only render home page if user has not selected country
  if (store.country === null) {
    return (
      <div>
        <CountrySearch />
        <WorldMap />
      </div>
    );
  } else {
    return null;
  }
};

export default Home;
