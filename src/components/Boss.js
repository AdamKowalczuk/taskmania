import React, { Component } from "react";
import Navigation from "../components/Navigation";
export default class Boss extends Component {
  render() {
    return (
      <>
        <Navigation
          data={{
            pages: this.props.data.pages,
            changePage: this.props.data.changePage.bind(this),
          }}
        />
        Boss
      </>
    );
  }
}
