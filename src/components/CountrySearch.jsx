import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
// Import as a module in your JS
import "react-bootstrap-typeahead/css/Typeahead.css";
import countries from "./countries";
const CountrySearch = () => {
  const [searchedCountry, setSearchedCountry] = useState(null);
  return (
    <div>
      <Typeahead
        onChange={(selected) => {
          setSearchedCountry(selected);
        }}
        options={countries}
      />
    </div>
  );
};

export default CountrySearch;
