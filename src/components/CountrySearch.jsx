import React, { useContext, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
// Import as a module in your JS
import "react-bootstrap-typeahead/css/Typeahead.css";
import { PlanningContext, setCountryAction } from "../store";
import countries from "./countries";
import worldMapJson from "./worldMapJson";

const CountrySearch = (props) => {
  const { dispatch } = useContext(PlanningContext);
  const [searchedCountry, setSearchedCountry] = useState(null);

  // set chosen country in store
  const handleSubmit = () => {
    dispatch(setCountryAction(searchedCountry));
  };

  // know which country to highlight
  // loop through entire worldmapjson and find a match to find and set the id in state
  const highlightCountry = (input) => {
    const worldCountries = worldMapJson.layers;
    for (let i = 0; i < worldCountries.length; i += 1) {
      if (worldCountries[i].name === input[0]) {
        props.setHighlight(worldCountries[i].id);
      }
    }
  };

  return (
    <div>
      <Typeahead
        onChange={(input) => {
          setSearchedCountry(input[0]);
          highlightCountry(input);
        }}
        options={countries}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CountrySearch;
