import React, { useState } from "react";
import WeatherStat from "./WeatherStat";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
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

    function search() {
        let apiKey = "9c48a62dcc12a129cf6c63c31fa92ac6";
        let apiUrl =
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeatherData);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter a City..."
                                className="form-control"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                    </div>
                    <div className="col-3">
                <input type="submit" value="Search" className="btn btn-info w-100"/></div>
               </div>     
            </form>
                <WeatherStat data={weatherData} /> 
        </div>
    );
    } else {
        search();
        return "Fetching data...";
    
    }  
}