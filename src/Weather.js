import React from "react";
import "./Weather.css";

export default function Weather() {
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
                
            <h1>Edmonton</h1>
            <ul>
                <li>
                    Wednesday 09:00
                </li>
                <li>
                    A few clouds
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img
                        src="https://s1.twnmm.com/images/en_ca/icons/wxicons_large/2.png" alt="A few clouds" /> 
                    <span className="temperature">2</span>
                    <span className="units"> °C | °F </span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation: 0%
                        </li>
                        <li> Humidity: 59% </li>
                        <li> Wind: 4km/h </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}