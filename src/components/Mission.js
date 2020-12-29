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
      enemiesForrest: [
        {
          name: "Wilk",
          strength: 3,
          image: require("../enemies/044-werewolf.svg"),
          description:
            "Inteligentne i groźne stworzenie. Można je spotkać w lesie.",
          type: "enemies",
          attackType: 'strength'
        },
        {
          name: "Goblin",
          strength: 4,
          image: require("../enemies/goblin.svg"),
          description:
            "Ohydne i głupi stwór, o zielonej skórze. Charakteryzuje się brutalnością i porywczością.",
          type: "enemies",
          attackType: 'strength'
        },
        {
          name: "Wielki pająk",
          strength: 5,
          image: require("../enemies/spider.svg"),
          description:
            "Zmutowana odmiana pająka. Bardzo inteligentny. Potrafi współpracować z innymi pająkami",
          type: "enemies",
          attackType: 'strength'
        },
        {
          name: "Wąż",
          strength: 2,
          image: require("../enemies/009-snake.svg"),
          description: "Często spotykany w lesie. Potrafi zatruć swoją ofiarę.",
          type: "enemies",
          attackType: 'strength'
        },
        {
          name: "Jednorożec",
          strength: 5,
          image: require("../enemies/031-unicorn.svg"),
          description: "Zwierzę mieszkające w lasach, przypominające konia z rogiem.",
          type: "enemies",
          attackType: 'magic'
        },
      ],
      enemiesCity: [
        {
          name: "Dziki gryf",
          strength: 4,
          image: require("../enemies/008-griffin.svg"),
          description:
            "Stwór o cielsku, ogonie i tylnych łapach lwa, a o przednich łapach, skrzydłach i łbie orła.",
          type: "enemies",
          attackType: 'strength'
        },
        {
          name: "Ninja",
          strength: 6,
          image: require("../enemies/ninja.svg"),
          description: "Zamaskowany wojownik. Specjalizuje się w skrytobójstwach.",
          type: "enemies",
          attackType: 'strength'
        },
        {
          name: "Demon",
          strength: 5,
          image: require("../enemies/devil.svg"),
          description: "Istota z piekieł. Wykorzystuje ludzi do swoich niecnych planów.",
          type: "enemies",
          attackType: 'magic'
        },
        {
          name: "Czarny rycerz",
          strength: 4,
          image: require("../enemies/knight.svg"),
          description: "Żołnierz armii imperium. Czarny kolor ma wzbudzić strach u wrogów.",
          type:
            "enemies",
          attackType: 'strength'
        },

      ],
      enemiesRiver: [
        {
          name: "Ryba",
          strength: 1,
          image: require("../enemies/fish.svg"),
          description: "Smaczna i zdrowa.",
          type: "enemies",
          attackType: 'magic'
        },
        {
          name: "Rogacz",
          strength: 5,
          image: require("../enemies/046-evil.svg"),
          description: "Posiada do czterech metrów wysokości, masywną budowę ciała, ostre pazury, kły oraz rogi.",
          type:
            "enemies",
          attackType: 'strength'
        },
        {
          name: "Centaur",
          strength: 4,
          image: require("../enemies/013-centaur-1.svg"),
          description: "Stworzenie będące połączeniem ciała konia i człowieka. Świetnie posługuje się łukiem i włócznią.",
          type:
            "enemies",
          attackType: 'strength'
        },
        {
          name: "Hydra",
          strength: 7,
          image: require("../enemies/042-hydra.svg"),
          description: "Olbrzymi jadowity wąż wodny. Posiada od 5 do 10 głów.",
          type: "enemies",
          attackType: 'strength'
        },
        {
          name: "Cyklop",
          strength: 8,
          image: require("../enemies/041-cyclops.svg"),
          description:
            "Stworzenie o jednym oku pośrodku czoła. Wyróżnia się ogromną siłą i kolosalnym rozmiarem.",
          type: "enemies",
          attackType: 'strength'
        },
      ],
      enemiesGraveyard: [
        {
          name: "Szkielet",
          strength: 2,
          image: require("../enemies/skeleton.svg"),
          description:
            "Nieumarła istota. Bezmyślne stworzenie, którego jedynym celem jest zniszczenie każdej żywej istoty.",
          type: "enemies",
          attackType: 'strength'
        },
        {
          name: "Zombie",
          strength: 3,
          image: require("../enemies/zombie.svg"),
          description:
            "Stworzenie wskrzeszone przez nekromantę. Są powolne, lecz wytrzymałe.",
          type: "enemies",
          attackType: 'strength'
        },
        {
          name: "Duch",
          strength: 3,
          image: require("../enemies/ghost.svg"),
          description:
            "Niematerialne stworzenie. Potrafi przenikać przez ściany.",
          type: "enemies",
          attackType: 'magic'
        },
        {
          name: "Wampir",
          strength: 5,
          image: require("../enemies/dracula.svg"),
          description:
            "Pół człowiek, pół nietoperz. Jego głównym źródłem pożywienia jest ludzka krew.",
          type: "enemies",
          attackType: 'magic'
        },
        {
          name: "Mumia",
          strength: 4,
          image: require("../enemies/mummy.svg"),
          description:
            "Wskrzeszone ciało. Mumia potrafi rzucić klątwę na swojego przeciwnika.",
          type: "enemies",
          attackType: 'magic'
        },
      ],
      market: [
        {
          name: "Handlarz ekwipunku",
          description:
            "Handlarz ekwipunku oferuje losowe przedmioty na sprzedaż oraz skupuje twój niepotrzebny ekwipunek. ",
          image: require("../locations/shield.svg"),
          type: "items-market",
        },
        {
          name: "Handlarz pupili",
          description:
            "Handlarz pupili oferuje losowe pupile na sprzedaż oraz skupuje twoje niepotrzebne pupile. ",
          image: require("../locations/pet-shop.svg"),
          type: "pets-market",
        },
      ],

      items: [
        {
          name: "Kusza",
          description1:
            "Wolna w użyciu, ale potrafi być zabójcza w wyszkolonych rękach.",
          description2:
            "Dodaje +2 do siły.",
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
          description1: "Podstawowa broń każdego szermierza.",
          description2:
            "Dodaje +1 do siły",
          strength: 1,
          magic: 0,
          hp: 0,
          fate: 0,
          gold: 2,
          image: require("../items/023-dagger.svg"),
          type: "items",
        },
        {
          name: "Młot",
          description1:
            "Podstawowe urządzenie każdego kowala.",
          description2:
            "Dodaje +1 do siły.",
          strength: 1,
          magic: 0,
          hp: 0,
          fate: 0,
          gold: 2,
          image: require("../items/3-hammer.svg"),
          type: "items",
        },
        {
          name: "Szynka",
          description1:
            "Porządny kawał szynki. Do jedzenia i do bitki.",
          description2:
            "Dodaje +1 do zdrowia.",
          strength: 0,
          magic: 0,
          hp: 1,
          fate: 0,
          gold: 2,
          image: require("../items/4-ham.svg"),
          type: "items",
        },
        {
          name: "Hełm hoplity",
          description1: "Wytrzymały i dostojny.",
          description2: "Dodaje +1 do zdrowia.",
          strength: 0,
          magic: 0,
          hp: 1,
          fate: 0,
          gold: 2,
          image: require("../items/006-helmet.svg"),
          type: "items",
        },
        {
          name: "Hełm wikinga",
          description1:
            "Na sam jego widok ludzie uciekają w popłochu.",
          description2:
            "Dodaje +1 do zdrowia.",
          strength: 0,
          magic: 0,
          hp: 1,
          fate: 0,
          gold: 2,
          image: require("../items/13-helmet.svg"),
          type: "items",
        },
        {
          name: "Dwa miecze",
          description1:
            "Świetnie wywarzone miecze od najlepszych rzemieślników.",
          description2:
            "Dodają +2 do ataku.",
          strength: 2,
          magic: 0,
          hp: 0,
          fate: 0,
          gold: 4,
          image: require("../items/014-swords.svg"),
          type: "items",
        },
        {
          name: "Topór kata",
          description1: "Piękne i krwawe ostrze.",
          description2: "Dodaje +1 do ataku.",
          strength: 0,
          magic: 0,
          hp: 1,
          fate: 0,
          gold: 2,
          image: require("../items/016-axe.svg"),
          type: "items",
        },
        {
          name: "Słaby łuk",
          description1:
            "Słaby, stary, kiepskiej jakości łuk. Nic wartego uwagi.",
          description2:
            "Dodaje 0.5 do ataku.",
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
          description1:
            "Bardzo lekki i wytrzymały pancerz idealny dla szybkiego hoplity.",
          description2:
            "Dodaje +2 do zdrowia.",
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
          description1:
            "Najbardziej uniwersalny zestaw. Dobry zarówno w obronie jak i ataku.",
          description2:
            "Dodaje +1 do ataku i zdrowia.",
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
          description1:
            "Podstawowy ekwipunek zwiadowców.",
          description2:
            "Dodaje +2 do szczęścia.",
          strength: 0,
          magic: 0,
          hp: 0,
          fate: 2,
          gold: 3,
          image: require("../items/48-shoes.svg"),
          type: "items",
        },
      ],
      randomEvents: [],
      pets: [
        {
          name: "Kura",
          description1: "Durna, ale przydatna.",
          description2: "Dodaje +1 do siły.",
          strength: 1,
          magic: 0,
          hp: 0,
          fate: 0,
          gold: 1,
          image: require("../pets/048-rooster.svg"),
          type: "pets",
        },
        {
          name: "Małpa",
          description1:
            "Posiada 50 IQ. Można wykorzystać jako mięso armatnie.",
          description2:
            "Dodaje +1 do życia.",
          strength: 0,
          magic: 0,
          hp: 1,
          fate: 0,
          gold: 1,
          image: require("../pets/027-monkey.svg"),
          type: "pets",
        },
        {
          name: "Kameleon",
          description1: "Ekspert od kamuflażu.",
          description2: "Dodaje +1 do zdrowia.",
          strength: 0,
          magic: 0,
          hp: 1,
          fate: 0,
          gold: 1,
          image: require("../pets/007-chameleon.svg"),
          type: "pets",
        },
        {
          name: "Leniwiec",
          description1: "Niewiele robi. Brak pożytku.",
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
          description1:
            "Może opluć twoich wrogów. Niestety może działać także przeciwko tobie.",
          description2:
            "Dodaje +1 do ataku i -1 do zdrowia",
          strength: 1,
          magic: 0,
          hp: -1,
          fate: 0,
          gold: 1,
          image: require("../pets/010-llama.svg"),
          type: "pets",
        },
        {
          name: "Mort",
          description1: "Uwielbia królewskie stopy.",
          description2: "Dodaje +1 do szczęścia.",
          strength: 0,
          magic: 0,
          hp: 0,
          fate: 1,
          gold: 1,
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
          description:
            "Istota przypominająca człowieka z głową byka. Charakteryzuje się wielką siłą.",
          type: "bosses",
          attackType: 'strength'
        },
        {
          name: "Pegaz",
          strength: 4,
          image: require("../enemies/033-pegasus.svg"),
          description: "Skrzydlaty koń. Trudny w oswojeniu, ale bardzo dobry wierzchowiec.",
          type:
            "bosses",
          attackType: 'magic'
        },

      ],
      secondBosses: [
        {
          name: "Fenix",
          strength: 10,
          image: require("../enemies/003-phoenix.svg"),
          description:
            "Ognisty ptak, będący symbolem wiecznego odradzania się.",
          type: "bosses",
          attackType: 'strength'
        },
        {
          name: "Różowy smok",
          strength: 11,
          image: require("../enemies/047-dragon.png"),
          description:
            "Olbrzymi, latający gad. Rzadko spotykany kolor smoka.",
          type: "bosses",
          attackType: 'magic'
        },
      ],
      thirdBosses: [
        {
          name: "Czerwony smok",
          strength: 15,
          image: require("../enemies/004-dragon.svg"),
          description:
            "Najgroźniejsza odmiana smoka. Jest strażnikiem dawnego skarbu imperium.",
          type: "bosses",
          attackType: 'magic'
        },

      ],
      actualMission: {},
      enemyId: ''
    };
  }

  getMission() {
    if (this.props.data.selectedLocation === "Las") {
      let randomOption = Math.floor(Math.random() * 5);
      if (randomOption === 0 || randomOption === 1 || randomOption === 2) {
        let random = Math.floor(
          Math.random() * this.state.enemiesForrest.length
        );
        this.setState({
          actualMission: this.state.enemiesForrest[random],
        });
      } else if (randomOption === 3) {
        let random = Math.floor(Math.random() * this.state.items.length);
        this.setState({
          actualMission: this.state.items[random],
        });
      } else if (randomOption === 4) {
        let random = Math.floor(Math.random() * this.state.pets.length);
        this.setState({
          actualMission: this.state.pets[random],
        });
      }
    }
    if (this.props.data.selectedLocation === "Arena") {
      let random = Math.floor(Math.random() * this.props.data.players.length);
      while (random === this.props.data.activePlayer) {
        random = Math.floor(Math.random() * this.props.data.players.length);
      }

      this.setState({
        actualMission: this.props.data.players[random].character,
      });
      this.props.data.changeEnemyId(random)
    }
    if (this.props.data.selectedLocation === "Targowisko") {
      let random = Math.floor(Math.random() * this.state.market.length);
      this.setState({
        actualMission: this.state.market[random],
      });
    }
    if (this.props.data.selectedLocation === "Miasto") {
      let random = Math.floor(Math.random() * this.state.enemiesCity.length);
      this.setState({
        actualMission: this.state.enemiesCity[random],
      });
    }
    if (this.props.data.selectedLocation === "Rzeka") {
      let randomOption = Math.floor(Math.random() * 4);

      if (randomOption === 0 || randomOption === 1 || randomOption === 2) {
        let random = Math.floor(Math.random() * this.state.enemiesRiver.length);
        this.setState({
          actualMission: this.state.enemiesRiver[random],
        });
      } else if (randomOption === 3) {
        let random = Math.floor(Math.random() * this.state.pets.length);
        this.setState({
          actualMission: this.state.pets[random],
        });
      }
    }
    if (this.props.data.selectedLocation === "Cmentarz") {
      let randomOption = Math.floor(Math.random() * 4);

      if (randomOption === 0 || randomOption === 1 || randomOption === 2) {
        let random = Math.floor(
          Math.random() * this.state.enemiesGraveyard.length
        );
        this.setState({
          actualMission: this.state.enemiesGraveyard[random],
        });
      } else if (randomOption === 3) {
        let random = Math.floor(Math.random() * this.state.items.length);
        this.setState({
          actualMission: this.state.items[random],
        });
      }
    }
    if (this.props.data.selectedLocation === "Jaskinia") {
      const bossKilled = this.props.data.players[this.props.data.activePlayer].character.bossKilled;
      if (bossKilled === 0) {
        let random = Math.floor(Math.random() * this.state.firstBosses.length);
        this.setState({
          actualMission: this.state.firstBosses[random],
        });
      }
      else if (bossKilled === 1) {
        let random = Math.floor(Math.random() * this.state.secondBosses.length);
        this.setState({
          actualMission: this.state.secondBosses[random],
        });
      }
      else if (bossKilled === 2) {
        let random = Math.floor(Math.random() * this.state.thirdBosses.length);
        this.setState({
          actualMission: this.state.thirdBosses[random],
        });
      }
    }
  }
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
    const { activePlayer } = this.props.data;
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
                        {actualMission.attackType === "strength" ? "Siła " : "Magia "}
                        {actualMission.strength}
                      </h5>
                    ) : null}

                  {actualMission.bossKilled !== undefined ? <div className="strength-magic">
                    <h5>Siła {actualMission.strength}</h5>
                    <h5 className="h5-magic">Magia {actualMission.magic}</h5>
                  </div> : null}

                  <p>{actualMission.description}</p>
                  <p>{actualMission.description1}</p>
                  <p>{actualMission.description2}</p>
                </div>
              </div>
              {actualMission.type === "items" ? (
                <button
                  key={1}
                  className="mission-button"
                  onClick={() => {
                    this.addToCharacter();
                    this.props.data.changePlayer(activePlayer + 1);
                    this.props.data.changePage(2);
                  }}
                >
                  Napotkaj
                </button>
              ) : (
                  [
                    actualMission.type === "pets" ? (
                      <button
                        key={2}
                        className="mission-button"
                        onClick={() => {
                          this.addToCharacter();
                          this.props.data.changePlayer(activePlayer + 1);
                          this.props.data.changePage(2);
                        }}
                      >
                        Napotkaj
                      </button>
                    ) : (
                        [
                          actualMission.type === "items-market" ? (
                            <button
                              key={3}
                              className="mission-button"
                              onClick={() => {
                                this.props.data.changePage(9);
                              }}
                            >
                              Napotkaj
                            </button>
                          ) : (
                              [
                                actualMission.type === "pets-market" ? (
                                  <button
                                    key={4}
                                    className="mission-button"
                                    onClick={() => {
                                      this.props.data.changePage(10);
                                    }}
                                  >
                                    Napotkaj
                                  </button>
                                ) : (
                                    [
                                      actualMission.bossKilled !== undefined ? (
                                        <>
                                          <button style={{ marginRight: "5px" }}
                                            key={5}
                                            className="mission-button"
                                            onClick={() => {
                                              this.props.data.selectEnemy(actualMission);
                                              this.props.data.changeKindOfFight("physical");
                                              this.props.data.changePage(5);
                                            }}
                                          >
                                            Walka fizyczna
                                      </button>
                                          <button
                                            style={{ marginLeft: "5px" }}
                                            key={6}
                                            className="mission-button"
                                            onClick={() => {
                                              this.props.data.selectEnemy(actualMission);
                                              this.props.data.changeKindOfFight("psychical");
                                              this.props.data.changePage(5);
                                            }}
                                          >
                                            Walka psychiczna
                                    </button>
                                        </>
                                      ) : (
                                          <button
                                            key={7}
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
                                  ),
                              ]
                            ),
                        ]
                      ),
                  ]
                )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
