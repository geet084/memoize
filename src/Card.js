import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Card extends Component {

  
  render() {
    let { index, searchFound } = this.props;  
    let { prototypes, selection } = this.props.deets;
    let { all } = this.props.deets.prototypes;

    if (searchFound) {
      return (
        <div>
          <p>{Object.keys(all[index])[0]+ '()'}</p>
          <p>{Object.values(all[index])[0]}</p>
        </div>
      )
    } else if (!searchFound && !all){
      return (
        <div>
          <p>NO RESULTS</p>
        </div>
      )
    } else {
      return (
        <div>
          <p>--{selection}</p>
          {
            prototypes[selection].map(each => {
              return <p>
                       {Object.keys(each)[0]} <br />
                       {Object.values(each)[0]} </p>
            })
          }
        </div>
      )
    }
  }
}