import React, { Component } from "react";
import "../styles/Login.scss";
export default class Login extends Component {
  render() {
    return (
      <>
        <div className="login-container">
          <div className="login-box">
            <div className="login-registration-container">
              <div className="login-choice">Logowanie</div>
              <div
                className="registration-choice"
                onClick={() => {
                  this.props.data.changePage(1);
                }}
              >
                Rejestracja
              </div>
            </div>
            <form>
              <input type="text" placeholder="E-mail" />
              <input type="password" placeholder="Hasło" />

              <button
                onClick={() => {
                  this.props.data.changePage(2);
                }}
              >
                Zaloguj się
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
