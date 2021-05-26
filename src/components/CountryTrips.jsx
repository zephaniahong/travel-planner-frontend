import React, { useEffect, useContext } from "react";
import TripCards from "./TripCards.jsx";
import { getTrips, PlanningContext } from "../store.js";
import CountryMap from "./CountryMap.jsx";
import SideBar from "./SideBar.jsx";
import CountryTripsFilters from "./countrytrip/CountryTripsFilters.jsx";

const calcAvg = (ratingsArr, numUsers) => {
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
        <CountryTripsFilters
          country={country === null ? "" : `${country.name}`}
        />

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
                trip.reviews ? calcAvg(trip.reviews, trip.reviews.length) : 0
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
