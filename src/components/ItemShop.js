import React, { Component } from "react";
import "../styles/Shop.scss";
// import HalfNavigation from "./HalfNavigation";
export default class ItemShop extends Component {
  state = {
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
  sellItem(number){
    const players = this.props.data.players[this.props.data.activePlayer]
      .character;
      players.strength = players.strength - players.items[number].strength;
      players.magic = players.magic - players.items[number].magic;
      players.hp = players.hp - players.items[number].hp;
      players.fate = players.fate - players.items[number].fate;
  }
  buyItem(number){
    if(this.props.data.players[this.props.data.activePlayer].character.items.length <= 6){
      const players = this.props.data.players[this.props.data.activePlayer]
      .character;
      let randomItems=[...this.state.randomItems]
      players.strength = players.strength + randomItems[number].strength;
      players.magic = players.magic + randomItems[number].magic;
      players.hp = players.hp + randomItems[number].hp;
      players.fate = players.fate + randomItems[number].fate;

    
    randomItems.splice(number,1);
    this.setState({
      randomItems:randomItems
    })
    }
    
  }
  render() {
    const { randomItems } = this.state;
    const { activePlayer, players } = this.props.data;
    return (
      <>
        {/* <HalfNavigation
          data={{
            pages: this.props.data.pages,
            changePage: this.props.data.changePage.bind(this),
            players: this.props.data.players,
            activePlayer: this.props.data.activePlayer,
            playersNumber: this.props.data.playersNumber,
          }}
        /> */}
        <div className="hero-gold shop-gold">
          <img src={require("../stats/045-money-bag.svg")} alt="hero item" />
          <p>Złoto {players[activePlayer].character.gold}</p>
        </div>
        {this.state.isSellClosed ? (
          <div className="shop-container">
            <h3 className="h3-sell">Wybierz przedmioty, które chcesz kupić</h3>
            {this.state.randomItems.length === 0 ? (
              <h4>Handlarz nie ma więcej przedmiotów</h4>
            ) : null}
            <div className="location-box1">
            {this.state.randomItems[0]===undefined ? null :
              <div className="location-box2">
                <h3>{randomItems[0].name}</h3>
                <div className="block"></div>
                <img src={randomItems[0].image} alt="location" />
                <div className="mission-box3">
                  <div className="mission-description">
                    <h5>Cena : {randomItems[0].gold}</h5>
                    <p className="shop-hidden">{randomItems[0].description1}</p>
                    <p >{randomItems[0].description2}</p>
                  </div>
                </div>

                <button
                  className="mission-button"
                  onClick={() => {
                    this.props.data.buyInMarket(
                      0,
                      this.state.randomItems,
                      "item"
                    );
                    this.buyItem(0);
                  }}
                >
                  Kup
                </button>
              </div>
            }
            {this.state.randomItems[1]===undefined ? null :
              <div className="location-box3">
                <h3>{randomItems[1].name}</h3>
                <div className="block"></div>
                <img src={randomItems[1].image} alt="location" />
                <div className="mission-box3">
                  <div className="mission-description">
                    <h5>Cena : {randomItems[1].gold}</h5>
                    <p className="shop-hidden">{randomItems[1].description1}</p>
                    <p>{randomItems[1].description2}</p>
                  </div>
                </div>
                <button
                  className="mission-button"
                  onClick={() => {
                    this.props.data.buyInMarket(
                      1,
                      this.state.randomItems,
                      "item"
                    );
                    this.buyItem(1);
                  }}
                >
                  Kup
                </button>
              </div>
            }
            </div>
            <button className="mission-button" onClick={() => {
                    this.props.data.changePage(2);
                    
                    this.props.data.changePlayer(activePlayer + 1);
                  }}>Przejdź dalej</button>
          </div>
        ) : (
          <div className="shop-container">
            <h3 className="h3-sell">Wybierz przedmioty, które chcesz sprzedać</h3>
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
                  <p className="shop-hidden">{players[activePlayer].character.items[0].description1}</p>
                  <p>{players[activePlayer].character.items[0].description2}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.sellItem(0);
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
                  <p className="shop-hidden">{players[activePlayer].character.items[1].description1}</p>
                  <p>{players[activePlayer].character.items[1].description2}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.sellItem(1);
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
                  <p className="shop-hidden">{players[activePlayer].character.items[2].description1}</p>
                  <p>{players[activePlayer].character.items[2].description2}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.sellItem(2);
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
                  <p className="shop-hidden">{players[activePlayer].character.items[3].description1}</p>
                  <p>{players[activePlayer].character.items[3].description2}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.sellItem(3);
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
                  <p className="shop-hidden">{players[activePlayer].character.items[4].description1}</p>
                  <p>{players[activePlayer].character.items[4].description2}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.sellItem(4);
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
                  <p className="shop-hidden">{players[activePlayer].character.items[5].description1}</p>
                  <p>{players[activePlayer].character.items[5].description2}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.sellItem(5);
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
