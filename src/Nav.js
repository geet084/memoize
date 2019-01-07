import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Nav extends Component {

  render() {
    return (
      <nav className="nav">
        <ul className="types">
          <li className="aTypes">Practice Array Prototypes</li>
        </ul>
        <ul className="user">
          <li>Your Score</li>
          <li>Reset</li>
        </ul>
      </nav>
    );
  }
}