import React from "react";
import PopFilter from "./PopFilter.jsx";
import PriceFilter from "./PriceFilter.jsx";
import DayFilter from "./DayFilter.jsx";
import LocFilter from "./LocFilter.jsx";

export default function CountryTripsFilters({
  country,
  setPopularity,
  setAvgCost,
}) {
  return (
    <>
      <LocFilter country={country} />
      <PopFilter setPopularity={setPopularity} />
      <PriceFilter setAvgCost={setAvgCost} />
      <DayFilter />
    </>
  );
}
