import React, { Component } from "react";
import PlayersList from "./PlayersList";
import Characters from "./Characters";
import Mission from "./Mission";
import Hero from "./Hero";
import Fight from "./Fight";
import Pets from "./Pets";
import Exp from "./Exp";
import Instruction from "./Instruction";
import ItemShop from "./ItemShop";
import PetShop from "./PetShop";
import Location from "./Location";
import Home from './Home'

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
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: true },
    ],
    prevPage: 11,
    players: [
      {
        nick: "Gracz 1",
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
              description1:
                "Do ścinania zbóż lub traw, a w rękach Żniwiarza również głów.",
              description2:
                "Dodaje +1 do siły.",
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

    ],
    activePlayer: 0,
    playersNumber: 1,
    selectedLocation: "nic",
    selectedEnemy: {},
    kindOfFight: '',
    enemyId: '',
  };

  changePage(number) {
    if (this.state.players[this.state.activePlayer].character.bossKilled === 3) {
      window.location.reload()
    }
    else if (number === this.state.prevPage) {
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
      let player = {
        nick: `Gracz ${this.state.playersNumber + 1}`,
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
              description1:
                "Do ścinania zbóż lub traw, a w rękach Żniwiarza również głów.",
              description2:
                "Dodaje +1 do siły.",
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
      };
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
  buyInMarket(number, randomItems, message) {
    const players = this.state.players[this.state.activePlayer];
    if (message === "pet") {
      if (
        players.character.gold >= randomItems[number].gold &&
        players.character.pets.length < 4
      ) {
        players.character.pets[players.character.pets.length] =
          randomItems[number];
        players.character.gold =
          players.character.gold - randomItems[number].gold;
      } else {
        alert("Masz za mało złota lub masz za dużo pupili");
      }
    } else {
      if (
        players.character.gold >= randomItems[number].gold &&
        players.character.items.length < 6
      ) {
        players.character.items[players.character.items.length] =
          randomItems[number];
        players.character.gold =
          players.character.gold - randomItems[number].gold;
      } else {
        alert("Masz za mało złota lub masz za dużo przedmiotów");
      }
    }
  }
  sellInMarket(number, item, message) {
    let players = [...this.state.players];
    let player = players[this.state.activePlayer];
    console.log("players przed", players);
    console.log("player przed", player);
    if (message === "item") {
      player.character.gold += item.gold;
      players[this.state.activePlayer] = player;
      players[this.state.activePlayer].character.items.splice(number, 1);
      this.setState({
        players: players,
      });
    } else {
      player.character.gold += item.gold;
      players[this.state.activePlayer] = player;
      players[this.state.activePlayer].character.pets.splice(number, 1);
      this.setState({
        players: players,
      });
    }
  }
  setFirstPlayer() {
    this.setState({
      activePlayer: 0,
    });
  }
  changeKindOfFight(fight) {
    this.setState({
      kindOfFight: fight
    })
  }
  changeEnemyId(id) {
    this.setState({
      enemyId: id
    })
  }
  chooseReward() {

  }

  render() {
    const {
      pages,
      players,
      activePlayer,
      playersNumber,
      selectedLocation,
      selectedEnemy, kindOfFight, enemyId
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
                  setFirstPlayer: this.setFirstPlayer.bind(this),
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
                  changeKindOfFight: this.changeKindOfFight.bind(this),
                  changeEnemyId: this.changeEnemyId.bind(this),
                  enemyId: enemyId,

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
                  changeKindOfFight: this.changeKindOfFight.bind(this),
                  kindOfFight: kindOfFight,
                  chooseReward: this.chooseReward.bind(this),
                  enemyId: enemyId,
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
          } else if (pages[9].isOpen === true) {
            return (
              <ItemShop
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
                  buyInMarket: this.buyInMarket.bind(this),
                  changePlayer: this.changePlayer.bind(this),
                  sellInMarket: this.sellInMarket.bind(this),
                }}
              />
            );
          } else if (pages[10].isOpen === true) {
            return (
              <PetShop
                data={{
                  pages: pages,
                  changePage: this.changePage.bind(this),
                  changePlayer: this.changePlayer.bind(this),
                  players: players,
                  activePlayer: activePlayer,
                  selectedLocation: selectedLocation,
                  selectLocation: this.selectLocation.bind(this),
                  selectedEnemy: selectedEnemy,
                  selectEnemy: this.selectEnemy.bind(this),
                  convertToStats: this.convertToStats.bind(this),
                  buyInMarket: this.buyInMarket.bind(this),
                  sellInMarket: this.sellInMarket.bind(this),
                }}
              />
            );
          }
          else if (pages[11].isOpen === true) {
            return (
              <Home
                data={{
                  pages: pages,
                  changePage: this.changePage.bind(this),
                  changePlayer: this.changePlayer.bind(this),
                  players: players,
                  activePlayer: activePlayer,
                  selectedLocation: selectedLocation,
                  selectLocation: this.selectLocation.bind(this),
                  selectedEnemy: selectedEnemy,
                  selectEnemy: this.selectEnemy.bind(this),
                  convertToStats: this.convertToStats.bind(this),
                  buyInMarket: this.buyInMarket.bind(this),
                  sellInMarket: this.sellInMarket.bind(this),
                }}
              />
            );
          }

        })()}
      </>
    );
  }
}
