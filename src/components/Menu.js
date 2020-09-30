import React, { Component } from "react";
import PlayersList from "./PlayersList";
import Characters from "./Characters";
import Mission from "./Mission";
import Hero from "./Hero";
import Fight from "./Fight";
import Pets from "./Pets";
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
      { isOpen: false },
      { isOpen: false },
    ],
    prevPage: 0,
    // players: [{ nick: "", character: {} }],
    players: [
      {
        nick: "Adam",
        character: {
          name: "Janusz",
          image: require("../heroes/janusz.svg"),
          hp: 1,
          strength: 1,
          magic: 1,
          fate: 1,
          gold: 1,
          exp: 0,
          description: "Typowy polaczek w sandałach",
          items: [],
          pets: [],
          bossKilled: 0,
        },
      },
      {
        nick: "Noob",
        character: {
          name: "Wrestler",
          image: require("../heroes/wrestler.svg"),
          hp: 2,
          strength: 10,
          magic: 1,
          fate: 1,
          gold: 1,
          exp: 0,
          description: "Kozaczek",
          items: [
            {
              name: "Hełm wikinga",
              description:
                "Na sam jego widok ludzie uciekają w popłochu. Dodaje +1 do zdrowia.",
              strength: 0,
              magic: 0,
              hp: 1,
              fate: 0,
              gold: 1,
              image: require("../items/13-helmet.svg"),
              type: "items",
            },
            {
              name: "Dwa miecze",
              description:
                "Świetnie wywarzone miecze od najlepszych krasnoludzkich rzemieślników. Dodaje +2 do ataku.",
              strength: 2,
              magic: 0,
              hp: 0,
              fate: 0,
              gold: 1,
              image: require("../items/014-swords.svg"),
              type: "items",
            },
            {
              name: "Topór kata",
              description: "Piękne i krawawe ostrze. Dodaje +1 do ataku.",
              strength: 0,
              magic: 0,
              hp: 1,
              fate: 0,
              gold: 1,
              image: require("../items/016-axe.svg"),
              type: "items",
            },
            {
              name: "Słaby łuk",
              description:
                "Słaby, stary, kiepskiej jakości łuk. Nic wartego uwagi. Dodaje 0.5 do ataku.",
              strength: 0.5,
              magic: 0,
              hp: 0,
              fate: 0,
              gold: 1,
              image: require("../items/034-bow.svg"),
              type: "items",
            },
          ],
          pets: [
            {
              name: "Kura",
              description: "Durna, ale przydatna. Dodaje +1 do siły.",
              strength: 1,
              magic: 0,
              hp: 0,
              fate: 0,
              gold: 0,
              image: require("../pets/048-rooster.svg"),
            },
            {
              name: "Małpa",
              description:
                "Posiada 50 IQ. Można wykorzystać jako mięso armatnie. Dodaje +1 do życia.",
              strength: 0,
              magic: 0,
              hp: 1,
              fate: 0,
              gold: 0,
              image: require("../pets/027-monkey.svg"),
            },
            {
              name: "Kura",
              description: "Durna, ale przydatna. Dodaje +1 do siły.",
              strength: 1,
              magic: 0,
              hp: 0,
              fate: 0,
              gold: 0,
              image: require("../pets/048-rooster.svg"),
            },
          ],
          bossKilled: 0,
        },
      },
    ],
    activePlayer: 1,
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
          }
        })()}
      </>
    );
  }
}
