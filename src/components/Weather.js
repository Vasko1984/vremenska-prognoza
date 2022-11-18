import React from "react";
import "../assets/weather.css";
const Weather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}C</p>
        </div>
        <img
          className="weather-icon"
          alt="picture"
          src={`.icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">details</span>
          </div>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">feels like</span>
          <span className="parameter-value">
            {Math.round(data.main.feels_like)}C
          </span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Wind</span>
          <span className="parameter-value">{data.wind.speed} m/ps</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Humidity</span>
          <span className="parameter-value">{data.main.humidity}%</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Pressure</span>
          <span className="parameter-value">{data.main.pressure}mph</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
