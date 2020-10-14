import React, { Component } from "react";
import "../styles/Hero.scss";

import Navigation from "../components/Navigation";
export default class Hero extends Component {
  render() {
    const { players, activePlayer } = this.props.data;
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
        <div className="hero-container">
          <div className="hero-box">
            <div className="left-items">
              {players[activePlayer].character.items[0] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[0].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[0].name}</h4>
                  <p>{players[activePlayer].character.items[0].description1}</p>
                  <p className="description2">{players[activePlayer].character.items[0].description2}</p>
                </div>
              )}
              {players[activePlayer].character.items[2] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[2].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[2].name}</h4>
                  <p>{players[activePlayer].character.items[2].description1}</p>
                  <p className="description2">{players[activePlayer].character.items[2].description2}</p>
                </div>
              )}
              {players[activePlayer].character.items[4] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[4].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[4].name}</h4>
                  <p>{players[activePlayer].character.items[4].description1}</p>
                  <p className="description2">{players[activePlayer].character.items[4].description2}</p>
                </div>
              )}
            </div>
            <div className="hero-image">
              <h3>{players[activePlayer].nick}</h3>
              <img
                src={players[activePlayer].character.image}
                alt="hero item"
              />
              <h4>{players[activePlayer].character.name}</h4>
              <h5>
                Liczba pokonanych bossów :{" "}
                {players[activePlayer].character.bossKilled}/3
              </h5>
              <p>{players[activePlayer].character.description}</p>
            </div>
            <div className="right-items">
              {players[activePlayer].character.items[1] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[1].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[1].name}</h4>
                  <p>{players[activePlayer].character.items[1].description1}</p>
                  <p className="description2">{players[activePlayer].character.items[1].description2}</p>
                </div>
              )}
              {players[activePlayer].character.items[3] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[3].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[3].name}</h4>
                  <p>{players[activePlayer].character.items[3].description1}</p>
                  <p className="description2">{players[activePlayer].character.items[3].description2}</p>
                </div>
              )}
              {players[activePlayer].character.items[5] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[5].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[5].name}</h4>
                  <p>{players[activePlayer].character.items[5].description1}</p>
                  <p className="description2">{players[activePlayer].character.items[5].description2}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
