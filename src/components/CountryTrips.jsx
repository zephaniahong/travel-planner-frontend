import React, { useEffect, useContext, useState } from "react";
import TripCards from "./TripCards.jsx";
import { getTrips, PlanningContext } from "../store.js";
import CountryMap from "./CountryMap.jsx";
import SideBar from "./SideBar.jsx";
import CountryTripsFilters from "./countrytrip/CountryTripsFilters.jsx";
import moment from "moment";

function calcAvgStars(ratingsArr, numUsers) {
  let totalRating = 0;
  ratingsArr.forEach((item) => {
    totalRating += item.stars;
  });

  return totalRating / numUsers;
}

function calcAvgCost(startDate, endDate, totalCost) {
  const start = moment(`${startDate}`);
  const end = moment(`${endDate}`);
  const diff = end.diff(start, "days");

  return Math.floor(totalCost / diff);
}

const CountryTrips = () => {
  const [pop, setPop] = useState(null);
  const [cost, setCost] = useState([]);
  const { store, dispatch } = useContext(PlanningContext);
  const { trips, country } = store;

  useEffect(() => {
    getTrips(dispatch);
  }, [dispatch]);

  function setPopularity(numStars) {
    setPop(numStars);
  }

  function setAvgCost(avgCost) {
    setCost(avgCost);
  }

  // console.log("trips", trips);
  // Include country in trips as well for filtering.
  const filteredTrips = trips.filter((trip) => {
    trip["avgReview"] = calcAvgStars(trip.reviews, trip.reviews.length);
    trip["avgCost"] = calcAvgCost(trip.startDate, trip.endDate, trip.totalCost);
    return trip.avgReview === pop;
  });

  console.log(filteredTrips);

  // console.log("filteredTrips", filteredTrips);

  return (
    <div>
      <SideBar>
        <CountryTripsFilters
          country={country === null ? "" : `${country.name}`}
          setPopularity={setPopularity}
          setAvgCost={setAvgCost}
        />

        {filteredTrips.map((trip) => {
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
                trip.reviews
                  ? calcAvgStars(trip.reviews, trip.reviews.length)
                  : 0
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
