import "./App.css";
import Weather from "./Pages/Weather";
import WeatherResult from "./Pages/WeatherResult";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/results">
            <WeatherResult />
          </Route>
          <Route path="/">
            <Weather />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
