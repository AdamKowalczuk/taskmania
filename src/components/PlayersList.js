import React, { Component } from "react";
import "../styles/PlayersList.scss";
import Input from "muicss/lib/react/input";
export default class PlayersList extends Component {
  changeName(e, id) {
    let players = [...this.props.data.players];
    players[id].nick = e.target.value;
    this.props.data.players = players;
  }
  setItemsValue() {
    const players = this.props.data.players[this.props.data.activePlayer]
      .character;
    for (let i = 0; i < players.items.length; i++) {
      players.strength = players.strength + players.items[i].strength;
      players.magic = players.magic + players.items[i].magic;
      players.hp = players.hp + players.items[i].hp;
      players.fate = players.fate + players.items[i].fate;
    }
    for (let i = 0; i < players.pets.length; i++) {
      players.strength = players.strength + players.pets[i].strength;
      players.magic = players.magic + players.pets[i].magic;
      players.hp = players.hp + players.pets[i].hp;
      players.fate = players.fate + players.pets[i].fate;
    }
  }

  render() {
    const { players } = this.props.data;
    return (
      <>
        <div className="players-container">
          <div className="players-container2">
            <h1>Wybór bohaterów</h1>
            <div></div>
            <button
              onClick={() => {
                this.setItemsValue();
                this.props.data.setFirstPlayer();
                this.props.data.changePage(2);
              }}
            >
              Rozpocznij grę
            </button>
            {players.map((player, id) => {
              return (
                <div className="player-box" key={id}>
                  {/* <input
                    type="text"
                    placeholder="Wpisz swój nick"
                    onChange={(e) => this.changeName(e, id)}
                  /> */}
                  <Input
                    color="danger"
                    label="Podaj swój nick"
                    floatingLabel={true}
                    type="text"
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
                onClick={() => {
                  this.props.data.deletePlayer(this.props.data.playersNumber);
                }}
              >
                Usuń
              </button>
            ) : (
              ""
            )}

            {this.props.data.playersNumber < 4 ? (
              <button onClick={() => this.props.data.addPlayer()}>
                Dodaj gracza
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}
