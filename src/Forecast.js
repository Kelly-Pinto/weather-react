import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-2">
        <div className="forecastDay">Sun</div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          alt="weather icon"
          className="forecastIcon"
        ></img>
        <div className="weatherForecastTemperatures">
          <span className="forecastTempMax">80° </span>
          <span className="forecastTempMin"> 65°</span>
        </div>
      </div>

      <div className="col-2">
        <div className="forecastDay">Mon</div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          alt="weather icon"
          className="forecastIcon"
        ></img>
        <div className="weatherForecastTemperatures">
          <span className="forecastTempMax">80° </span>
          <span className="forecastTempMin"> 65°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="forecastDay">Tues</div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          alt="weather icon"
          className="forecastIcon"
        ></img>
        <div className="weatherForecastTemperatures">
          <span className="forecastTempMax">80° </span>
          <span className="forecastTempMin"> 65°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="forecastDay">Wed</div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          alt="weather icon"
          className="forecastIcon"
        ></img>
        <div className="weatherForecastTemperatures">
          <span className="forecastTempMax">80° </span>
          <span className="forecastTempMin"> 65°</span>
        </div>
      </div>

      <div className="col-2">
        <div className="forecastDay">Thur</div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          alt="weather icon"
          className="forecastIcon"
        ></img>
        <div className="weatherForecastTemperatures">
          <span className="forecastTempMax">80° </span>
          <span className="forecastTempMin"> 65°</span>
        </div>
      </div>

      <div className="col-2">
        <div className="forecastDay">Fri</div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          alt="weather icon"
          className="forecastIcon"
        ></img>
        <div className="weatherForecastTemperatures">
          <span className="forecastTempMax">80° </span>
          <span className="forecastTempMin"> 65°</span>
        </div>
      </div>
    </div>
  );
}
