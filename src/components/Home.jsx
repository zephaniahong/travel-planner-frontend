import { useState, useContext } from "react";
import WorldMap from "./WorldMap.jsx";
import CountrySearch from "./CountrySearch.jsx";
import { PlanningContext } from "../store";

const Home = () => {
  const { store } = useContext(PlanningContext);
  // state to know which country to highlight
  const [highlight, setHighlight] = useState(null);

  // only render home page if user has not selected country
  if (store.country === null) {
    return (
      <div>
        <CountrySearch setHighlight={setHighlight} />
        <WorldMap highlight={highlight} />
      </div>
    );
  } else {
    return null;
  }
};

export default Home;
