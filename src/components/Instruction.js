import React, { Component } from "react";
import "../styles/Instruction.scss";
export default class Instruction extends Component {
  state = {
    instructions: [
      {
        h1: "Instrukcja do gry",
      },
      {
        h1: "Każdy z bohaterów charakteryzuje się 5 statystykami",
      },
      {
        h1: "Siła/Magia",
        h3:
          "Ich wartość jest brana pod uwagę w trakcie walki. Niektórzy przeciwnicy walczą za pomocą siły, a inni za pomocą magii.",
      },
      {
        h1: "Życie",
        h3:
          "Życie pokazuje ile bohater jest w stanie wytrzymać. Za każdą przegraną walkę twój bohater traci 1 życie. Gdy życie bohatera spadnie poniżej 1 - gracz przegrywa grę.",
      },

      {
        h1: "Szczęście",
        h3:
          "Za 1 punkt szczęścia gracz może rzucić ponownie kostką i zmienić wynik bitwy.",
      },
      {
        h1: "Złoto",
        h3:
          "Za złoto gracz może kupić przedmioty oraz pupile na targowisku. Może być także potrzebne w trakcie misji.",
      },
      {
        h1: "Lokacje",
        h3:
          "W grze występuje 7 lokacji. Każda lokacja charakteryzuje się innymi misjami i wydarzeniami. ",
      },
      {
        h1: "Doświadczenie",
        h3:
          "Gracz otrzymuje doświadczenie za pokonanie przeciwnika. Otrzymane punkty doświadczenia są równe sile lub magii przeciwnika. Za 10 punktów doświadczenia można wzmocnić jedną statystykę o 1 punkt.",
      },
      {
        h1: "Przedmioty",
        h3:
          "Przedmioty dodają bohaterowi bonusy do statystyk. Można je znaleźć podczas misji albo kupić na targowisku. Bohater może posiadać maksymalnie 6 przedmiotów.",
      },
      {
        h1: "Pupile",
        h3:
          "Pupile dodają bohaterowi pewne statystyki albo cechy. Można je kupić albo znaleźć podczas misji. Bohater może posiadać 4 pupile.",
      },
      {
        h1: "Walka",
        h3:
          "Podczas walki do siły/magii bohatera jest dodawana wartość wyrzuconych oczek. Wygrywa bohater z większą sumą.",
      },
      {
        h1: "Bossowie",
        h3:
          "Bossowie to specjalni przeciwnicy. W grze występują 3 rangi bossów. Każdy kolejny boss jest silniejszy od poprzedniego.",
      },
      {
        h1: "Zakończenie gry",
        h3: "Grę wygrywa bohater, który pierwszy pokona 3 bossów.",
      },
    ],
    actualInstruction: 0,
  };
  changeInstruction() {
    this.setState({
      actualInstruction: this.state.actualInstruction + 1,
    });
  }
  render() {
    const { instructions, actualInstruction } = this.state;
    return (
      <>
        <div className="instruction-container">
          <div className="instruction-box">
            <h1>{instructions[actualInstruction].h1}</h1>
            {this.state.actualInstruction===0 ? <img src={require("../Taskmania.png")} alt="location" />: null}
            <h3>{instructions[actualInstruction].h3}</h3>
            {actualInstruction === instructions.length - 1 ? (
              <button
                className="mission-button"
                onClick={() => this.props.data.changePage(0)}
              >
                Wróć do strony głównej
              </button>
            ) : (
              <>
                <button
                  className="mission-button"
                  onClick={() => this.changeInstruction()}
                >
                  Kolejna strona
                </button>
                <button
                  className="mission-button"
                  onClick={() => this.props.data.changePage(0)}
                >
                  Pomiń
                </button>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
