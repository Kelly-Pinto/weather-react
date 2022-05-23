import "./App.css";
import Search from "./Search";
import City from "./City";
import Update from "./Update";
import Current from "./Current";
import Github from "./Github";

export default function App() {
  return (
    <div className="App">
      <div>
        <div className="weather-app">
          <div className="weather-app-wrapper">
            <Search />
            <City />
            <Update />
            <Current />
          </div>
          <Github />
        </div>
      </div>
    </div>
  );
}
