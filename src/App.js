import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import axios from 'axios';
import {PlanningProvider} from './store';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import CountryTrips from './components/CountryTrips.jsx'
;
import SingleTrip from './components/SingleTrip.jsx';
import TripPlanningPage from './components/TripPlanningPage.jsx';
import AllTrips from './components/AllTrips.jsx'
import { Container } from 'react-bootstrap';
import './App.css'
import Login from './components/Login.jsx'

// Command to run (everytime front end changes): `REACT_APP_BACKEND_URL='https://protected-garden-34701.herokuapp.com' npm run build`
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
axios.defaults.withCredentials = true;

function App() {
  const [trips, setTrips] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedTripId, setSelectedTrip] = useState();
  const selectedTrip = trips.find(trip => trip.id === selectedTripId); // Set trip by tripId, not by array position.
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get(`${REACT_APP_BACKEND_URL}/gettrips`)
      .then((res) => {
        setTrips(res.data);
    });

    const userId = 19;
    if (selectedTripId) {
      axios.get(`${REACT_APP_BACKEND_URL}/get-items/${selectedTripId}/${userId}`,)
        .then((res)=> {
          setItems(res.data);
      });
    }
  }, [selectedTripId, show]);

  const onDeepLink = (tripId) => {
    setSelectedTrip(tripId);
  }

  const setToast = (bool) => {
    setShow(bool);
  };

  
  return (
    <PlanningProvider>
      <Router>
        <Container id="main" fluid>
          <Navbar />
          <Switch>
 
            <Route path="/login">
              <Login />
            </Route>
            
            {/* Need to include tripid in this route as well */}
            <Route path="/createtrip">
              <TripPlanningPage />
            </Route>

            <Route path="/trips/:tripId">
              <SingleTrip items={items} selectedTrip={selectedTrip} onDeepLink={onDeepLink} show={show} setToast={setToast} /> 
            </Route>  

            <Route path="/alltrips">
              <AllTrips />
            </Route>

            <Route exact path="/">
              <Home/>  
              <CountryTrips />
            </Route>               
            
          </Switch>
        </Container>
      </Router>
    </PlanningProvider>
  );
}

export default App;
