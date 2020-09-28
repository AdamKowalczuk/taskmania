import React, { Component } from "react";
import PlayersList from "./PlayersList";
import Characters from "./Characters";
import Mission from "./Mission";
import Hero from "./Hero";
// import Boss from "./Boss";
import Location from "./Location";
// import Login from "./components/Login";
// import Registration from "./components/Registration";

import "../styles/App.scss";
export default class Menu extends Component {
  state = {
    pages: [
      { isOpen: true },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
    ],
    prevPage: 0,
    players: [{ nick: "", character: {} }],
    activePlayer: 1,
    playersNumber: 1,
  };
  changePage(number) {
    if (number === this.state.prevPage) {
    } else {
      let pages = [...this.state.pages];
      let page = { ...pages[number] };
      page.isOpen = true;
      pages[number] = page;

      pages[this.state.prevPage].isOpen = false;

      this.setState({
        pages,
        prevPage: number,
      });
    }
  }
  changePlayer(id) {
    this.setState({
      activePlayer: id + 1,
    });
  }
  addPlayer() {
    let players = [...this.state.players];
    if (players.length <= 3) {
      let player = { nick: "", character: {} };
      players[this.state.playersNumber] = player;
      this.setState({
        players: players,
        playersNumber: this.state.playersNumber + 1,
      });
    }
  }
  deletePlayer(number) {
    let players = [...this.state.players];
    players.splice(number - 1, 1);
    this.setState({
      playersNumber: this.state.playersNumber - 1,
      players: players,
    });
  }
  render() {
    const { pages, players, activePlayer, playersNumber } = this.state;
    return (
      <>
        {(() => {
          if (pages[0].isOpen === true) {
            return (
              <PlayersList
                data={{
                  pages: pages,
                  changePage: this.changePage.bind(this),
                  changePlayer: this.changePlayer.bind(this),
                  addPlayer: this.addPlayer.bind(this),
                  deletePlayer: this.deletePlayer.bind(this),
                  players: players,
                  activePlayer: activePlayer,
                  playersNumber: playersNumber,
                }}
              />
            );
          } else if (pages[1].isOpen === true) {
            return (
              <Characters
                data={{
                  pages: pages,
                  changePage: this.changePage.bind(this),
                  players: players,
                  activePlayer: activePlayer,
                }}
              />
            );
          } else if (pages[2].isOpen === true) {
            return (
              <Location
                data={{
                  pages: pages,
                  changePage: this.changePage.bind(this),
                  players: players,
                  activePlayer: activePlayer,
                }}
              />
            );
          } else if (pages[3].isOpen === true) {
            return (
              <Hero
                data={{
                  pages: pages,
                  changePage: this.changePage.bind(this),
                  players: players,
                  activePlayer: activePlayer,
                }}
              />
            );
          } else if (pages[4].isOpen === true) {
            return (
              <Mission
                data={{
                  pages: pages,
                  changePage: this.changePage.bind(this),
                  players: players,
                  activePlayer: activePlayer,
                }}
              />
            );
          }
        })()}
      </>
    );
  }
}
