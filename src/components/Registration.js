import React, { Component } from "react";
import "../styles/Login.scss";
export default class Login extends Component {
  render() {
    return (
      <>
        <div className="login-container">
          <div className="login-box">
            <div className="login-registration-container">
              <div
                className="login-choice"
                onClick={() => {
                  this.props.data.changePage(0);
                }}
              >
                Logowanie
              </div>
              <div className="registration-choice">Rejestracja</div>
            </div>
            <form>
              <input type="text" placeholder="Nazwa bohatera" />
              <input type="text" placeholder="E-mail" />
              <input type="password" placeholder="Hasło" />
              <button>Zarejestruj się</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
