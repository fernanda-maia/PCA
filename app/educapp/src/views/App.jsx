import '../assets/css/App.css';

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import UserData from '../data/UserData'
import UserSettings from '../data/UserSettings'
import Nav from '../components/layout/Nav';
import Content from '../components/layout/Content';

function App() {
  return (
    <UserData>
      <UserSettings>
        <Router>
          <Nav />
          <Content />
        </Router>
      </ UserSettings>
    </ UserData>
  );
}

export default App;
