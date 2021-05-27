import React, { useContext, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete from "use-places-autocomplete";
import { Combobox, ComboboxInput } from "@reach/combobox";
import "@reach/combobox/styles.css";
import { PlanningContext, addItem } from "../store";

const libraries = ["places"];
const GoogleSearch = () => {
  // google result
  const [result, setResult] = useState(null);
  const { store } = useContext(PlanningContext);
  const { country, tripId } = store;
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    // clearSuggestions,
  } = usePlacesAutocomplete({
    // search preference - prefer results that are near the user's selected country
    requestOptions: {
      location: { lat: () => country.lat, lng: () => country.lng },
      radius: 1000 * 1000,
    },
  });

  const addToItinerary = (types, description) => {
    let selectedType;
    if (types[0] === "natural_feature") {
      selectedType = "sites";
    } else if (types[0] === "restaurant") {
      selectedType = "food";
    } else if (types[0] === "point_of_interest") {
      selectedType = "activities";
    }
    addItem(selectedType, tripId, description);
  };

  return (
    <Combobox>
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Enter an address"
      />
      {status === "OK" &&
        data.map(({ id, description, structured_formatting, types }) => (
          <div className="card" style={{ width: "18rem" }} key={id}>
            <div className="card-body">
              <h5 className="card-title">{structured_formatting.main_text}</h5>
              <p className="card-text">
                {structured_formatting.secondary_text}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  addToItinerary(types, description);
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
    </Combobox>
  );
};

export default GoogleSearch;
