import React, { useContext, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
// Import as a module in your JS
import "react-bootstrap-typeahead/css/Typeahead.css";
import {
  PlanningContext,
  setCountryAction,
  setHighlightAction,
  setLatLngAction,
} from "../store";
import countries from "./countries";
import worldMapJson from "./worldMapJson";

const CountrySearch = ({ getGeocode, getLatLng, panTo }) => {
  const { store, dispatch } = useContext(PlanningContext);
  const [searchedCountry, setSearchedCountry] = useState(null);

  // set chosen country in store
  function handleSubmit() {
    dispatch(setCountryAction(searchedCountry));
  }

  // get lat and lng info of chosen country
  async function getLocationInfo() {
    const results = await getGeocode({ address: searchedCountry });
    const { lat, lng } = await getLatLng(results[0]);
    console.log(lat, lng);
    panTo({ lat, lng });
    dispatch(setLatLngAction(lat, lng));
  }

  // know which country to highlight
  // loop through entire worldmapjson and find a match to find and set the id in state
  const highlightCountry = (input) => {
    const worldCountries = worldMapJson.layers;
    for (let i = 0; i < worldCountries.length; i += 1) {
      if (worldCountries[i].name === input[0]) {
        dispatch(setHighlightAction(worldCountries[i].id));
      }
    }
  };

  return (
    <div>
      <Typeahead
        id="searchbar"
        onChange={(input) => {
          setSearchedCountry(input[0]);
          highlightCountry(input);
        }}
        options={countries}
      />
      <button
        onClick={() => {
          handleSubmit();
          getLocationInfo();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default CountrySearch;
