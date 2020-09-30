import React, { Component } from "react";
import "../styles/Characters.scss";

export default class Characters extends Component {
  state = {
    characters: [
      {
        name: "Wiking",
        image: require("../heroes/wiking.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        exp: 0,
        description: "Ble ble ble",
        items: [],
        pets: [],
        bossKilled: 0,
      },
      {
        name: "Łowca",
        image: require("../heroes/łowca.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        exp: 0,
        description:
          "bohater średniowiecznych angielskich legend ludowych, którego faktyczne istnienie nie zostało potwierdzone przez źródła historyczne",
        items: [],
        pets: [],
        bossKilled: 0,
      },
      {
        name: "Batman",
        image: require("../heroes/batman.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        exp: 0,
        description:
          "fikcyjna postać znana z licznych serii komiksowych, wydawanych przez DC Comics, oraz z różnych adaptacji związanych z tą postacią. Po raz pierwszy postać Batmana pojawiła się w czasopiśmie komiksowym Detective Comics vol. 1 #27 w maju 1939 roku",
        items: [],
        pets: [],
        bossKilled: 0,
      },
      {
        name: "Heisenberg",
        image: require("../heroes/heisenberg.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        exp: 0,
        description:
          "Walter „Walt” Hartwell White, znany także jako Heisenberg – postać fikcyjna, główny bohater amerykańskiego serialu Breaking Bad. Postać została stworzona przez Vince’a Gilligana i grana była przez Bryana Cranstona",
        items: [],
        pets: [],
        bossKilled: 0,
      },
      {
        name: "Jason",
        image: require("../heroes/jason.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        exp: 0,
        description:
          "fikcyjna postać filmowa, bohater horrorów z serii Piątek, trzynastego. Wystąpił w dwunastu filmach pełnometrażowych, licznych dokumentach i stał się ikoną popkultury – jego osoba była niejednokrotnie parodiowana",
        items: [],
        pets: [],
        bossKilled: 0,
      },
      {
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
      {
        name: "Wrestler",
        image: require("../heroes/wrestler.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        exp: 0,
        description: "Kozaczek",
        items: [],
        pets: [],
        bossKilled: 0,
      },

      {
        name: "Einstein",
        image: require("../heroes/einstein.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        exp: 0,
        description:
          "fizyk teoretyczny i laureat Nagrody Nobla w dziedzinie fizyki w 1921 roku za „wkład do fizyki teoretycznej, zwłaszcza opis prawa efektu fotoelektrycznego”",
        items: [],
        pets: [],
        bossKilled: 0,
      },
    ],
    currentCharacter: {
      name: "Wiking",
      image: require("../heroes/wiking.svg"),
      hp: 1,
      strength: 1,
      magic: 1,
      fate: 1,
      gold: 1,
      exp: 0,
      description: "Blebleble",
      items: ["nic", "nic", "kupa"],
      pets: ["Zygmunt", "Stanisław"],
      bossKilled: 0,
    },
  };

  getDetails(id) {
    this.setState({
      currentCharacter: this.state.characters[id],
    });
  }
  setHero(id, players) {
    players[id - 1].character = this.state.currentCharacter;
  }
  render() {
    const { characters, currentCharacter } = this.state;

    return (
      <>
        <div className="characters-container">
          <div className="character-details-box">
            <h2>
              {currentCharacter.name}
              <button
                onClick={() => {
                  this.setHero(
                    this.props.data.activePlayer,
                    this.props.data.players
                  );
                  this.props.data.changePage(0);
                }}
              >
                Wybierz
              </button>
            </h2>

            <img src={currentCharacter.image} alt="hero" />
            <div className="character-details">
              <p>{currentCharacter.description}</p>
              <div className="stats-container">
                <div className="stats-info">
                  <img
                    className="stats-image"
                    src={require("../stats/020-thor.svg")}
                    alt="siła"
                  />
                  <p>{currentCharacter.strength}</p>
                </div>
                <div className="stats-info">
                  <img
                    className="stats-image"
                    src={require("../stats/050-scroll.svg")}
                    alt="magia"
                  />

                  <p>{currentCharacter.magic}</p>
                </div>
                <div className="stats-info">
                  <img
                    className="stats-image"
                    src={require("../stats/002-shield.svg")}
                    alt="życie"
                  />
                  <p>{currentCharacter.hp}</p>
                </div>
                <div className="stats-info">
                  <img
                    className="stats-image"
                    src={require("../stats/011-key.svg")}
                    alt="szczęście"
                  />
                  <p>{currentCharacter.fate}</p>
                </div>
                <div className="stats-info">
                  <img
                    className="stats-image"
                    src={require("../stats/045-money-bag.svg")}
                    alt="złoto"
                  />
                  <p>{currentCharacter.gold}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="heroes-image">
            {characters.map((character, id) => {
              return (
                <div className="character_box" key={id}>
                  <img
                    src={characters[id].image}
                    alt="character"
                    onClick={() => {
                      this.getDetails(id);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
