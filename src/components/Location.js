import React, { Component } from "react";
import "../styles/Location.scss";

import Navigation from "../components/Navigation";
export default class Location extends Component {
  state = {
    locations: [
      {
        name: "Las",
        elements: ["Przeciwników"
        //  "Zdarzenia losowe",
         , "Przedmioty", "Pupile"],
        image: require("../locations/trees.svg"),
      },
      // {
      //   name: "Arena",
      //   elements: ["Wrogich graczy"],
      //   image: require("../locations/colosseum.svg"),
      // },
      {
        name: "Targowisko",
        elements: ["Handlarz ekwipunku", "Handlarz pupili"],
        image: require("../locations/produce-market.svg"),
      },
      {
        name: "Miasto",
        elements: ["Przeciwników"
        // ,"Zdarzenia losowe"
      ],
        image: require("../locations/city.svg"),
      },
      {
        name: "Rzeka",
        elements: ["Przeciwników", 
        // "Zdarzenia losowe",
         "Pupile"],
        image: require("../locations/river.svg"),
      },
      {
        name: "Cmentarz",
        elements: ["Przeciwników", 
        // "Zdarzenia losowe",
         "Przedmioty"],
        image: require("../locations/graveyard.svg"),
      },
      {
        name: "Jaskinia",
        elements: ["Bossa"],
        image: require("../locations/cave.svg"),
      },
    ],
    locationActive: [
      {
        name: "Las",
        elements: ["Przeciwników","Przedmioty", "Pupile"],
        image: require("../locations/trees.svg"),
      },
      {
        name: "Arena",
        elements: ["Wrogich graczy"],
        image: require("../locations/colosseum.svg"),
      },
    ],
  };
  componentDidMount() {
    this.drawLocation();
  }
  
  drawLocation() {
    let random1 = Math.floor(Math.random() * this.state.locations.length);
    let random2 = Math.floor(Math.random() * this.state.locations.length);
    while (random2 === random1) {
      random2 = Math.floor(Math.random() * this.state.locations.length);
    }
    let location1 = this.state.locations[random1];
    let location2 = this.state.locations[random2];
    let locationActive = [location1, location2];
    this.setState({
      locationActive: locationActive,
    });
  }

  render() {
    const { locationActive } = this.state;
    const { activePlayer, players } = this.props.data;
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
        <div className="location-container">
          <h2>Tura gracza {players[activePlayer].nick}</h2>
          <div className="location-box1">
            <div className="location-box2">
              <h3>{locationActive[0].name}</h3>
              <div className="block"></div>
              <img src={locationActive[0].image} alt="location" />
              <div className="mission-box3">
                <div className="mission-description">
                  <p>Możesz napotkać:</p>
                  <ul>
                    {locationActive[0].elements.map((location, id) => {
                      return <li key={id}>{location}</li>;
                    })}
                  </ul>
                </div>
              </div>

              <button
                className="mission-button"
                onClick={() => {
                  this.props.data.selectLocation(locationActive[0].name);
                  this.props.data.changePage(4);
                }}
              >
                Idź
              </button>
            </div>
            <div className="location-box3">
              <h3>{locationActive[1].name}</h3>
              <div className="block"></div>
              <img src={locationActive[1].image} alt="location" />
              <div className="mission-box3">
                <div className="mission-description">
                  <p>Możesz napotkać:</p>
                  <ul>
                    {locationActive[1].elements.map((location, id) => {
                      return <li key={id}>{location}</li>;
                    })}
                  </ul>
                </div>
              </div>

              <button
                className="mission-button"
                onClick={() => {
                  this.props.data.selectLocation(locationActive[1].name);
                  this.props.data.changePage(4);
                }}
              >
                Idź
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
