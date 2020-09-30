import React, { Component } from "react";
import "../styles/Mission.scss";
import Navigation from "../components/Navigation";
import "react-dice-complete/dist/react-dice-complete.css";
export default class Mission extends Component {
  componentDidMount() {
    this.getMission();
  }
  constructor(props) {
    super(props);
    this.state = {
      // faceValue: 0,
      // face: "&#x2680;",
      // rollCount: 1,
      // isRolling: false,
      enemiesForrest: [
        {
          name: "Wilk",
          strength: 2,
          image: require("../enemies/wolf.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "enemies",
        },
        {
          name: "Goblin",
          strength: 3,
          image: require("../enemies/goblin.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "enemies",
        },
        {
          name: "Pająk",
          strength: 4,
          image: require("../enemies/spider.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "enemies",
        },
      ],
      enemiesCity: [
        {
          name: "Gryf",
          strength: 4,
          image: require("../enemies/008-griffin.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "enemies",
        },
      ],
      enemiesRiver: [
        {
          name: "Ryba",
          strength: 1,
          image: require("../enemies/fish.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "enemies",
        },
        {
          name: "Rogacz",
          strength: 5,
          image: require("../enemies/046-evil.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "enemies",
        },
        {
          name: "Centaur",
          strength: 4,
          image: require("../enemies/013-centaur-1.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "enemies",
        },
        {
          name: "Hydra",
          strength: 7,
          image: require("../enemies/042-hydra.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "enemies",
        },
      ],
      enemiesGraveyard: [
        {
          name: "Szkielet",
          strength: 2,
          image: require("../enemies/skeleton.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "enemies",
        },
        {
          name: "Zombie",
          strength: 3,
          image: require("../enemies/zombie.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "enemies",
        },
        {
          name: "Duch",
          magic: 3,
          image: require("../enemies/ghost.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "enemies",
        },
      ],

      items: [
        {
          name: "Kusza",
          description:
            "Broń długodystansowa. Wolna w użyciu, ale potrafi być zabójcza w wyszkolonych rękach. Dodaje +2 do siły.",
          strength: 2,
          magic: 0,
          hp: 0,
          fate: 0,
          gold: 1,
          image: require("../items/044-crossbow.svg"),
          type: "items",
        },
        {
          name: "Miecz",
          description: "Podstawowa broń każdego szermierza. Dodaje +1 do siły.",
          strength: 1,
          magic: 0,
          hp: 0,
          fate: 0,
          gold: 1,
          image: require("../items/023-dagger.svg"),
          type: "items",
        },
        {
          name: "Młot",
          description:
            "Podstawowe urządzenie każdego kowala. Może służyć do walki. Dodaje +1 do siły.",
          strength: 1,
          magic: 0,
          hp: 0,
          fate: 0,
          gold: 1,
          image: require("../items/3-hammer.svg"),
          type: "items",
        },
        {
          name: "Szynka",
          description:
            "Porządny kawał szynki. Do jedzenia i do bitki. Dodaje +1 do zdrowia.",
          strength: 0,
          magic: 0,
          hp: 1,
          fate: 0,
          gold: 1,
          image: require("../items/4-ham.svg"),
          type: "items",
        },
        {
          name: "Hełm hoplity",
          description: "Wytrzymały i dostojny. Dodaje +1 do zdrowia.",
          strength: 0,
          magic: 0,
          hp: 1,
          fate: 0,
          gold: 1,
          image: require("../items/006-helmet.svg"),
          type: "items",
        },
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
        {
          name: "Pancerz hoplity",
          description:
            "Bardzo lekki i wytrzymały pancerz idealny dla szybkiego hoplity. Dodaje +2 do zdrowia.",
          strength: 0,
          magic: 0,
          hp: 2,
          fate: 0,
          gold: 1,
          image: require("../items/035-armor.svg"),
          type: "items",
        },
        {
          name: "Miecz i tarcza",
          description:
            "Najbardziej uniwersalny zestaw. Dobry zarówno w obronie jak i ataku. Dodaje +1 do ataku i +1 do zdrowia.",
          strength: 1,
          magic: 0,
          hp: 1,
          fate: 0,
          gold: 1,
          image: require("../items/039-weapon.svg"),
          type: "items",
        },
        {
          name: "Skórzane buty",
          description:
            "Podstawowy ekwipunek zwiadowców. Dodaje +2 do szczęścia.",
          strength: 0,
          magic: 0,
          hp: 0,
          fate: 2,
          gold: 1,
          image: require("../items/48-shoes.svg"),
          type: "items",
        },
      ],
      randomEvents: [],
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
          type: "pets",
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
          type: "pets",
        },
        {
          name: "Kameleon",
          description: "Ekspert od kamuflażu. Dodaje +1 do zdrowia.",
          strength: 0,
          magic: 0,
          hp: 1,
          fate: 0,
          gold: 0,
          image: require("../pets/007-chameleon.svg"),
          type: "pets",
        },
        {
          name: "Leniwiec",
          description: "Niewiele robi. Brak pożytku.",
          strength: 0,
          magic: 0,
          hp: 0,
          fate: 0,
          gold: 0,
          image: require("../pets/008-sloth.svg"),
          type: "pets",
        },
        {
          name: "Lama",
          description:
            "Może opluć twoich wrogów. Niestety może działać także przeciwko tobie. Dodaje +1 do ataku i -1 do zdrowia",
          strength: 1,
          magic: 0,
          hp: -1,
          fate: 0,
          gold: 0,
          image: require("../pets/010-llama.svg"),
          type: "pets",
        },
        {
          name: "Mort",
          description: "Uwielbia królewskie stopy. Dodaje +1 do szczęścia.",
          strength: 0,
          magic: 0,
          hp: 0,
          fate: 1,
          gold: 0,
          image: require("../pets/022-lemur.svg"),
          type: "pets",
        },
      ],
      enemyHero: [],
      firstBosses: [
        {
          name: "Minotaur",
          strength: 5,
          image: require("../enemies/043-minotaur.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "bosses",
        },
        {
          name: "Fenix",
          strength: 6,
          image: require("../enemies/003-phoenix.svg"),
          description: "fasfsafsafsafasdfasfassasaas",
          type: "bosses",
        },
      ],
      actualMission: {},
      // diceResult: 1,
    };
    // this.DiceRoll = this.DiceRoll.bind(this);
    // this.HandleDiceThrow = this.HandleDiceThrow.bind(this);
  }
  // GenerateRandomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  // DiceRoll() {
  //   let faceValue = this.GenerateRandomInt(0, 5);
  //   this.setState({
  //     rollCount: this.state.rollCount - 1,
  //     isRolling: this.state.rollCount > 0,
  //     faceValue: faceValue,
  //     face: "&#x" + String(2680 + faceValue) + ";",
  //   });
  // }
  // HandleDiceThrow() {
  //   if (this.state.isRolling) return;
  //   let val = this.GenerateRandomInt(5, 15);
  //   this.setState({ rollCount: val });
  //   for (let i = 0; i <= val; i++) {
  //     setTimeout(this.DiceRoll, 150 * i);
  //   }
  // }
  getMission() {
    if (this.props.data.selectedLocation === "Las") {
      let randomOption = Math.floor(Math.random() * 3);
      if (randomOption === 0) {
        let random = Math.floor(
          Math.random() * this.state.enemiesForrest.length
        );
        this.setState({
          actualMission: this.state.enemiesForrest[random],
        });
      } else if (randomOption === 1) {
        let random = Math.floor(Math.random() * this.state.items.length);
        this.setState({
          actualMission: this.state.items[random],
        });
      } else if (randomOption === 2) {
        let random = Math.floor(Math.random() * this.state.pets.length);
        this.setState({
          actualMission: this.state.pets[random],
        });
      }
    }
    // if (this.props.data.selectedLocation === "Arena") {
    //   let random = Math.floor(Math.random() * this.state.enemiesForrest.length);
    //   this.setState({
    //     actualMission: this.state.enemiesForrest[random],
    //   });
    // }
    // if (this.props.data.selectedLocation === "Targowisko") {
    //   let random = Math.floor(Math.random() * this.state.enemiesForrest.length);
    //   this.setState({
    //     actualMission: this.state.enemiesForrest[random],
    //   });
    // }
    if (this.props.data.selectedLocation === "Miasto") {
      let random = Math.floor(Math.random() * this.state.enemiesCity.length);
      this.setState({
        actualMission: this.state.enemiesCity[random],
      });
    }
    if (this.props.data.selectedLocation === "Rzeka") {
      let randomOption = Math.floor(Math.random() * 2);

      if (randomOption === 0) {
        let random = Math.floor(Math.random() * this.state.enemiesRiver.length);
        this.setState({
          actualMission: this.state.enemiesRiver[random],
        });
      } else if (randomOption === 1) {
        let random = Math.floor(Math.random() * this.state.pets.length);
        this.setState({
          actualMission: this.state.pets[random],
        });
      }
    }
    if (this.props.data.selectedLocation === "Cmentarz") {
      let randomOption = Math.floor(Math.random() * 2);

      if (randomOption === 0) {
        let random = Math.floor(
          Math.random() * this.state.enemiesGraveyard.length
        );
        this.setState({
          actualMission: this.state.enemiesGraveyard[random],
        });
      } else if (randomOption === 1) {
        let random = Math.floor(Math.random() * this.state.items.length);
        this.setState({
          actualMission: this.state.items[random],
        });
      }
    }
    if (this.props.data.selectedLocation === "Jaskinia") {
      let random = Math.floor(Math.random() * this.state.firstBosses.length);
      this.setState({
        actualMission: this.state.firstBosses[random],
      });
    }
  }
  // setDice(number) {
  //   console.log(number);
  //   this.setState({
  //     diceResult: number,
  //   });
  // }
  // diceChange(e) {
  //   this.setState({ diceResult: e.target.value });
  // }
  addToCharacter() {
    const { actualMission } = this.state;
    const { players, activePlayer } = this.props.data;
    if (actualMission.type === "items") {
      let itemsLength = players[activePlayer].character.items.length;
      if (itemsLength > 5) {
        alert(
          "Masz za dużo przedmiotów w ekwipunku, nie możesz podnieść więcej!"
        );
      } else {
        players[activePlayer].character.items[itemsLength] = actualMission;
        players[activePlayer].character.strength =
          players[activePlayer].character.strength + actualMission.strength;
        players[activePlayer].character.hp =
          players[activePlayer].character.hp + actualMission.hp;
        players[activePlayer].character.magic =
          players[activePlayer].character.magic + actualMission.magic;
        players[activePlayer].character.fate =
          players[activePlayer].character.fate + actualMission.fate;
      }
    } else if (actualMission.type === "pets") {
      let petsLength = players[activePlayer].character.pets.length;
      if (petsLength > 3) {
        alert("Masz możesz przygarnąć więcej pupili");
      } else {
        players[activePlayer].character.pets[petsLength] = actualMission;
        players[activePlayer].character.strength =
          players[activePlayer].character.strength + actualMission.strength;
        players[activePlayer].character.hp =
          players[activePlayer].character.hp + actualMission.hp;
        players[activePlayer].character.magic =
          players[activePlayer].character.magic + actualMission.magic;
        players[activePlayer].character.fate =
          players[activePlayer].character.fate + actualMission.fate;
      }
    }
  }
  render() {
    const { actualMission } = this.state;
    return (
      <>
        <Navigation
          data={{
            pages: this.props.data.pages,
            changePage: this.props.data.changePage.bind(this),
            players: this.props.data.players,
            activePlayer: this.props.data.activePlayer,
            playersNumber: this.props.data.playersNumber,
          }}
        />
        <div className="location-container mission-container">
          <h2>Twoja misja</h2>
          <div className="location-box1">
            <div className="location-box2">
              <h3>{actualMission.name}</h3>
              <div className="block"></div>
              <img src={actualMission.image} alt="mission" />
              <div className="mission-box3">
                <div className="mission-description">
                  {actualMission.type === "enemies" ||
                  actualMission.type === "bosses" ? (
                    <h5>
                      Siła :
                      {actualMission.magic === undefined
                        ? actualMission.strength
                        : actualMission.magic}
                    </h5>
                  ) : null}

                  <p>{actualMission.description}</p>
                </div>
              </div>
              {actualMission.type === "items" ? (
                <button
                  className="mission-button"
                  onClick={() => {
                    this.addToCharacter();
                    this.props.data.changePage(3);
                  }}
                >
                  Napotkaj
                </button>
              ) : (
                [
                  actualMission.type === "pets" ? (
                    <button
                      className="mission-button"
                      onClick={() => {
                        this.addToCharacter();
                        this.props.data.changePage(6);
                      }}
                    >
                      Napotkaj
                    </button>
                  ) : (
                    <button
                      className="mission-button"
                      onClick={() => {
                        this.props.data.selectEnemy(actualMission);
                        this.props.data.changePage(5);
                      }}
                    >
                      Napotkaj
                    </button>
                  ),
                ]
              )}
              {/* <button
                className="mission-button"
                onClick={() => {
                  this.props.data.selectEnemy(actualMission);
                  this.props.data.changePage(5);
                }}
              >
                Napotkaj
              </button> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
