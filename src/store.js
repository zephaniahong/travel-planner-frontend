import React, {useReducer} from 'react'
import axios from 'axios'

export const initialState ={
  country: null 
}


export function planningReducer(state, action){
  switch(action.type){
    case SET_COUNTRY:
      return {...state, country: action.payload}
  default:
    return state
  }
}


// Provider
export const PlanningContext = React.createContext(null)

const {Provider} = PlanningContext

export function PlanningProvider({children}) {
  const [store, dispatch] = useReducer(planningReducer, initialState)
  return <Provider value = {{store, dispatch}}>{children}</Provider>
}

// Types
const SET_COUNTRY = 'SET_COUNTRY'

// action functions
export function setCountryAction(country) {
  return {
    type: SET_COUNTRY,
    payload: country
  }
}


const BACKEND_URL = 'http://localhost:3004'

// axios requests