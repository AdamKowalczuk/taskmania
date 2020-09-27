import React, { Component } from "react";
import "../styles/PlayersList.scss";

export default class PlayersList extends Component {
  state = {};

  changeName(e, id) {
    let players = [...this.props.data.players];
    players[id].nick = e.target.value;
    this.props.data.players = players;
  }

  render() {
    const { players } = this.props.data;
    return (
      <>
        <div className="players-container">
          <h1>Wybór bohaterów</h1>
          <button>Rozpocznij grę</button>
          {players.map((player, id) => {
            return (
              <div className="player-box" key={id}>
                <input
                  type="text"
                  placeholder="Wpisz swój nick"
                  onChange={(e) => this.changeName(e, id)}
                />
                {this.props.data.players[id].character.image !== undefined ? (
                  <img
                    src={this.props.data.players[id].character.image}
                    alt="avatar"
                    onClick={() => {
                      this.props.data.changePlayer(id);
                      this.props.data.changePage(1);
                    }}
                  />
                ) : (
                  <img
                    src={require("../heroes/random.svg")}
                    alt="avatar"
                    onClick={() => {
                      this.props.data.changePlayer(id);
                      this.props.data.changePage(1);
                    }}
                  />
                )}

                <h3>{this.props.data.players[id].character.name}</h3>
              </div>
            );
          })}
          {this.props.data.playersNumber > 1 ? (
            <button
              onClick={() =>
                this.props.data.deletePlayer(this.props.data.playersNumber)
              }
            >
              Usuń
            </button>
          ) : (
            ""
          )}

          {this.props.data.playersNumber < 4 ? (
            <button onClick={() => this.props.data.addPlayer()}>Dodaj</button>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
