import React, { Component } from "react";
import "../styles/Hero.scss";

import Navigation from "../components/Navigation";
export default class Hero extends Component {
  render() {
    return (
      <>
        <Navigation
          data={{
            pages: this.props.data.pages,
            changePage: this.props.data.changePage.bind(this),
          }}
        />
        <div className="hero-container">
          <h2>TheLaczek</h2>
          <div className="hero-box">
            <div className="left-items">
              <img src={require("../items/13-helmet.svg")} alt="hero item" />
              <img src={require("../items/47-armor.svg")} alt="hero item" />
              <img src={require("../items/48-shoes.svg")} alt="hero item" />
              <img src={require("../items/17-axe.svg")} alt="hero item" />
            </div>
            <div className="hero-image">
              <img src={require("../enemies/020-thor.svg")} alt="hero item" />
            </div>
            <div className="right-items">
              <img src={require("../items/13-helmet.svg")} alt="hero item" />
              <img src={require("../items/47-armor.svg")} alt="hero item" />
              <img src={require("../items/48-shoes.svg")} alt="hero item" />
              <img src={require("../items/32-shield.svg")} alt="hero item" />
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-strength">
              <img src={require("../items/17-axe.svg")} alt="hero item" />
              <p>Siła</p>
            </div>
            <div className="hero-hp">
              <img src={require("../items/4-ham.svg")} alt="hero item" />
              <p>Wytrzymałość</p>
            </div>
            <div className="hero-defense">
              <img src={require("../items/47-armor.svg")} alt="hero item" />
              <p>Obrona</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
