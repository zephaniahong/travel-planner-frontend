import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import {PlanningProvider} from './store.js';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import CountryTrips from './components/CountryTrips.jsx'
import TripPlanningPage from './components/TripPlanningPage.jsx';
import AllTrips from './components/AllTrips.jsx'
import SingleTrip from './components/SingleTrip.jsx'
import { Container } from 'react-bootstrap';
import './App.css'
import axios from 'axios';

const BACKEND_URL = 'http://localhost:3004';


function App() {
  const [selectedTripIdx, setSelectedTrip] = useState();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/gettrips`)
      .then(res => {
        setTrips(res.data);
      })
  }, [])

  const onDeepLink = (tripIdx) => {
    setSelectedTrip(tripIdx);
  };

  const selectedTrip = trips[selectedTripIdx];

  return (
    <PlanningProvider>
      <Router>
        <Container id="main" fluid>
        <Navbar />
        <Switch>
          
          {/* Need to include tripid in this route as well */}
          <Route path="/createtrip">
            <TripPlanningPage />
          </Route>

          <Route path="/trip/:tripId"  >
            <SingleTrip selectedTrip={selectedTrip} onDeepLink={onDeepLink} />
          </Route>

          <Route path="/alltrips">
            <AllTrips />
          </Route>

          <Route path="/">
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
