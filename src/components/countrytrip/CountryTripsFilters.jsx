import React from "react";
import PopFilter from "./PopFilter.jsx";
import PriceFilter from "./PriceFilter.jsx";
import DayFilter from "./DayFilter.jsx";
import LocFilter from "./LocFilter.jsx";

export default function CountryTripsFilters({ country }) {
  return (
    <>
      <LocFilter country={country} />
      <PopFilter />
      <PriceFilter />
      <DayFilter />
    </>
  );
}
