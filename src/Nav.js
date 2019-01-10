import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Nav extends Component {

  render() {
    let { score, resetHandler } = this.props;
 
    return (
      <nav className="nav">
        <ul className="types">
          <li className="aTypes">Practice Array Prototypes!</li>
        </ul>
        <ul className="user">
          <li>Total correct: {score}</li>
          <li onClick={resetHandler}
            className="reset-btn">Reset your progress</li>
        </ul>
      </nav>
    );
  }
}