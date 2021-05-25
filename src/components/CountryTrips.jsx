import React, { useEffect, useContext } from "react";
import TripCards from "./TripCards.jsx";
import { getTrips, PlanningContext } from "../store.js";
import CountryMap from "./CountryMap.jsx";
import SideBar from "./SideBar.jsx";
import PopFilter from "./countrytrip/PopFilter.jsx";
import PriceFilter from "./countrytrip/PriceFilter.jsx";
import DayFilter from "./countrytrip/DayFilter.jsx";
import LocFilter from "./countrytrip/LocFilter.jsx";

const avgRating = (ratingsArr, numUsers) => {
  let totalRating = 0;
  ratingsArr.forEach((item) => {
    totalRating += item.stars;
  });

  return totalRating / numUsers;
};

const CountryTrips = () => {
  const { store, dispatch } = useContext(PlanningContext);
  const { trips, country } = store;

  useEffect(() => {
    getTrips(dispatch);
  }, [dispatch]);

  // Include country in trips as well for filtering.
  // const filteredTrips = trips.filter((trip) => {

  // })

  return (
    <div>
      <SideBar>
        <LocFilter country={country ? `${country.name}` : ""} />
        <PopFilter />
        <PriceFilter />
        <DayFilter />
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
