import {PlanningProvider} from './store'
import Home from './components/Home.jsx'
function App() {
  return (
    <PlanningProvider>
    <div className="container">
      <Home/>
    </div>
    </PlanningProvider>
  );
}

export default App;
