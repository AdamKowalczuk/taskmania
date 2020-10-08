import React, { Component } from "react";
import "../styles/Shop.scss";
import HalfNavigation from "./HalfNavigation";
export default class ItemShop extends Component {
  state = {
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
        description: "Piękne i krwawe ostrze. Dodaje +1 do ataku.",
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
        description: "Podstawowy ekwipunek zwiadowców. Dodaje +2 do szczęścia.",
        strength: 0,
        magic: 0,
        hp: 0,
        fate: 2,
        gold: 1,
        image: require("../items/48-shoes.svg"),
        type: "items",
      },
    ],

    randomItems: [
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
        description: "Podstawowy ekwipunek zwiadowców. Dodaje +2 do szczęścia.",
        strength: 0,
        magic: 0,
        hp: 0,
        fate: 2,
        gold: 1,
        image: require("../items/48-shoes.svg"),
        type: "items",
      },
    ],
    isSellClosed: false,
  };
  componentDidMount() {
    this.getRandomItems();
  }
  getRandomItems() {
    let length = this.state.items.length;
    let random1 = Math.floor(Math.random() * length);

    let random2 = Math.floor(Math.random() * length);
    while (random1 === random2) {
      random2 = Math.floor(Math.random() * length);
    }
    let randomItems = [{}, {}];
    randomItems[0] = this.state.items[random1];
    randomItems[1] = this.state.items[random2];
    this.setState({
      randomItems: randomItems,
    });
  }
  changeToBuy() {
    this.setState({
      isSellClosed: true,
    });
  }
  render() {
    const { randomItems } = this.state;
    const { activePlayer, players } = this.props.data;
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
        {this.state.isSellClosed ? (
          <div className="shop-container">
            <h2>Witaj u handlarza</h2>
            <h3>Dostępne towary:</h3>
            <div className="location-box1">
              <div className="location-box2">
                <h3>{randomItems[0].name}</h3>
                <div className="block"></div>
                <img src={randomItems[0].image} alt="location" />
                <div className="mission-box3">
                  <div className="mission-description">
                    <h5>Cena : {randomItems[0].gold}</h5>
                    <p>{randomItems[0].description}</p>
                  </div>
                </div>

                <button
                  className="mission-button"
                  onClick={() => {
                    this.props.data.changePage(2);
                    this.props.data.buyInMarket(
                      0,
                      this.state.randomItems,
                      "item"
                    );
                    this.props.data.changePlayer(activePlayer + 1);
                  }}
                >
                  Kup
                </button>
              </div>
              <div className="location-box3">
                <h3>{randomItems[1].name}</h3>
                <div className="block"></div>
                <img src={randomItems[1].image} alt="location" />
                <div className="mission-box3">
                  <div className="mission-description">
                    <h5>Cena : {randomItems[1].gold}</h5>
                    <p>{randomItems[1].description}</p>
                  </div>
                </div>

                <button
                  className="mission-button"
                  onClick={() => {
                    this.props.data.changePage(2);
                    this.props.data.buyInMarket(
                      1,
                      this.state.randomItems,
                      "item"
                    );
                    this.props.data.changePlayer(activePlayer + 1);
                  }}
                >
                  Kup
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="shop-container">
            <h3>Twoje przedmioty:</h3>
            {players[activePlayer].character.items.length === 0 ? (
              <h4>Brak przedmiotów</h4>
            ) : null}
            <div className="shop-item-container">
              {players[activePlayer].character.items[0] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[0].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[0].name}</h4>
                  <h5>
                    Cena : {players[activePlayer].character.items[0].gold}
                  </h5>
                  <p>{players[activePlayer].character.items[0].description}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.props.data.sellInMarket(
                        0,
                        players[activePlayer].character.items[0],
                        "item"
                      );
                    }}
                    alt="hero item"
                  />
                </div>
              )}
              {players[activePlayer].character.items[1] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[1].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[1].name}</h4>
                  <h5>
                    Cena : {players[activePlayer].character.items[1].gold}
                  </h5>
                  <p>{players[activePlayer].character.items[1].description}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.props.data.sellInMarket(
                        1,
                        players[activePlayer].character.items[1],
                        "item"
                      );
                    }}
                    alt="hero item"
                  />
                </div>
              )}
              {players[activePlayer].character.items[2] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[2].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[2].name}</h4>
                  <h5>
                    Cena : {players[activePlayer].character.items[2].gold}
                  </h5>
                  <p>{players[activePlayer].character.items[2].description}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.props.data.sellInMarket(
                        2,
                        players[activePlayer].character.items[2],
                        "item"
                      );
                    }}
                    alt="hero item"
                  />
                </div>
              )}
              {players[activePlayer].character.items[3] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[3].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[3].name}</h4>
                  <h5>
                    Cena : {players[activePlayer].character.items[3].gold}
                  </h5>
                  <p>{players[activePlayer].character.items[3].description}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.props.data.sellInMarket(
                        3,
                        players[activePlayer].character.items[3],
                        "item"
                      );
                    }}
                    alt="hero item"
                  />
                </div>
              )}
              {players[activePlayer].character.items[4] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[4].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[4].name}</h4>
                  <h5>
                    Cena : {players[activePlayer].character.items[4].gold}
                  </h5>
                  <p>{players[activePlayer].character.items[4].description}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.props.data.sellInMarket(
                        4,
                        players[activePlayer].character.items[4],
                        "item"
                      );
                    }}
                    alt="hero item"
                  />
                </div>
              )}

              {players[activePlayer].character.items[5] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.items[5].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.items[5].name}</h4>
                  <h5>
                    Cena : {players[activePlayer].character.items[5].gold}
                  </h5>
                  <p>{players[activePlayer].character.items[5].description}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.props.data.sellInMarket(
                        5,
                        players[activePlayer].character.items[5],
                        "item"
                      );
                    }}
                    alt="hero item"
                  />
                </div>
              )}
            </div>
            <button
              className="mission-button"
              onClick={() => {
                this.changeToBuy();
              }}
            >
              Przejdź dalej
            </button>
          </div>
        )}
      </>
    );
  }
}
