import React, { useState } from "react";
import WeatherStat from "./WeatherStat";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import Around_the_world from "./Around_the_world.svg";
import Taken from "./Taken.svg";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

    function search() {
        const apiKey = "9c48a62dcc12a129cf6c63c31fa92ac6";
        let apiUrl =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-200"
              />
            </div>
          </div>
        </form>
        <WeatherStat data={weatherData} />
        <WeatherForecast city={weatherData.city} />
        <img height={200} src={Around_the_world} className="App-logo" alt="logo" />
    </div>
        );
    } else {
        search();
    return (
      <div className="center">
        "Fetching data..."
        <img height={200} src={Taken} className="Loading-logo" />
      </div>
    );
    }
}