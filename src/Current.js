import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="currentTempWrapper">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="clear"
                className="currentConditionImage"
                id="icon"
              />
              <p className="currentTemp">75</p>

              <span className="units">°F</span>
            </div>
          </div>

          <div class="col-6">
            <ul id="conditions">
              <li id="description"></li>
              <li>
                Humidity: <span id="humidity">10</span>%
              </li>
              <li>
                Wind: <span>15</span>mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
