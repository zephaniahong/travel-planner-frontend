import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { useRef, useCallback, useContext } from "react";
import ReactDOM from "react-dom";
import { PlanningContext } from "../store";
import CountrySearch from "./CountrySearch.jsx";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import GoogleSearch from "./GoogleSearch";

// variables for country map
const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 43,
  lng: -79,
};
const options = {
  // remove all UI elements on map
  disableDefaultUI: true,
  // show zoom buttons
  zoomControl: true,
};

export default function CountryMap() {
  const { store } = useContext(PlanningContext);
  const { country } = store;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });

  // keep a copy of the original map
  const mapRef = useRef();

  const onLoad = useCallback((map) => {
    console.log("inside calback");
    mapRef.current = map;
  }, []);
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
  }, []);

  // handle errors/ loading of map
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <div>
      {!country &&
        ReactDOM.createPortal(
          <CountrySearch
            getGeocode={getGeocode}
            getLatLng={getLatLng}
            panTo={panTo}
          />,
          document.getElementById("search-bar")
        )}
      {country && (
        <div>
          <GoogleSearch />
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
            onLoad={onLoad}
          />
        </div>
      )}
    </div>
  );
}
