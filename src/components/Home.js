import React, { Component } from 'react'
import '../styles/Home.scss'
export default class Home extends Component {
    render() {
        return (
            <>
                <div className="home-container">
                    <img className="background" src={require("../Taskmania.png")} alt="Taskmania" />
                    <div className="home-box1">
                        <h2>Instrukcja</h2>
                        <img className="photo-button" src={require("../other/instruction.png")} alt="Taskmania tutorial" onClick={() => this.props.data.changePage(8)} />
                    </div>
                    <div className="home-box2">
                        <h2>Graj</h2>
                        <img className="photo-button" src={require("../other/dragon.png")} alt="Taskmania dragon" onClick={() => this.props.data.changePage(0)} />
                    </div>
                </div>
            </>
        )
    }
}
