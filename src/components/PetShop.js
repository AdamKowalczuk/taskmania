import React, { Component } from "react";
import "../styles/Shop.scss";
// import HalfNavigation from "./HalfNavigation";
export default class PetShop extends Component {
  state = {
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
        description2: "Niewiele robi. Brak pożytku.",
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
    randomPets: [
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
    isSellClosed: false,
  };
  componentDidMount() {
    this.getRandomPets();
  }
  getRandomPets() {
    let length = this.state.pets.length;
    let random1 = Math.floor(Math.random() * length);

    let random2 = Math.floor(Math.random() * length);
    while (random1 === random2) {
      random2 = Math.floor(Math.random() * length);
    }
    let randomPets = [{}, {}];
    randomPets[0] = this.state.pets[random1];
    randomPets[1] = this.state.pets[random2];
    this.setState({
      randomPets: randomPets,
    });
  }
  changeToBuy() {
    this.setState({
      isSellClosed: true,
    });
  }
  sellItem(number){
      const players = this.props.data.players[this.props.data.activePlayer].character;
      players.strength = players.strength - players.pets[number].strength;
      players.magic = players.magic - players.pets[number].magic;
      players.hp = players.hp - players.pets[number].hp;
      players.fate = players.fate - players.pets[number].fate;
    
  }
  buyPet(number){
    if(this.props.data.players[this.props.data.activePlayer].character.pets.length <= 4)
    {
      const players = this.props.data.players[this.props.data.activePlayer].character;
        const randomPets=this.state.randomPets;
        players.strength = players.strength + randomPets[number].strength;
        players.magic = players.magic + randomPets[number].magic;
        players.hp = players.hp + randomPets[number].hp;
        players.fate = players.fate + randomPets[number].fate;
  
  
      randomPets.splice(number,1);
      this.setState({
        randomPets:randomPets
      })
    }
    
  }
  
  render() {
    const { randomPets } = this.state;
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
            <h3 className="h3-sell">Wybierz pupile, które chcesz kupić</h3>
            {this.state.randomPets.length === 0 ? (
              <h4>Handlarz nie ma więcej pupili</h4>
            ) : null}
            <div className="location-box1">
            {this.state.randomPets[0]===undefined ? null :
              <div className="location-box2">
                <h3>{randomPets[0].name}</h3>
                <div className="block"></div>
                <img src={randomPets[0].image} alt="location" />
                <div className="mission-box3">
                  <div className="mission-description">
                    <h5>Cena : {randomPets[0].gold}</h5>
                    <p className="shop-hidden">{randomPets[0].description1}</p>
                    <p>{randomPets[0].description2}</p>
                  </div>
                </div>

                <button
                  className="mission-button"
                  onClick={() => {
                    
                    this.props.data.buyInMarket(
                      0,
                      this.state.randomPets,
                      "pet"
                    );
                    this.buyPet(0);
                  }}
                >
                  Kup
                </button>
              </div>
  }
              {this.state.randomPets[1]===undefined ? null :
              <div className="location-box3">
                <h3>{randomPets[1].name}</h3>
                <div className="block"></div>
                <img src={randomPets[1].image} alt="location" />
                <div className="mission-box3">
                  <div className="mission-description">
                    <h5>Cena : {randomPets[1].gold}</h5>
                    <p className="shop-hidden">{randomPets[1].description1}</p>
                    <p>{randomPets[1].description2}</p>
                  </div>
                </div>

                <button
                  className="mission-button"
                  onClick={() => {
                    this.props.data.buyInMarket(
                      1,
                      this.state.randomPets,
                      "pet"
                    );
                    this.buyPet(1);
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
            <h3 className="h3-sell">Wybierz pupile, które chcesz sprzedać</h3>
            {players[activePlayer].character.pets.length === 0 ? (
              <h4>Brak pupili na sprzedaż</h4>
            ) : null}
            <div className="shop-item-container">
              {players[activePlayer].character.pets[0] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.pets[0].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.pets[0].name}</h4>
                  <h5>Cena : {players[activePlayer].character.pets[0].gold}</h5>
                  <p className="shop-hidden">{players[activePlayer].character.pets[0].description1}</p>
                  <p>{players[activePlayer].character.pets[0].description2}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.sellItem(0);
                      this.props.data.sellInMarket(
                        0,
                        players[activePlayer].character.pets[0],
                        "pets"
                      );
                    }}
                    alt="hero item"
                  />
                </div>
              )}
              {players[activePlayer].character.pets[1] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.pets[1].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.pets[1].name}</h4>
                  <h5>Cena : {players[activePlayer].character.pets[1].gold}</h5>
                  <p className="shop-hidden">{players[activePlayer].character.pets[1].description1}</p>
                  <p>{players[activePlayer].character.pets[1].description2}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.sellItem(1);
                      this.props.data.sellInMarket(
                        1,
                        players[activePlayer].character.pets[1],
                        "pets"
                      );
                    }}
                    alt="hero item"
                  />
                </div>
              )}
              {players[activePlayer].character.pets[2] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.pets[2].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.pets[2].name}</h4>
                  <h5>Cena : {players[activePlayer].character.pets[2].gold}</h5>
                  <p className="shop-hidden">{players[activePlayer].character.pets[2].description1}</p>
                  <p>{players[activePlayer].character.pets[2].description2}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.sellItem(2);
                      this.props.data.sellInMarket(
                        2,
                        players[activePlayer].character.pets[2],
                        "pets"
                      );
                    }}
                    alt="hero item"
                  />
                </div>
              )}
              {players[activePlayer].character.pets[3] === undefined ? null : (
                <div className="hero-items-box">
                  <img
                    src={players[activePlayer].character.pets[3].image}
                    alt="hero item"
                  />
                  <h4>{players[activePlayer].character.pets[3].name}</h4>
                  <h5>Cena : {players[activePlayer].character.pets[3].gold}</h5>
                  <p className="shop-hidden">{players[activePlayer].character.pets[3].description1}</p>
                  <p>{players[activePlayer].character.pets[3].description2}</p>
                  <img
                    className="sell-image"
                    src={require("../stats/045-money-bag.svg")}
                    onClick={() => {
                      this.sellItem(3);
                      this.props.data.sellInMarket(
                        3,
                        players[activePlayer].character.pets[3],
                        "pets"
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
