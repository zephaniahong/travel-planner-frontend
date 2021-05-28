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
import SingleTrip from './components/SingleTrip.jsx'
import TripPlanningPage from './components/TripPlanningPage.jsx';
import AllTrips from './components/AllTrips.jsx'
import { Container } from 'react-bootstrap';
import './App.css'

const BACKEND_URL = 'http://localhost:3004';


function App() {
  const [trips, setTrips] = useState([]);
  const [selectedTripIndex, setSelectedTrip] = useState([]);

  const selectedTrip = trips[selectedTripIndex];

  useEffect(() => {
    axios.get(`${BACKEND_URL}/gettrips`)
      .then((res) => {
        setTrips(res.data);
    });
  }, []);

  const onDeepLink = (tripIndex) => {
    setSelectedTrip(tripIndex);
  }

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

          <Route path="/trips/:tripId">
            <SingleTrip selectedTrip={selectedTrip} onDeepLink={onDeepLink} /> 
          </Route>  

          <Route path="/alltrips">
            <AllTrips />
          </Route>

          <Route path="/" exact>
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
