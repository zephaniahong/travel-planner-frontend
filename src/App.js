import React from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import {PlanningProvider} from './store';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <PlanningProvider>
    <div className="container-fluid">
      <Navbar />
      <Router>
        <Home/>
      

        <Switch>
          <Route>

          </Route>
          <Route>
            
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </Router>
    
      
    </div>
    </PlanningProvider>
  );
}

export default App;
