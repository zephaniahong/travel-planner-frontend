import React, { useContext, useEffect } from "react";
// import { PlanningContext } from "../store.js";
import { useParams } from "react-router-dom";

export default function SingleTrip({ match, selectedTrip, onDeepLink }) {
  let { tripId } = useParams();

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
