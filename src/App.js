import {PlanningProvider} from './store'
import Home from './components/Home.jsx'
import CountryTrips from './components/CountryTrips.jsx'
function App() {
  return (
    <PlanningProvider>
    <div className="container-fluid">
      <Home/>
      <CountryTrips/>
    </div>
    </PlanningProvider>
  );
}

export default App;
