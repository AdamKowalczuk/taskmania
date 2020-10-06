import React, { Component } from "react";
import "../styles/Navigation.scss";
export default class Navigation extends Component {
  render() {
    const { activePlayer } = this.props.data;
    const players = this.props.data.players[activePlayer].character;
    return (
      <>
        <div
          className="hero-exp"
          onClick={() => {
            this.props.data.changePage(7);
          }}
        >
          <img src={players.image} alt="hero item" />
          <p>Doświadczenie : {players.exp}</p>
        </div>
        <div className="hero-attack">
          <img src={require("../stats/020-thor.svg")} alt="hero item" />
          <p>Siła : {players.strength}</p>
        </div>
        <div className="hero-magic">
          <img src={require("../stats/050-scroll.svg")} alt="hero item" />
          <p>Magia : {players.magic}</p>
        </div>
        <div className="hero-life">
          <img src={require("../stats/002-shield.svg")} alt="hero item" />
          <p>Życie : {players.hp}</p>
        </div>
        <div className="hero-lucky">
          <img src={require("../stats/011-key.svg")} alt="hero item" />
          <p>Szczęście : {players.fate}</p>
        </div>
        <div className="hero-gold">
          <img src={require("../stats/045-money-bag.svg")} alt="hero item" />
          <p>Złoto : {players.gold}</p>
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
            this.props.data.changePage(6);
          }}
        >
          <img src={require("../pets/001-panda.svg")} alt="pets" />
          <p>Pupile</p>
        </div>
      </>
    );
  }
}
