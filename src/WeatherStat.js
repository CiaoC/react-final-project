import React from "react";
import Today from "./Today";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Stats.css";

export default function WeatherStat(props) {
    return (
        <div className="WeatherStat">
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
                    <div className="clearfix">
                        <div className="float-right">
                    <WeatherIcon code={props.data.icon} />
                        </div>
                    <div className="temperature">
                    <WeatherTemperature celsius={props.data.temperature} />
                    </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li> Humidity: {props.data.humidity}% </li>
                        <li> Wind: {Math.round(props.data.wind)} km/h </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
} 