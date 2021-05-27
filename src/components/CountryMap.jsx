import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import React, { useState, useRef, useCallback, useContext } from "react";
import ReactDOM from "react-dom";
import { PlanningContext } from "../store";
import CountrySearch from "./CountrySearch.jsx";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import mapStyles from "./mapStyles";

// variables for country map
const libraries = ["places"];
const mapContainerStyle = { width: "100vw", height: "100vh" };
const center = { lat: 43, lng: -79 };
const options = {
  // remove all UI elements on map
  disableDefaultUI: true,
  // show zoom buttons
  zoomControl: true,
  styles: mapStyles,
};

export default function CountryMap() {
  const { store } = useContext(PlanningContext);
  const { country } = store;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  // keep a copy of the original map
  const mapRef = useRef();

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
  }, []);

  const onMapClick = useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
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
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
            onLoad={onLoad}
            onClick={onMapClick}
          >
            {markers.map((marker) => (
              <Marker
                key={marker.time.toISOString()}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => {
                  setSelected(marker);
                }}
              />
            ))}
          </GoogleMap>
        </div>
      )}
    </div>
  );
}
