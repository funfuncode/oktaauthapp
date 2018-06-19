import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    this.props.auth.login('/');
  }

  async logout() {
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;

    const mainContent = this.state.authenticated ?
    (
      <div>
        <p className="lead">You are on a staff portal, <Link to="/staff">click here</Link></p>
        <button className="btn btn-primary" onClick={this.logout}>Log out</button>
      </div>
    ) :
    (
      <div>
        <p className="lead">If you are a staff member, please get your credentials from manager</p>
        <button className="btn btn-secondary" onClick={this.login}>Login</button>
      </div>
    )

    return (
      <div className="jumbotron">
        <h1 className="display-4">Staff portal</h1>
        {mainContent}
      </div>
    );
  }
}

export default withAuth(Home);
