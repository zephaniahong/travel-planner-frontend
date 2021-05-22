import {PlanningProvider} from './store'
import Home from './components/Home.jsx'
import CountryTrips from './components/CountryTrips'
function App() {
  return (
    <PlanningProvider>
    <div className="container">
      <Home/>
      <CountryTrips/>
    </div>
    </PlanningProvider>
  );
}

export default App;
