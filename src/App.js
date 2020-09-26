import React, { Component } from "react";
// import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Mission from "./components/Mission";
import Hero from "./components/Hero";
import "./styles/App.scss";

export default class App extends Component {
  state = {
    pages: [
      { isOpen: true },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
    ],
    prevPage: 0,
  };
  changePage(number) {
    if (number === this.state.prevPage) {
    } else {
      let pages = [...this.state.pages];
      let page = { ...pages[number] };
      page.isOpen = true;
      pages[number] = page;

      pages[this.state.prevPage].isOpen = false;

      this.setState({
        pages,
        prevPage: number,
      });
    }
  }
  render() {
    const { pages } = this.state;
    return (
      <>
        <div className="App">
          {/* <Navigation /> */}
          {/* {pages[0].isOpen ? (
            <Login
              data={{
                changePage: this.changePage.bind(this),
              }}
            />
          ) : (
            <Registration
              data={{
                changePage: this.changePage.bind(this),
              }}
            />
          )} */}
          {(() => {
            if (pages[0].isOpen === true) {
              return (
                <Login
                  data={{
                    pages: pages,
                    changePage: this.changePage.bind(this),
                  }}
                />
              );
            } else if (pages[1].isOpen === true) {
              return (
                <Registration
                  data={{
                    pages: pages,
                    changePage: this.changePage.bind(this),
                  }}
                />
              );
            } else if (pages[2].isOpen === true) {
              return (
                <Hero
                  data={{
                    pages: pages,
                    changePage: this.changePage.bind(this),
                  }}
                />
              );
            } else if (pages[3].isOpen === true) {
              return (
                <Mission
                  data={{
                    pages: pages,
                    changePage: this.changePage.bind(this),
                  }}
                />
              );
            }
          })()}
          {/* <Login /> */}
          {/* <Mission /> */}
          {/* <Hero /> */}
        </div>
      </>
    );
  }
}
