import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import UserPicker from './UserPicker/UserPicker';

const users = [
  { src: require('../styles/img/avatar1.png'), name: 'Chesley', id: 1 },
  { src: require('../styles/img/avatar2.png'), name: 'Daren', id: 2 },
  { src: require('../styles/img/avatar3.png'), name: 'Palmer', id: 3 },
  { src: require('../styles/img/avatar4.png'), name: 'Ada', id: 4 },
  { src: require('../styles/img/avatar5.png'), name: 'Martie', id: 5 },
  { src: require('../styles/img/avatar6.png'), name: 'Jazmine', id: 6 },
  { src: require('../styles/img/avatar7.png'), name: 'Angel', id: 7 }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todos App</h2>
        </div>
          <UserPicker users={ users }/>
      </div>
    );
  }
}

export default App;
