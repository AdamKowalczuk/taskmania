import React, { Component } from "react";
import "../styles/Fight.scss";
import "react-dice-complete/dist/react-dice-complete.css";
import HalfNavigation from "./HalfNavigation";
export default class Fight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDice: -1,
      secondDice: -1,
      face1: "&#x2680;",
      rollCount1: 1,
      isRolling1: false,
      face2: "&#x2680;",
      rollCount2: 1,
      isRolling2: false,
      rightPlayerPower: "",
      leftPlayerPower: "",
      leftPlayerMoves: 1,
      rightPlayerMoves: 1,
      hopliteAttack: 1,
    };
    this.DiceRoll1 = this.DiceRoll1.bind(this);
    this.HandleDiceThrow1 = this.HandleDiceThrow1.bind(this);
    this.DiceRoll2 = this.DiceRoll2.bind(this);
    this.HandleDiceThrow2 = this.HandleDiceThrow2.bind(this);
  }
  componentDidMount() {
    this.setPower();
  }
  setPower() {
    this.setState({
      leftPlayerPower: this.props.data.players[this.props.data.activePlayer]
        .character.strength,
      rightPlayerPower: this.props.data.selectedEnemy.strength,
      leftPlayerMoves: 1,
      rightPlayerMoves: 1,
    });
  }
  GenerateRandomInt1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  GenerateRandomInt2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  DiceRoll1() {
    let firstDice = this.GenerateRandomInt1(0, 5);
    this.setState({
      rollCount1: this.state.rollCount1 - 1,
      isRolling1: this.state.rollCount1 > 0,
      firstDice: firstDice,
      face1: "&#x" + String(2680 + firstDice) + ";",
    });
  }
  HandleDiceThrow1(message) {
    if (this.state.isRolling1) return;
    let val = this.GenerateRandomInt1(5, 12);
    this.setState({ rollCount1: val });
    for (let i = 0; i <= val; i++) {
      setTimeout(this.DiceRoll1, 150 * i);
    }
    if (message === "normalny") {
      this.setState({
        leftPlayerMoves: this.state.leftPlayerMoves - 1,
      });
    } else {
      if (
        this.state.hopliteAttack > 0 &&
        this.props.data.players[this.props.data.activePlayer].character.name ===
          "Hoplita"
      ) {
        this.setState({
          hopliteAttack: this.state.hopliteAttack - 1,
        });
      } else {
        this.props.data.players[this.props.data.activePlayer].character.fate =
          this.props.data.players[this.props.data.activePlayer].character.fate -
          1;
      }
    }
  }
  HandleDiceThrow2(message) {
    if (this.state.isRolling2) return;
    let val = this.GenerateRandomInt2(5, 12);
    this.setState({ rollCount2: val });
    for (let i = 0; i <= val; i++) {
      setTimeout(this.DiceRoll2, 150 * i);
    }
    if (message === "normalny") {
      this.setState({
        rightPlayerMoves: this.state.rightPlayerMoves - 1,
      });
    }
  }
  DiceRoll2() {
    let secondDice = this.GenerateRandomInt2(0, 5);
    this.setState({
      rollCount2: this.state.rollCount2 - 1,
      isRolling2: this.state.rollCount2 > 0,
      secondDice: secondDice,
      face2: "&#x" + String(2680 + secondDice) + ";",
    });
  }
  fightResult() {
    const {
      leftPlayerPower,
      firstDice,
      rightPlayerPower,
      secondDice,
    } = this.state;

    let { players, activePlayer, selectedEnemy } = this.props.data;

    if (leftPlayerPower + firstDice + 1 > rightPlayerPower + secondDice + 1) {
      players[activePlayer].character.exp =
        players[activePlayer].character.exp + rightPlayerPower;
      if (selectedEnemy.type === "bosses") {
        players[activePlayer].character.bossKilled =
          players[activePlayer].character.bossKilled + 1;
          if(players[activePlayer].character.bossKilled===3){
            alert(`Gracz ${players[activePlayer].nick} zwyciężył!`)
          }
      }

      if (players[activePlayer].character.name === "Wiking") {
        players[activePlayer].character.gold =
          players[activePlayer].character.gold + 2;
      }
      if (
        players[activePlayer].character.name === "Żniwiarz" &&
        this.props.data.selectedLocation === "Cmentarz"
      ) {
        players[activePlayer].character.strength =
          players[activePlayer].character.strength + 1;
      }
    } else if (
      leftPlayerPower + firstDice + 1 ===
      rightPlayerPower + secondDice + 1
    ) {
    } else if (
      leftPlayerPower + firstDice + 1 <
      rightPlayerPower + secondDice + 1
    ) {
      players[activePlayer].character.hp =
        players[activePlayer].character.hp - 1;
    }
  }

  render() {
    const { selectedEnemy, players, activePlayer } = this.props.data;
    const {
      rightPlayerPower,
      leftPlayerPower,
      firstDice,
      secondDice,
      leftPlayerMoves,
      hopliteAttack,
    } = this.state;
    return (
      <>
        <HalfNavigation
          data={{
            pages: this.props.data.pages,
            changePage: this.props.data.changePage.bind(this),
            players: this.props.data.players,
            activePlayer: this.props.data.activePlayer,
            playersNumber: this.props.data.playersNumber,
          }}
        />
        <div className="fight-container">
          <h2>Walka</h2>
          <div className="fight-box">
            <div className="left-character">
              <h3>{players[activePlayer].character.name}</h3>
              <div className="block"></div>
              <img src={players[activePlayer].character.image} alt="location" />
              <div className="fight-description">
                <h5>
                  Siła{" "}
                  {firstDice + 1 === 0
                    ? leftPlayerPower
                    : leftPlayerPower + firstDice + 1}
                  {/* {players[activePlayer].character.magic === undefined
                    ? players[activePlayer].character.strength
                    : players[activePlayer].character.magic} */}
                </h5>
                <p>{players[activePlayer].character.description}</p>
              </div>
              {leftPlayerMoves > 0 &&
              players[activePlayer].character.fate > 0 ? (
                <div
                  key={this.state.face1 + this.state.rollCount1}
                  style={{ fontSize: "100px" }}
                  onClick={() => {
                    this.HandleDiceThrow1("normalny");
                    this.HandleDiceThrow2("normalny");
                  }}
                  id="diceFace"
                  dangerouslySetInnerHTML={{ __html: `${this.state.face1}` }}
                ></div>
              ) : (
                [
                  players[activePlayer].character.fate > 0 ? (
                    <>
                      <div
                        key={this.state.face1 + this.state.rollCount1}
                        onClick={() => {
                          this.HandleDiceThrow1("szczęście");
                        }}
                        id="diceFace"
                        dangerouslySetInnerHTML={{
                          __html: `${this.state.face1}`,
                        }}
                      ></div>
                    </>
                  ) : (
                    <div
                      key={this.state.face1 + this.state.rollCount1}
                      id="diceFace"
                      dangerouslySetInnerHTML={{
                        __html: `${this.state.face1}`,
                      }}
                    ></div>
                  ),
                ]
              )}
            </div>
            {leftPlayerMoves > 0 && players[activePlayer].character.fate > 0 ? (
              <button
                className="mission-button"
                onClick={() => {
                  this.HandleDiceThrow1("normalny");
                  this.HandleDiceThrow2("normalny");
                }}
              >
                Rzuć kostką
              </button>
            ) : (
              [
                players[activePlayer].character.fate > 0 ? (
                  <div className="button-container ">
                    <button
                      className="mission-button"
                      onClick={() => {
                        this.HandleDiceThrow1("szczęście");
                      }}
                    >
                      {hopliteAttack > 0 &&
                      players[activePlayer].character.name === "Hoplita"
                        ? "Rzuć jeszcze raz"
                        : "Rzuć za punkty szczęścia"}
                    </button>
                    <button
                      className="mission-button"
                      onClick={() => {
                        this.fightResult();
                        this.props.data.changePlayer(activePlayer + 1);
                        this.props.data.changePage(2);
                      }}
                    >
                      Kontynuuj
                    </button>
                  </div>
                ) : (
                  <button
                    className="mission-button"
                    onClick={() => {
                      this.fightResult();
                      this.props.data.changePlayer(activePlayer + 1);
                      this.props.data.changePage(2);
                    }}
                  >
                    Kontynuuj
                  </button>
                ),
              ]
            )}

            <div className="right-character">
              <h3>{selectedEnemy.name}</h3>
              <div className="block"></div>
              <img src={selectedEnemy.image} alt="location" />
              <div className="fight-description">
                <h5>
                  {/* Siła :
                  {selectedEnemy.magic === undefined
                    ? selectedEnemy.strength
                    : selectedEnemy.magic} */}
                  Siła{" "}
                  {secondDice + 1 === 0
                    ? rightPlayerPower
                    : rightPlayerPower + secondDice + 1}
                </h5>
                <p>{selectedEnemy.description}</p>
              </div>
              <div
                key={this.state.face2 + this.state.rollCount2}
                id="diceFace"
                dangerouslySetInnerHTML={{ __html: `${this.state.face2}` }}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
