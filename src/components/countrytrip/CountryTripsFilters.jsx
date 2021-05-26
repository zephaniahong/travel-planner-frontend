import React from "react";
import PopFilter from "./PopFilter.jsx";
import PriceFilter from "./PriceFilter.jsx";
import DayFilter from "./DayFilter.jsx";
import LocFilter from "./LocFilter.jsx";

export default function CountryTripsFilters({
  country,
  setCntryName,
  setPopularity,
  setCost,
  setNumDays,
}) {
  return (
    <>
      <LocFilter country={country} setCntryName={setCntryName} />
      <PopFilter setPopularity={setPopularity} />
      <PriceFilter setCost={setCost} />
      <DayFilter setNumDays={setNumDays} />
    </>
  );
}
