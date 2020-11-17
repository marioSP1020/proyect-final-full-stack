/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import Auth from '../lib/auth.js';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const history = useHistory();

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const logout = () => {
    Auth.removeToken();
    history.push('/');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <strong>Portal Fotografia y Video</strong>
          </Link>

          <a
            className={`navbar-burger ${navbarOpen ? 'is-active' : ''}`}
            onClick={toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/photos">
              List Photos
            </Link>
            <Link className="navbar-item" to="/videos">
              List Videos
            </Link>
            {Auth.isAuthenticated() && (
              <Link className="navbar-item" to="/photos/new">
                Add Photo
              </Link>
            )}
            {!Auth.isAuthenticated() && (
              <Link className="navbar-item" to="/register">
                Register
              </Link>
            )}
            {!Auth.isAuthenticated() && (
              <Link className="navbar-item" to="/login">
                Login
              </Link>
            )}
            {Auth.isAuthenticated() && (
              <a className="navbar-item" onClick={logout}>
                Logout
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
