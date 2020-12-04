import React, { useState } from "react";
import Today from "./Today";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function showWeatherData(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date (response.data.dt*1000),
            wind: response.data.wind.speed,
            city: response.data.name, 
            description: response.data.weather[0].description,
            icon: "https://s1.twnmm.com/images/en_ca/icons/wxicons_large/2.png"
        });
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a City..." className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                <input type="submit" value="Search" className="btn btn-info w-100"/></div>
               </div>     
            </form>
                
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <Today date={weatherData.date} />
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img
                        src = {weatherData.icon} alt={weatherData.description} /> 
                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="units"> °C | °F </span>
                </div>
                <div className="col-6">
                    <ul>
                            <li> Humidity: {weatherData.humidity}% </li>
                            <li> Wind: {weatherData.wind} km/h </li>
                    </ul>
                </div>
            </div>
        </div>
    );
    } else {
        let apiKey = "9c48a62dcc12a129cf6c63c31fa92ac6";
        let apiUrl =
            `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeatherData);

        return "Fetching data...";
    
    }  
}