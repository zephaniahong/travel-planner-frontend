import React from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import {PlanningProvider} from './store';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import CountryTrips from './components/CountryTrips.jsx'
import TripPlanningPage from './components/TripPlanningPage.jsx';
import { Container } from 'react-bootstrap';
import './App.css'

function App() {
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

          <Route path="/exploretrips">
            
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
