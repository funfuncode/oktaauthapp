import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">OktaAuthApp</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/staff">Staff <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
