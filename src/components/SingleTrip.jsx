import React, { useContext, useEffect } from "react";
// import { PlanningContext } from "../store.js";
import { useParams } from "react-router-dom";

export default function SingleTrip({ match, selectedTrip, onDeepLink }) {
  // const { store, dispatch } = useContext(PlanningContext);
  // const { trips } = store;
  let { tripId } = useParams();

  // const singleTrip = trips.find((trip) => {
  //   return parseInt(match.params.tripId) === trip.id;
  // });

  useEffect(() => {
    if (!selectedTrip) {
      onDeepLink(tripId);
    }
  }, []);

  if (!selectedTrip) {
    return <div>Jerome</div>;
  }
  return <>{selectedTrip.name}</>;
}
