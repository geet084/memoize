import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Nav extends Component {

  render() {
    let { theScore } = this.props;
 
    return (
      <nav className="nav">
        <ul className="types">
          <li className="aTypes">Practice Array Prototypes</li>
        </ul>
        <ul className="user">
          <li>Total correct: {theScore}</li>
          <li onClick={this.props.reset}
            className="reset-btn">Reset</li>
        </ul>
      </nav>
    );
  }
}