import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { useState, useRef, useCallback, useContext } from "react";
import { PlanningContext } from "../store";
import CountrySearch from "./CountrySearch.jsx";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });
  const [markers, setMarkers] = useState([]);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // handle errors/ loading of map
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <React.Fragment>
      <CountrySearch getGeocode={getGeocode} getLatLng={getLatLng} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onMapLoad={onMapLoad}
      ></GoogleMap>
    </React.Fragment>
  );
}

// const CountryMap = withScriptjs(
//   withGoogleMap((props) => {
//     return (
//       <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//         {props.isMarkerShown && (
//           <Marker position={{ lat: -34.397, lng: 150.644 }} />
//         )}
//       </GoogleMap>
//     );
//   })
// );

// export default CountryMap;
