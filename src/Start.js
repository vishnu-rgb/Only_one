import React, { Component } from "react";


import Nav from "./Nav.js";
import Rules from "./Rules.js";

import "./Start.css";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      room: "",
      rules: false,
    };
  }

  handleChangeName = e => this.setState({name: e.target.value});
  handleChangeRoom = e => this.setState({room: e.target.value});
  toggleRules = () => this.setState({rules: !this.state.rules});

  submit = (e) => {
   
  }

  render() {
    return (
      <div className="Start-Wrapper">
        <Nav toggleRules={this.toggleRules}/>
        <div className="Start-Copy">
          <form onSubmit={this.submit}>
            <span>
              <label htmlFor="room">Room:</label>
              <input
                id="room"
                onChange={this.handleChangeRoom}
                type="text"
                value={this.state.room}
              />
            </span>
            <span>
              <label htmlFor="name">name:</label>
              <input
                id="name"
                onChange={this.handleChangeName}
                type="text"
                value={this.state.name}
              />
            </span>
            <button type="submit">Start</button>
          </form>
          
        </div>
        <Rules shown={this.state.rules} toggleRules={this.toggleRules}/>
      </div>
    );
  }
};

export default Start;