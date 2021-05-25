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

  console.log("trips", trips);

  return (
    <div>
      <SideBar>
        {trips.map((trip) => {
          return (
            <TripCards
              hotel={trip.hotel}
              type={trip.tripType}
              city={trip.city}
              startDate={trip.startDate}
              endDate={trip.endDate}
              totalCost={trip.totalCost}
            />
          );
        })}
      </SideBar>
      <CountryMap />
    </div>
  );
};

export default CountryTrips;
