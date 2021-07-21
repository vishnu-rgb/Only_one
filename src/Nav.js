
import React, { Component } from "react";
import { Link } from "@reach/router";
import './Nav.css';

class Nav extends Component {
    render() {
      return (
        <nav className="Nav-Wrapper">
          <span>
            <Link to="/" className="Nav-Home" onClick={e => this.props.leaveRoom()}>Only One</Link>
            <Link to="#" className="Nav-Rules" onClick={e => this.props.toggleRules()}>Rules</Link>
          </span>
          {this.props.roomName && (<span className="Nav-Room">{`room: ${this.props.roomName}`}
            <button className="small gray" onClick={e => this.props.changeRoom()}>New Room</button>
          </span>
          )}
        </nav>
      );
    }
  }
export default Nav;