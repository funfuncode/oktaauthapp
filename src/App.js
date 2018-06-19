import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <NavBar />
            <Route path="/" exact component={Home}/>
            <Route path="/staff" exact component={Staff}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
