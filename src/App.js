import React from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import {PlanningProvider} from './store';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
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

          <Route path="/">
            <Home/>
          </Route>                
          
            
        </Switch>
        </Container>
      </Router>
    </PlanningProvider>
  );
}

export default App;
