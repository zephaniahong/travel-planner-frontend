import React, {useReducer} from 'react';
import axios from 'axios';

export const initialState ={
  country: null,
  highlightedCountry: null, 
  trips: [],
  userTrips: [],
  tripId: null,
  filteredTrips: []
}


export function planningReducer(state, action) {
  switch(action.type){
    case SET_COUNTRY:
      return {...state, country: {name:action.payload}}
    case SET_HIGHLIGHT:
      return {...state, highlightedCountry: action.payload}
    case SET_LAT_LNG:
      return {...state, country: {name: state.country.name, lat: action.payload.lat, lng: action.payload.lng}}
    case GET_TRIPS:
      return {...state, trips: action.payload}
    case GET_USER_TRIPS:
      return {...state, userTrips: action.payload}
    case SET_TRIP_ID:
      return {...state, tripId: action.payload}
    case SET_FILTERED_TRIPS:
      return {...state, filteredTrips: action.payload}
  default:
    return state
  }
};


// Provider
export const PlanningContext = React.createContext(null);

const {Provider} = PlanningContext;

export function PlanningProvider({children}) {
  const [store, dispatch] = useReducer(planningReducer, initialState)
  return <Provider value = {{store, dispatch}}>{children}</Provider>
};

// Types
const SET_COUNTRY = 'SET_COUNTRY';
const SET_HIGHLIGHT = 'SET_HIGHLIGHT';
const SET_LAT_LNG = 'SET_LAT_LNG';
const GET_TRIPS = 'GET_TRIPS';
const SET_TRIP_ID = 'SET_TRIP_ID';
const GET_USER_TRIPS = 'GET_USER_TRIPS';
const SET_FILTERED_TRIPS = 'SET_FILTERED_TRIPS';

// action functions
export function setCountryAction(country) {
  return {
    type: SET_COUNTRY,
    payload: country
  }
};

export function setHighlightAction(country) {
  return {
    type: SET_HIGHLIGHT,
    payload: country
  }
};

export function setLatLngAction(lat, lng) {
  return {
    type: SET_LAT_LNG,
    payload: {lat, lng}
  }
};

export function getTripsAction(trips) {
  return {
    type: GET_TRIPS,
    payload: trips
  }
};

export function getUserTripsAction(userTrips) {
  return {
    type: GET_USER_TRIPS,
    payload: userTrips
  }
};

export function setTripId(id) {
  return {
    type: SET_TRIP_ID,
    payload: id
  }
}

export function setFilteredTrips(filteredTrips) {
  return {
    type: SET_FILTERED_TRIPS,
    payload: filteredTrips
  }
}



const BACKEND_URL = 'http://localhost:3004';

// axios requests
export function getTrips(dispatch) {
  // Need to get trips related to country. 
  axios.get(`${BACKEND_URL}/gettrips`)
    .then(res => {
      dispatch(getTripsAction(res.data));
    })
};

export function getUserTrips(dispatch) {
  axios.get(`${BACKEND_URL}/usertrips`)
    .then((res) => {
      dispatch(getUserTripsAction(res.data))
    })
};

export function addItem(type, tripId, description) {
  axios.post(BACKEND_URL + '/add-item', {type, tripId, description})
}

export function newTrip(dispatch, setTripId) {
  axios.post(BACKEND_URL + '/createtrip').then((result) => {
    console.log(result.data)
    dispatch(setTripId(result.data.tripId))
  })
}
