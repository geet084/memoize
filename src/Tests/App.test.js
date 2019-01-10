import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
global.localStorage = '../setupTests.js';

global.JSON = {
  parse: function (str) {
    return str;
  },
  stringify: function (str) {
    return str;
  }
}

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
    wrapper.setState({answeredQuestions: []})
  })

  afterEach(() => {
    localStorage.clear();
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should return an empty array if local storage is empty', () => { 
    
    expect(wrapper.instance().getFromStorage()).toEqual([])
  })

  it('should return and array of items from local storage if it is not empty', () => {

    localStorage.setItem('userAnsweredQuestions', ['a', 'b'])
    let newArray = localStorage.getItem('userAnsweredQuestions')
    expect(wrapper.instance().getFromStorage()).toEqual(newArray)    
  })

  it('should update answered questions list', () => {
    expect(wrapper.state('answeredQuestions')).toEqual([])
    expect(wrapper.instance().getFromStorage()).toEqual([])

    wrapper.instance().updateAnsweredQuestions({}, 'hello');

    expect(wrapper.state('answeredQuestions')).toEqual([{ userGuess: 'hello', question: {} }])
    let newArray = localStorage.getItem('userAnsweredQuestions')
    expect(wrapper.instance().getFromStorage()).toEqual(newArray)
  })

  it('should update the players score if the answer is guessed right', () => { 
    expect(wrapper.state('score')).toEqual(0)
    wrapper.setState({
      answeredQuestions: [{ userGuess: true, question: {} }]
    })
    wrapper.instance().tallyScore();
    expect(wrapper.state('score')).toEqual(1)
  })

  it('should not update the players score if the answer is guessed wrong', () => {
    expect(wrapper.state('score')).toEqual(0)
    wrapper.setState({
      answeredQuestions: [{ userGuess: false, question: {} }]
    })
    wrapper.instance().tallyScore();
    expect(wrapper.state('score')).toEqual(0)
  })

  it('should reset the score and answered questions list', () => {
    wrapper.setState({
      answeredQuestions: [{ score: 9, userGuess: false, question: {} }]
    })
    
    wrapper.instance().resetAnsweredQuestions();

    expect(wrapper.state()).toEqual({
      score: 0, answeredQuestions: [], prototypes: []
    })
  })
});

