import React, { Component } from "react";
import Navigation from "../components/Navigation";
import "../styles/Pets.scss";
export default class Pets extends Component {
  render() {
    const { activePlayer } = this.props.data;
    const players = this.props.data.players[activePlayer].character;
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
        <div className="pets-container">
          <h2>Twoje pupile</h2>
          <div className="pets-top">
            <div className="pet">
              {players.pets[0] === undefined ? null : (
                <>
                  <img src={players.pets[0].image} alt="pet" />
                  <h4>{players.pets[0].name}</h4>
                  <p className="description1">{players.pets[0].description1}</p>
                  <p className="description2">{players.pets[0].description2}</p>
                </>
              )}
            </div>

            <div className="pet">
              {players.pets[1] === undefined ? null : (
                <>
                  <img src={players.pets[1].image} alt="pet" />
                  <h4>{players.pets[1].name}</h4>
                  <p className="description1">{players.pets[1].description1}</p>
                  <p className="description2">{players.pets[1].description2}</p>
                </>
              )}
            </div>
          </div>
          <div className="pets-bottom">
            <div className="pet">
              {players.pets[2] === undefined ? null : (
                <>
                  <img src={players.pets[2].image} alt="pet" />
                  <h4>{players.pets[2].name}</h4>
                  <p className="description1">{players.pets[2].description1}</p>
                  <p className="description2">{players.pets[2].description2}</p>
                </>
              )}
            </div>
            <div className="pet">
              {players.pets[3] === undefined ? null : (
                <>
                  <img src={players.pets[3].image} alt="pet" />
                  <h4>{players.pets[3].name}</h4>
                  <p className="description1">{players.pets[3].description1}</p>
                  <p className="description2">{players.pets[3].description2}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
