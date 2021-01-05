import React, { Component } from "react";
import "../styles/Navigation.scss";
export default class HalfNavigation extends Component {
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
          <p>Doświadczenie {players.exp}</p>
        </div>
        <div className="hero-attack">
          <img src={require("../stats/21-mace.svg")} alt="hero item" />
          <p>Siła {players.strength}</p>
        </div>
        <div className="hero-magic">
          <img src={require("../stats/41-runes.svg")} alt="hero item" />
          <p>Magia {players.magic}</p>
        </div>
        <div className="hero-life">
          <img src={require("../stats/32-shield.svg")} alt="hero item" />
          <p>Życie {players.hp}</p>
        </div>
        <div className="hero-lucky">
          <img src={require("../stats/37-beer.svg")} alt="hero item" />
          <p>Szczęście {players.fate}</p>
        </div>
        <div className="hero-gold">
          <img src={require("../stats/44-chest.svg")} alt="hero item" />
          <p>Złoto {players.gold}</p>
        </div>
      </>
    );
  }
}
