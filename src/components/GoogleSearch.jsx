import React, { useContext } from "react";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { PlanningContext } from "../store";

const libraries = ["places"];
const GoogleSearch = () => {
  const { store } = useContext(PlanningContext);
  const { country } = store;
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    // search preference - prefer results that are near the user's selected country
    requestOptions: {
      location: { lat: () => country.lat, lng: () => country.lng },
      radius: 200 * 1000,
    },
  });

  return (
    <Combobox
      onSelect={(address) => {
        console.log(address);
      }}
    >
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Enter an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default GoogleSearch;
