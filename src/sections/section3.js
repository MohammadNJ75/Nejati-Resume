import React, { Component } from "react";
import Fullpage from "../Component/Fullpage";
import data from "../data.json";
import Skillcard from "../Component/Skillcard";
import "./section3.css";

class Skillssection extends Component {
  render() {
    return (
      <Fullpage className="third">
        <h3 className="h3">{data.sections[1].title}</h3>
        <div className="cards-wrapper">
         {data.sections[1].items.map(eachskill => {
              return <Skillcard skill={eachskill} />;
            })}
        </div>
      </Fullpage>
    );
  }
}
export default Skillssection;
