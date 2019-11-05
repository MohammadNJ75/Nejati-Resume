import React from "react";

import  TitlesAndIcons from "./sections/section1";
import Aboutsection from "./sections/section2";
import Skillssection from "./sections/section3";

import "./App.css";



function App() {
  return (
    <div className="App">
      <div className="Navigation"></div>
        <TitlesAndIcons/>
        <Aboutsection/>
        <Skillssection/>
        
    </div>
  );
}

export default App;
