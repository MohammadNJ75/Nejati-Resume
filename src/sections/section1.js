import React, { Component } from "react";
import { directive } from "@babel/types";
import Fullpage from "../Component/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import Downicon from "../Component/Downicon";
import { Link, Element } from "react-scroll";

import "./section1.css";

class TitlesAndIcons extends Component {
  constructor() {
    super();
    this.state = {
      color: "black",
    };
    this.ChangeColor = this.ChangeColor.bind(this);
  }

  ChangeColor = () => {
    this.setState({
      color: this.state.color === "black" ? "white" : "black",
    });
  };
  render() {
    return (
      <div>
        <Fullpage className="first">
          <Link
            className="test6"
            to="About"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="Button1"  style={{ color: this.state.color }}>About Me!</div>
          </Link>
          <Link
            className="test6"
            to="Skill"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="Button2"  style={{ color: this.state.color }}>My skills</div>
          </Link>
          
          <h1
            className="title"
            style={{ color: this.state.color }}
            onMouseOver={() => {
              this.ChangeColor();
            }}
            onMouseLeave={() => {
              this.ChangeColor();
            }}
          >
            {data.title}
          </h1>
          <div>
            <h2  style={{ color: this.state.color }}>{data.subtitle}</h2>
          </div>
          <div>
            {Object.keys(data.links).map(key => {
              return <SocialIcon url={data.links[key]} />;
            })}
          </div>
        </Fullpage>
        <Link
          className="test6"
          to="About"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Downicon Icons={data.Icons.down} />
        </Link>

        <Element name="About" className="element"></Element>
      </div>
    );
  }
}
export default TitlesAndIcons;
