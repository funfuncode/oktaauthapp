import React, { Component } from 'react';

class Staff extends Component {

  state = {
    currentUserName: '',
    currentUserEmail: ''
  }

  componentDidMount(){
    const locStorage = JSON.parse(localStorage.getItem('okta-token-storage'));
    const currentUserName = locStorage.idToken.claims.name;
    const currentUserEmail = locStorage.idToken.claims.email;

    this.setState({ currentUserName, currentUserEmail });
  }

  render(){
    return (
      <div>
        <h1>Welcome {this.state.currentUserName}</h1>
        <p>Email: {this.state.currentUserEmail}</p>
        <p>You have reached an authorized area</p>
      </div>

    );
  }
}

export default Staff;
