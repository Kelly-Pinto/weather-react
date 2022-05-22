import "./App.css";
import Search from "./Search";
import City from "./City";
import Update from "./Update";

export default function App() {
  return (
    <div className="App">
      <div>
        <div className="weather-app">
          <div className="weather-app-wrapper">
            <Search />
            <City />
            <Update />
          </div>
        </div>
      </div>
    </div>
  );
}
