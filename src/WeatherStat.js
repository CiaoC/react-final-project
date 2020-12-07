import React from "react";
import Today from "./Today";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherdata(props) {
    return (
        <div className="Weatherdata">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <Today date={props.data.date} />
                </li>
                <li className="text-capitalize">
                    {props.data.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img
                        src={props.data.icon} alt={props.data.description} />
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
                <div className="col-6">
                    <ul>
                        <li> Humidity: {props.data.humidity}% </li>
                        <li> Precipitation: {props.data.precipitation} % </li>
                        <li> Wind: {Math.round(props.data.wind)} km/h </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
} 