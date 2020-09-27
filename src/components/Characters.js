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
        description: "Ble ble ble",
      },
      {
        name: "Łowca",
        image: require("../heroes/łowca.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        description:
          "bohater średniowiecznych angielskich legend ludowych, którego faktyczne istnienie nie zostało potwierdzone przez źródła historyczne",
      },
      {
        name: "Batman",
        image: require("../heroes/batman.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        description:
          "fikcyjna postać znana z licznych serii komiksowych, wydawanych przez DC Comics, oraz z różnych adaptacji związanych z tą postacią. Po raz pierwszy postać Batmana pojawiła się w czasopiśmie komiksowym Detective Comics vol. 1 #27 w maju 1939 roku",
      },
      {
        name: "Heisenberg",
        image: require("../heroes/heisenberg.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        description:
          "Walter „Walt” Hartwell White, znany także jako Heisenberg – postać fikcyjna, główny bohater amerykańskiego serialu Breaking Bad. Postać została stworzona przez Vince’a Gilligana i grana była przez Bryana Cranstona",
      },
      {
        name: "Jason",
        image: require("../heroes/jason.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        description:
          "fikcyjna postać filmowa, bohater horrorów z serii Piątek, trzynastego. Wystąpił w dwunastu filmach pełnometrażowych, licznych dokumentach i stał się ikoną popkultury (mimo tego, że w zamyśle twórców pierwszej części swojej sagi miał w ogóle nie istnieć jako odrębna postać filmowa) – jego osoba była niejednokrotnie parodiowana, pojawiała się w charakterze ironicznym w wielu serialach (jak np. Simpsonowie), o Jasonie realizowano nawet komiksy.",
      },
      {
        name: "Janusz",
        image: require("../heroes/janusz.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        description: "Typowy polaczek w sandałach",
      },
      {
        name: "Wrestler",
        image: require("../heroes/wrestler.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        description: "Kozaczek",
      },

      {
        name: "Einstein",
        image: require("../heroes/einstein.svg"),
        hp: 1,
        strength: 1,
        magic: 1,
        fate: 1,
        gold: 1,
        description:
          "fizyk teoretyczny i laureat Nagrody Nobla w dziedzinie fizyki w 1921 roku za „wkład do fizyki teoretycznej, zwłaszcza opis prawa efektu fotoelektrycznego”",
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
      description: "Blebleble",
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
                <p>Siła:{currentCharacter.strength}</p>
                <p>Magia:{currentCharacter.magic}</p>
                <p>Życie:{currentCharacter.hp}</p>
                <p>Szczęście:{currentCharacter.fate}</p>
                <p>Złoto:{currentCharacter.gold}</p>
              </div>
            </div>
          </div>

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
      </>
    );
  }
}
