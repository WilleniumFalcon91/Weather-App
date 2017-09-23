import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/searchBar';
import WeatherList from './containers/weatherList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='http://www.freepngimg.com/download/sun/3-2-sun-png-clipart.png' className="App-logo" alt="logo" />
          <h2>Weather App</h2>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
