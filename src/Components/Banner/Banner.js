import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <header>
        <div className="hello">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi I  Am").start();
            }}
          />
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1500)
                  .typeString("Sampurna Gautam ")
                  .start();
              }}
            />
          </h1>
          <h2>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(3500)
                  .typeString("Aspiring Software Developer")
                  .start();
              }}
            />
          </h2>
        </div>
      </header>
    );
  }
}
export default Banner;
