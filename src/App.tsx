import WeatherFinder from "./app/components/weather-finder/WeatherFinder";
import Nav from "./app/shell/Nav";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="layout-column align-items-center">
        <WeatherFinder></WeatherFinder>
      </div>
    </div>
  );
}

export default App;
