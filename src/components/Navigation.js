import React, { Component } from "react";
import "../styles/Navigation.scss";
export default class Navigation extends Component {
  render() {
    return (
      <>
        <div className="hero-exp">
          <img src={require("../items/46-bible.svg")} alt="hero item" />
          <p>Doświadczenie</p>
        </div>
        <div className="hero-attack">
          <img src={require("../stats/020-thor.svg")} alt="hero item" />
          <p>Atak</p>
        </div>
        <div className="hero-magic">
          <img src={require("../stats/050-scroll.svg")} alt="hero item" />
          <p>Magia</p>
        </div>
        <div className="hero-life">
          <img src={require("../stats/002-shield.svg")} alt="hero item" />
          <p>Życie</p>
        </div>
        <div className="hero-lucky">
          <img src={require("../stats/011-key.svg")} alt="hero item" />
          <p>Szczęście</p>
        </div>
        <div className="hero-gold">
          <img src={require("../stats/045-money-bag.svg")} alt="hero item" />
          <p>Złoto</p>
        </div>
        <div
          className="mission"
          onClick={() => {
            this.props.data.changePage(2);
          }}
        >
          <img src={require("../items/5-drakkar.svg")} alt="mission" />
          <p>Misje</p>
        </div>
        <div
          className="hero"
          onClick={() => {
            this.props.data.changePage(3);
          }}
        >
          <img src={require("../enemies/2-odin.svg")} alt="hero" />
          <p>Bohater</p>
        </div>
        <div
          className="boss"
          onClick={() => {
            this.props.data.changePage(4);
          }}
        >
          <img src={require("../enemies/004-dragon.svg")} alt="boss" />
          <p>Boss</p>
        </div>
      </>
    );
  }
}
