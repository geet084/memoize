import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Nav extends Component {

  render() {
    let { updateSelection } = this.props;
    return (
      <nav className="nav">
        <ul className="types">
          <li onClick={updateSelection}
              className="all">
            All Prototypes
          </li>
          <li onClick={updateSelection}
              className="aTypes">
            Array Prototypes
          </li>
          <li onClick={updateSelection}
              className="sTypes">
            String Prototypes
          </li>
        </ul>
        <input type="text"
               onChange={updateSelection}
               placeholder="search for specific prototype" />
        <ul className="user">
          <li>Your Score</li>
          <li>Reset</li>
        </ul>
      </nav>
    );
  }
}