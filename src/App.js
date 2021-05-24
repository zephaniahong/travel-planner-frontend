import React from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import {PlanningProvider} from './store';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import CountryTrips from './components/CountryTrips.jsx'
import { Container } from 'react-bootstrap';
import './App.css'

function App() {
  return (
    <PlanningProvider>
    <Container id="main" fluid>

          <Router>
            <Navbar />
            
            <Switch>
              <Route path="/">
                <Home/>
              </Route>                
              <Route path="/createtrip">
              
              </Route>
                
            </Switch>
            <CountryTrips/>
          </Router>

    </Container>
    </PlanningProvider>
  );
}

export default App;
