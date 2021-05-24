import React, { useEffect, useContext } from "react";
import TripCards from "./TripCards.jsx";
import { getTrips, PlanningContext } from "../store.js";
import CountryMap from "./CountryMap.jsx";
import SideBar from "./SideBar.jsx";

const CountryTrips = () => {
  const { store, dispatch } = useContext(PlanningContext);
  const { trips } = store;

  useEffect(() => {
    getTrips(dispatch);
  }, []);

  return (
    <div>
      <SideBar>
        <h1>Hello World</h1>
        {trips.map((trip) => {
          return <h2>trip.hotelDetails</h2>;
        })}
      </SideBar>
      <CountryMap />
    </div>
  );
};

export default CountryTrips;
