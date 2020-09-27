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
        <div className="hero-gold">
          <img src={require("../items/19-coins.svg")} alt="hero item" />
          <p>Złoto</p>
        </div>
        <div
          className="mission"
          onClick={() => {
            this.props.data.changePage(3);
          }}
        >
          <img src={require("../items/5-drakkar.svg")} alt="hero item" />
          <p>Misje</p>
        </div>
        <div
          className="hero"
          onClick={() => {
            this.props.data.changePage(2);
          }}
        >
          <img src={require("../enemies/2-odin.svg")} alt="hero item" />
          <p>Bohater</p>
        </div>
      </>
    );
  }
}
