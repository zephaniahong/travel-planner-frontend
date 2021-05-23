import React from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import {PlanningProvider} from './store';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
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
              <Route>
                
              </Route>
              <Route>
                
              </Route>
            </Switch>
          </Router>


    </Container>
    </PlanningProvider>
  );
}

export default App;
