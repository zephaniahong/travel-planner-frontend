import React, { useEffect, useContext } from "react";
import TripCards from "./TripCards.jsx";
import { getTrips, PlanningContext } from "../store.js";
import CountryMap from "./CountryMap.jsx";
import SideBar from "./SideBar.jsx";
import PopFilter from "./countrytrip/PopFilter.jsx";
import PriceFilter from "./countrytrip/PriceFilter.jsx";

const avgRating = (ratingsArr, numUsers) => {
  let totalRating = 0;
  ratingsArr.forEach((item) => {
    totalRating += item.stars;
  });

  return totalRating / numUsers;
};

const CountryTrips = () => {
  const { store, dispatch } = useContext(PlanningContext);
  const { trips } = store;

  useEffect(() => {
    getTrips(dispatch);
  }, [dispatch]);

  return (
    <div>
      <SideBar>
        <PopFilter />
        <PriceFilter />
        {trips.map((trip) => {
          return (
            <TripCards
              key={trip.id.toString()}
              hotel={trip.hotel}
              type={trip.tripType}
              city={trip.city}
              startDate={trip.startDate}
              endDate={trip.endDate}
              totalCost={trip.totalCost}
              stars={
                trip.reviews ? avgRating(trip.reviews, trip.reviews.length) : 0
              }
            />
          );
        })}
      </SideBar>
      <CountryMap />
    </div>
  );
};

export default CountryTrips;
