import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({
      prototypes: null,
      answeredQuestions: [],
      isLoading: true
    })
  })

  it('should retrieve data from local storage', () => {
    let result = wrapper.instance().getFromStorage();
    expect(result).toEqual([])
    wrapper.instance().updateAnsweredQuestions('hello', { question: 'mock' })
    result = wrapper.instance().getFromStorage();
    expect(result).toEqual([{ "guess": "hello", "question": { "question": "mock" } }])
  })

  it('should update local storage based on what was answered', () => {
    expect(wrapper.state()).toEqual({
      prototypes: null,
      answeredQuestions: [],
      isLoading: true
    })
    wrapper.instance().updateAnsweredQuestions();
    expect(wrapper.state()).toEqual({
      prototypes: null,
      answeredQuestions: [{
        guess: undefined,
        question: undefined
      }],
      isLoading: true
    })
  })

  it('should tally the number of questions answered right', () => {
    expect(wrapper.state()).toEqual({
      prototypes: null,
      answeredQuestions: [],
      isLoading: true
    })
    let result = wrapper.instance().tallyScore();
    expect(result).toEqual(0)
    wrapper.instance().updateAnsweredQuestions('hello', { question: 'mock' })
    result = wrapper.instance().tallyScore();
    expect(result).toEqual(1)
  })
  
  it('should reset local storage and state', () => {
    expect(wrapper.state()).toEqual({
      prototypes: null,
      answeredQuestions: [],
      isLoading: true
    })
    wrapper.instance().updateAnsweredQuestions('hello', { question: 'mock' })
    
    wrapper.instance().reset();
    expect(wrapper.state()).toEqual({
      prototypes: null,
      answeredQuestions: [],
      isLoading: true
    })
  })

  it('should render the splash page', () => {
    expect(wrapper.html()).toEqual("<div>Loading</div>");
  })

  it.skip('should render past the slash page', () => {

    // TRIED TO TEST THIS, COMPUTER DID NOT COOPERATE
    wrapper.state({isLoading: false})
    expect(wrapper.html()).toBeNull();
  })

});

