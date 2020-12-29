import React, { Component } from "react";
import "../styles/Characters.scss";

export default class Characters extends Component {
  state = {
    characters: [
      {
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
      {
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

      {
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
            description1: "Dodaje +2 do życia",
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
      {
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
      {
        name: "Wilk alfa",
        image: require("../heroes/005-werewolf.svg"),
        hp: 3,
        strength: 3,
        magic: 2,
        fate: 1,
        gold: 1,
        exp: 0,
        description:
          "Posiadasz 2 wilki. Po stracie wilka tracisz jego bonusy oraz 2 punkty siły.",
        items: [],
        pets: [
          {
            name: "Wilk",
            description1: "Silny i inteligentny. Idealny towarzysz podróży.",
            description2: "Dodaje +2 do siły i +1 do zdrowia.",
            strength: 2,
            magic: 0,
            hp: 1,
            fate: 0,
            gold: 1,
            image: require("../pets/wolf.svg"),
          },
          {
            name: "Wilk",
            description1:
              "Silny i inteligentny. Idealny towarzysz podróży. ",
            description2: "Dodaje +2 do siły i +1 do zdrowia.",
            strength: 2,
            magic: 0,
            hp: 1,
            fate: 0,
            gold: 1,
            image: require("../pets/wolf.svg"),
          },
        ],
        bossKilled: 0,
      },
      // {
      //   name: "Janusz",
      //   image: require("../heroes/janusz.svg"),
      //   hp: 3,
      //   strength: 3,
      //   magic: 3,
      //   fate: 1,
      //   gold: 1,
      //   exp: 0,
      //   description:
      //     "Postać legenda. Dobrze wychowany i kulturalny. Zaczyna grę z 2 pupilami i 2 broniami.",
      //   items: [
      //     {
      //       name: "Zabójcze poślady",
      //       description: "Nikt nie potrafi im się oprzeć. Dodają +1 do ataku.",
      //       strength: 1,
      //       magic: 0,
      //       hp: 0,
      //       fate: 0,
      //       gold: 1,
      //       image: require("../items/hips.svg"),
      //       type: "items",
      //     },
      //     {
      //       name: "Sandały Janusza",
      //       description:
      //         "Kunszt rzemieślników. Piękne i gustowne. Dodają +2 do szczęścia.",
      //       strength: 0,
      //       magic: 0,
      //       hp: 0,
      //       fate: 2,
      //       gold: 1,
      //       image: require("../items/036-hermes-1.svg"),
      //       type: "items",
      //     },
      //   ],
      //   pets: [
      //     {
      //       name: "Brajanek",
      //       description:
      //         "Spolszczona forma imienia Brian, bijąca rekordy popularności wśród szesnastoletnich matek ze środowisk wiejsko-patologicznych. Dodaje -2 do zdrowia",
      //       strength: 0,
      //       magic: 0,
      //       hp: -2,
      //       fate: 0,
      //       gold: 0,
      //       image: require("../pets/brajanek.svg"),
      //     },
      //     {
      //       name: "Grażyna",
      //       description:
      //         "Stereotypowa kobieta w średnim wieku, niegrzesząca inteligencją. Uosobienie wiochy, obciachu, zaściankowości i cebulactwa. Jej mężem jest typowy Janusz. Dodaje +1 do siły.",
      //       strength: 1,
      //       magic: 0,
      //       hp: 0,
      //       fate: 0,
      //       gold: 0,
      //       image: require("../pets/grażyna.svg"),
      //     },
      //   ],
      //   bossKilled: 0,
      // },

      // {
      //   name: "Losowa postać",
      //   image: require("../heroes/random.svg"),
      //   hp: 1,
      //   strength: 1,
      //   magic: 1,
      //   fate: 1,
      //   gold: 1,
      //   exp: 0,
      //   description: "Wybiera losową postać z puli wszystkich bohaterów.",
      //   items: [],
      //   pets: [],
      //   bossKilled: 0,
      // },
    ],
    currentCharacter: {
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

  getDetails(id) {
    this.setState({
      currentCharacter: this.state.characters[id],
    });
  }
  setHero(id, players) {
    players[id].character = this.state.currentCharacter;
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
