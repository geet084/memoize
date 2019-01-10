import { configure } from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const localStorage = {
  store: {},
  length: 0,
  getItem: function (key) {
    return this.store[key];
  },
  setItem: function (key, item) {
    this.length++;
    this.store[key] = item;
  },
  removeItem: function (key) {
    this.length--;
    delete this.store[key];
  },
  clear: function () {
    this.length = 0;
    this.store = {};
  }
};

module.exports = localStorage;