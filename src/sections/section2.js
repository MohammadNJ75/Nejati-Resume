import React, { Component } from "react";
import { directive } from "@babel/types";
import Fullpage from "../Component/Fullpage";
import data from "../data.json";
import "./section2.css";
import Downicon from "../Component/Downicon";
import { Link, Element } from "react-scroll";
import { Duplex } from "stream";

class Aboutsection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second">
          <h3 className="h3">{data.sections[0].title}</h3>
          <div className="content">{data.sections[0].content}</div>
        </Fullpage>
        <Link
          className="test6"
          to="Skill"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Downicon Icons={data.Icons.down} onClick={this.scrollTo} />
        </Link>

        <Element name="Skill" className="element"></Element>
      </div>
    );
  }
}
export default Aboutsection;
