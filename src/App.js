import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux';

const reduxStore = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Board/>
        </div>
      </Provider>
    );
  }
}

export default App;
