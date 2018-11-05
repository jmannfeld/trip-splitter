import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import TripInfoQuestions from './TripInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfoScreens: true,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TRIP SPLITTER</h1>
        </header>
        {this.state.showInfoScreens ?
          <TripInfoQuestions /> :
          // show main page
          <Card />
        }
      </div>
    );
  }
}

export default App;
