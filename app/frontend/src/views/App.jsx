// FIXME
import '../assets/css/App.css';

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Nav from '../components/layout/Nav';
import Content from '../components/layout/Content';

function App() {
  return (
 
    <Router>
      <Nav />
      <Content />
    </Router>
  );
}

export default App;
