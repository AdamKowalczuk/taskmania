import React, { Component } from "react";
import Navigation from "./Navigation";
import "../styles/Exp.scss";
export default class Exp extends Component {
  render() {
    return (
      <>
        <Navigation
          data={{
            pages: this.props.data.pages,
            changePage: this.props.data.changePage.bind(this),
            players: this.props.data.players,
            activePlayer: this.props.data.activePlayer,
            playersNumber: this.props.data.playersNumber,
          }}
        />
        <div className="exp-container">
          <h2>Wymień punkty doświadczenia</h2>
          <h4>10 punktów doświadczenia za 1 punkt statystyki</h4>
          <div className="exp-box">
            <div className="exp-row">
              <h3>Zamień na siłę</h3>
              <img
                src={require("../stats/020-thor.svg")}
                alt="hero item"
                onClick={() => {
                  this.props.data.convertToStats("siła");
                  this.props.data.changePage(2);
                }}
              />
            </div>
            <div className="exp-row">
              <h3>Zamień na magię</h3>
              <img
                src={require("../stats/050-scroll.svg")}
                alt="hero item"
                onClick={() => {
                  this.props.data.convertToStats("magia");
                  this.props.data.changePage(2);
                }}
              />
            </div>
            <div className="exp-row">
              <h3>Zamień na zdrowię</h3>
              <img
                src={require("../stats/002-shield.svg")}
                alt="hero item"
                onClick={() => {
                  this.props.data.convertToStats("życie");
                  this.props.data.changePage(2);
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
