import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
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
  disableDefaultUI: true,
  zoomControl: true,
  styles: mapStyles,
};

export default function CountryMap({ filtered }) {
  const { store } = useContext(PlanningContext);
  const { country, trips } = store;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });
  const [selected, setSelected] = useState(null);

  // keep a copy of the original map
  const mapRef = useRef();

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
  }, []);

  // handle errors/ loading of map
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <>
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
          >
            {filtered.map((trip) => (
              <Marker
                key={trip.id.toString()}
                position={{ lat: trip.hotelLat, lng: trip.hotelLng }}
                onClick={() => {
                  setSelected(trip);
                }}
              />
            ))}

            {selected && (
              <InfoWindow
                position={{ lat: selected.hotelLat, lng: selected.hotelLng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div>
                  <h3 className="lead">Hotel: {selected.hotel}</h3>{" "}
                  <p> {selected.tripType}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      )}
    </>
  );
}
