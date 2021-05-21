import React, {useReducer} from 'react'
import axios from 'axios'

export const initialState ={}


export function planningReducer(state, action){
  switch(action.type){

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




const BACKEND_URL = 'http://localhost:3004'

// axios requests