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
  const { store, dispatch } = useContext(PlanningContext);
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

  const addToItinerary = (types, mainText, secondaryText) => {
    let type;
    if (types[0] === "natural_feature") {
      type = "sites";
    } else if (types[0] === "restaurant") {
      type = "food";
    } else if (types[0] === "point_of_interest") {
      type = "activities";
    }
    addItem(dispatch, type, tripId, mainText, secondaryText);
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
        data.map(({ id, structured_formatting, types }) => (
          <div className="card" style={{ width: "18rem" }} key={id}>
            <div className="card-body">
              <h5 className="card-title">{structured_formatting.main_text}</h5>
              <p className="card-text">
                {structured_formatting.secondary_text}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  addToItinerary(
                    types,
                    structured_formatting.main_text,
                    structured_formatting.secondary_text
                  );
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
