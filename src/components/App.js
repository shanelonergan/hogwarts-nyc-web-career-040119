import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < PigContainer />

      </div>
    )
  }
}

export default App;
