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
        <div className="mission-container">
          <h2>Wybierz misję</h2>
          <div className="mission-box1">
            <div className="mission-box2">
              <h3>Nazwa misji</h3>
              <div className="block"></div>
              <img src={require("../enemies/001-wolf.svg")} alt="mission" />
              <div className="mission-box3">
                <div className="mission-conditions">
                  <h4>Wymagania</h4>
                  <p>Czas: 1 minuta</p>
                  <p>Energia: 10%</p>
                </div>
                <div className="mission-reward">
                  <h4>Nagroda</h4>
                  <p>Złoto: 10</p>
                  <p>Doświadczenie: 100</p>
                </div>
              </div>

              <button className="mission-button">Walcz</button>
            </div>
            <div className="mission-box2">
              <h3>Nazwa misji</h3>
              <div className="block"></div>
              <img src={require("../enemies/020-goblin.svg")} alt="mission" />
              <div className="mission-box3">
                <div className="mission-conditions">
                  <h4>Wymagania</h4>
                  <p>Czas: 1 minuta</p>
                  <p>Energia: 10%</p>
                </div>
                <div className="mission-reward">
                  <h4>Nagroda</h4>
                  <p>Złoto: 10</p>
                  <p>Doświadczenie: 100</p>
                </div>
              </div>

              <button className="mission-button">Walcz</button>
            </div>
            <div className="mission-box2">
              <h3>Nazwa misji</h3>
              <div className="block"></div>
              <img src={require("../enemies/025-beast.svg")} alt="mission" />
              <div className="mission-box3">
                <div className="mission-conditions">
                  <h4>Wymagania</h4>
                  <p>Czas: 1 minuta</p>
                  <p>Energia: 10%</p>
                </div>
                <div className="mission-reward">
                  <h4>Nagroda</h4>
                  <p>Złoto: 10</p>
                  <p>Doświadczenie: 100</p>
                </div>
              </div>

              <button className="mission-button">Walcz</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
