import React, { useContext } from "react";
import { PlanningContext } from "./store.js";

export default function SingleTrip({ match }) {
  const { store, dispatch } = useContext(PlanningContext);
  const { trips } = store;

  const singleTrip = trips.find((trip) => {
    return parseInt(match.params.tripId) === trip.id;
  });

  return (
    <>
      {match.isExact && (
        <>
          <h1>Hello Single Trip</h1>
          {trips.map((trip) => {
            return <p>{trip.id}</p>;
          })}
        </>
      )}
    </>
  );
}
