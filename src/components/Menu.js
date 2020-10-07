import React, { Component } from "react";
import PlayersList from "./PlayersList";
import Characters from "./Characters";
import Mission from "./Mission";
import Hero from "./Hero";
import Fight from "./Fight";
import Pets from "./Pets";
import Exp from "./Exp";
import Instruction from "./Instruction";
// import Boss from "./Boss";
import Location from "./Location";
// import Login from "./components/Login";
// import Registration from "./components/Registration";

import "../styles/App.scss";
export default class Menu extends Component {
  state = {
    pages: [
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: true },
    ],
    prevPage: 8,
    // players: [{ nick: "", character: {} }],
    players: [
      {
        nick: "Adam1",
        character: {
          name: "Wiking",
          image: require("../heroes/003-viking.svg"),
          hp: 3,
          strength: 4,
          magic: 1,
          fate: 1,
          gold: 3,
          exp: 0,
          description: "Po każdej wygranej walce otrzymuje 2 sztukę złota.",
          items: [
            {
              name: "Hełm wikinga",
              description: "Dodaje +2 do życia",
              strength: 0,
              magic: 0,
              hp: 2,
              fate: 0,
              gold: 2,
              image: require("../items/039-viking.svg"),
              type: "items",
            },
          ],
          pets: [],
          bossKilled: 0,
        },
      },
      {
        nick: "Adam2",
        character: {
          name: "Żniwiarz",
          image: require("../heroes/006-reaper.svg"),
          hp: 3,
          strength: 4,
          magic: 3,
          fate: 2,
          gold: 1,
          exp: 0,
          description:
            "Za każdym razem, gdy pokonasz przeciwnika na cmentarzu dostajesz +1 do siły.",
          items: [
            {
              name: "Kosa",
              description:
                "Do ścinania zbóż lub traw, a w rękach Żniwiarza również głów.",
              strength: 1,
              magic: 0,
              hp: 0,
              fate: 0,
              gold: 1,
              image: require("../items/scythe.svg"),
              type: "items",
            },
          ],
          pets: [],
          bossKilled: 0,
        },
      },
      {
        nick: "Adam3",
        character: {
          name: "Czarodziej",
          image: require("../heroes/004-wizard.svg"),
          hp: 3,
          strength: 2,
          magic: 5,
          fate: 2,
          gold: 1,
          exp: 0,
          description:
            "Podczas walki fizycznej twoje punkty magii są dodawane do twojej siły.",
          items: [],
          pets: [],
          bossKilled: 0,
        },
      },
      {
        nick: "Adam4",
        character: {
          name: "Hoplita",
          image: require("../heroes/002-hoplite.svg"),
          hp: 4,
          strength: 4,
          magic: 2,
          fate: 1,
          gold: 2,
          exp: 0,
          description: "Może za darmo rzucić kostką jeszcze raz.",
          items: [],
          pets: [],
          bossKilled: 0,
        },
      },
    ],
    activePlayer: 0,
    playersNumber: 1,
    selectedLocation: "nic",
    selectedEnemy: {},
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
    if (id === this.state.players.length) {
      this.setState({
        activePlayer: 0,
      });
    } else {
      this.setState({
        activePlayer: id,
      });
    }
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
  selectLocation(name) {
    this.setState({
      selectedLocation: name,
    });
  }
  selectEnemy(enemy) {
    this.setState({
      selectedEnemy: enemy,
    });
  }
  convertToStats(message) {
    const { activePlayer } = this.state;
    const players = this.state.players[activePlayer].character;

    if (message === "siła" && players.exp >= 10) {
      console.log("cos");
      players.exp = players.exp - 10;
      players.strength = players.strength + 1;
    } else if (message === "magia" && players.exp >= 10) {
      players.exp = players.exp - 10;
      players.magic = players.magic + 1;
    } else if (message === "życie" && players.exp >= 10) {
      players.exp = players.exp - 10;
      players.hp = players.hp + 1;
    } else {
      console.log(
        "Masz za mało punktów doświadczenia. Potrzebujesz 10 punktów, żeby wymienić na statystykę."
      );
    }
  }

  render() {
    const {
      pages,
      players,
      activePlayer,
      playersNumber,
      selectedLocation,
      selectedEnemy,
    } = this.state;
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
                  selectedLocation: selectedLocation,
                  selectLocation: this.selectLocation.bind(this),
                  selectedEnemy: selectedEnemy,
                  selectEnemy: this.selectEnemy.bind(this),
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
                  selectedLocation: selectedLocation,
                  selectedEnemy: selectedEnemy,
                  selectEnemy: this.selectEnemy.bind(this),
                  changePlayer: this.changePlayer.bind(this),
                }}
              />
            );
          } else if (pages[5].isOpen === true) {
            return (
              <Fight
                data={{
                  pages: pages,
                  changePage: this.changePage.bind(this),
                  players: players,
                  activePlayer: activePlayer,
                  selectedLocation: selectedLocation,
                  selectedEnemy: selectedEnemy,
                  selectEnemy: this.selectEnemy.bind(this),
                  changePlayer: this.changePlayer.bind(this),
                }}
              />
            );
          } else if (pages[6].isOpen === true) {
            return (
              <Pets
                data={{
                  pages: pages,
                  changePage: this.changePage.bind(this),
                  players: players,
                  activePlayer: activePlayer,
                  selectedLocation: selectedLocation,
                  selectLocation: this.selectLocation.bind(this),
                  selectedEnemy: selectedEnemy,
                  selectEnemy: this.selectEnemy.bind(this),
                }}
              />
            );
          } else if (pages[7].isOpen === true) {
            return (
              <Exp
                data={{
                  pages: pages,
                  changePage: this.changePage.bind(this),
                  players: players,
                  activePlayer: activePlayer,
                  selectedLocation: selectedLocation,
                  selectLocation: this.selectLocation.bind(this),
                  selectedEnemy: selectedEnemy,
                  selectEnemy: this.selectEnemy.bind(this),
                  convertToStats: this.convertToStats.bind(this),
                }}
              />
            );
          } else if (pages[8].isOpen === true) {
            return (
              <Instruction
                data={{
                  pages: pages,
                  changePage: this.changePage.bind(this),
                  players: players,
                  activePlayer: activePlayer,
                  selectedLocation: selectedLocation,
                  selectLocation: this.selectLocation.bind(this),
                  selectedEnemy: selectedEnemy,
                  selectEnemy: this.selectEnemy.bind(this),
                  convertToStats: this.convertToStats.bind(this),
                }}
              />
            );
          }
        })()}
      </>
    );
  }
}
