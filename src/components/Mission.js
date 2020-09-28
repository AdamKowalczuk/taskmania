import React, { Component } from "react";
import "../styles/Mission.scss";

import Navigation from "../components/Navigation";
export default class Mission extends Component {
  render() {
    return (
      <>
        <Navigation
          data={{
            pages: this.props.data.pages,
            changePage: this.props.data.changePage.bind(this),
          }}
        />
        <div className="location-container mission-container">
          <h2>Wybierz misję</h2>
          <div className="location-box1">
            <div className="location-box2">
              <h3>Nazwa misji</h3>
              <div className="block"></div>
              <img src={require("../enemies/001-wolf.svg")} alt="mission" />
              <div className="mission-box3">
                <div className="mission-description">
                  <h5>Siła : 4</h5>
                  <p>
                    Opis misji ble bla bla ble bla bla ble bla bla ble bla bla
                  </p>
                </div>
              </div>

              <button className="mission-button">Walcz</button>
            </div>
            {/* <div className="mission-box1">
            <div className="mission-box2">
              <h3>Nazwa misji</h3>
              <div className="block"></div>
              <img src={require("../enemies/001-wolf.svg")} alt="mission" />
              <div className="mission-box3">
                <div className="mission-description">
                  <h5>Siła : 4</h5>
                  <p>Opis misji</p>
                </div>
              </div>

              <button className="mission-button">Walcz</button>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
