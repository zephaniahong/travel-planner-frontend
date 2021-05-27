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

function calcDateDiff(startDate, endDate) {
  const start = moment(`${startDate}`);
  const end = moment(`${endDate}`);

  return end.diff(start, "days");
}

function inRange(cost, min, max) {
  return cost <= max && cost >= min;
}

const CountryTrips = () => {
  const [countryName, setCountryName] = useState("");
  const [pop, setPop] = useState(null);
  const [costRange, setCostRange] = useState([]);
  const [duration, setDuration] = useState(1);
  const { store, dispatch } = useContext(PlanningContext);
  const { trips, country } = store;

  useEffect(() => {
    getTrips(dispatch);
  }, [dispatch]);

  function setCntryName(cntryFromFilter) {
    setCountryName(cntryFromFilter);
  }

  function setPopularity(numStars) {
    setPop(numStars);
  }

  function setCost(cost) {
    setCostRange(cost);
  }

  function setNumDays(days) {
    setDuration(days);
  }

  const filteredTrips = trips.filter((trip) => {
    trip["avgReview"] = calcAvgStars(trip.reviews, trip.reviews.length);
    trip["avgCost"] = calcAvgCost(trip.startDate, trip.endDate, trip.totalCost);
    trip["duration"] = calcDateDiff(trip.startDate, trip.endDate);

    return (
      // trip.country.toLowerCase() === countryName.toLowerCase() &&
      trip.avgReview === pop &&
      inRange(trip.avgCost, costRange[0], costRange[1]) &&
      trip.duration <= duration
    );
  });

  return (
    <div>
      <SideBar>
        <CountryTripsFilters
          country={country === null ? "" : `${country.name}`}
          setCntryName={setCntryName}
          setPopularity={setPopularity}
          setCost={setCost}
          setNumDays={setNumDays}
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
