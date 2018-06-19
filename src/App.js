import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';


const onAuthRequired = ({ history }) => {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
          onAuthRequired={onAuthRequired}>

          <div className="App">
            <NavBar />
            <div className="container">
              <Route path="/" exact component={Home}/>
              <SecureRoute path="/staff" exact component={Staff} />
              <Route path="/login" render={() => <Login baseUrl="https://dev-975810.oktapreview.com"/>} />
              <Route path="implicit/callback" component={ImplicitCallback} />
            </div>
          </div>

        </Security>
      </Router>
    );
  }
}

const config = {
  issuer: 'https://dev-975810.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oafih15xk5qBIQJU0h7'
};

export default App;
