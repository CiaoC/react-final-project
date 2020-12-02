import { waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />
        <footer>
      This project was coded by Cindy Chau and is {" "}
  <a href="https://github.com/CiaoC/react-final-project" target="_blank"> open-sourced on GitHub</a>
  </footer>
  </div>
  </div>  
);
}


