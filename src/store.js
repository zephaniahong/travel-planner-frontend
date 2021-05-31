import React, {useReducer} from 'react';
import axios from 'axios';

export const initialState ={
  country: null,
  highlightedCountry: null, 
  trips: [],
  userTrips: [],
  tripId: null,
  items: {food:[], activities: [], sites: []},
  likedItems: []
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

    case GET_ITEMS:
      let food= []
      let activities = []
      let sites = []
      for (let i =0; i< action.payload.length; i += 1) {
        if (action.payload[i].type === 'food') {
          food.push(action.payload[i])
        } else if (action.payload[i].type === 'activities') {
          activities.push(action.payload[i])
        } else if (action.payload[i].type === 'sites') {
          sites.push(action.payload[i])
      }
    }
      return {...state, items: {food: food, sites: sites, activities: activities}}

    case ADD_ITEM:
      const item = action.payload
      if (action.payload.type === 'food') {
        return {...state, items: {...state.items, food: [...state.items.food, item]}}
      } else if (action.payload.type === 'activities') {
        return {...state, items: {...state.items, activities: [...state.items.activities, item]}}
      } else if (action.payload.type === 'sites') {
        return {...state, items: {...state.items, sites: [...state.items.sites, item]}}
      }
      return

    case GET_LIKED_ITEMS:
      return {...state, likedItems: action.payload}

    case ADD_TO_LIKED_ITEMS:
      return {...state, likedItems: [...state.likedItems, ...action.payload]}

    case DLT_FROM_LIKED_ITEMS:
      // This might not be the correct way.
      const likedItemIdx = state.likedItems.indexOf(action.payload);
      return {...state, likedItems: state.likedItems.splice(likedItemIdx, 1)}
    
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
const GET_ITEMS = 'GET_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const GET_LIKED_ITEMS = 'GET_LIKED_ITEMS';
const ADD_TO_LIKED_ITEMS = 'ADD_TO_LIKED_ITEMS';
const DLT_FROM_LIKED_ITEMS = 'DLT_FROM_LIKED_ITEMS';

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

export function setTripIdAction(id) {
  return {
    type: SET_TRIP_ID,
    payload: id
  }
};

export function getItemsAction(items) {
  return {
    type: GET_ITEMS,
    payload: items
  }
};

export function addItemAction(item) {
  return {
    type: ADD_ITEM,
    payload: item
  }
};

export function getlikedItemsAction(items) {
  return {
    type: GET_LIKED_ITEMS,
    payload: items
  }
};

export function addToLikeItemsAction(item) {
  return {
    type: ADD_TO_LIKED_ITEMS,
    payload: item,
  }
};

export function dltFromLikeItemsAction(item) {
  return {
    type: DLT_FROM_LIKED_ITEMS,
    payload: item,
  }
};




const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

// axios requests
export function getTrips(dispatch) {
  // Need to get trips related to country. 
  axios.get(`${REACT_APP_BACKEND_URL}/gettrips`)
    .then(res => {
      dispatch(getTripsAction(res.data));
    })
};

export function getUserTrips(dispatch) {
  axios.get(`${REACT_APP_BACKEND_URL}/usertrips`)
    .then((res) => {
      dispatch(getUserTripsAction(res.data))
  });
};

export function addItem(dispatch, type, tripId, mainText, secondaryText) {
  axios.post(REACT_APP_BACKEND_URL + '/add-item', {type, tripId, mainText, secondaryText})
  .then((result)=> {
    dispatch(addItemAction(result.data))
  });
};

export function newTrip(dispatch, setTripId) {
  axios.post(REACT_APP_BACKEND_URL + '/createtrip')
    .then((result) => {
      const tripId = result.data.tripId
      dispatch(setTripId(tripId))

      axios.get(REACT_APP_BACKEND_URL + `/get-items/${tripId}`,)
      .then((result)=> {
        dispatch(getItemsAction(result.data))
      })
  })
};

export function getlikedItems(dispatch) {
  // TODO: Add /:userId parameter once Login Page is created.
  axios.get(REACT_APP_BACKEND_URL + '/get-liked-items')
    .then((result)=> {
    dispatch(getlikedItemsAction(result.data))
  });
};

export function getTripItems(dispatch, tripId) {
  axios.get(REACT_APP_BACKEND_URL + `/get-items/${tripId}`,)
    .then((result)=> {
      dispatch(getItemsAction(result.data))
  })
};

export function addToLikedItems(dispatch, itemId, userId=19) {
  axios.post(`${REACT_APP_BACKEND_URL}/addlikeditem/${itemId}/${userId}`)
    .then((res) => {
      dispatch(addToLikeItemsAction(res.data));
  });
};

export function dltFromLikedItems(dispatch, itemId, userId=19) {
  axios.delete(`${REACT_APP_BACKEND_URL}/deletelikeditem/${itemId}/${userId}`)
    .then((res) => {
      console.log("Item coming from delete stuff:\n", res.data);
      dispatch(dltFromLikeItemsAction(res.data));
  });
};