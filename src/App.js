import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './containers/searchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='http://www.freepngimg.com/download/sun/3-2-sun-png-clipart.png' className="App-logo" alt="logo" />
          <h2>Weather App</h2>
        </div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
