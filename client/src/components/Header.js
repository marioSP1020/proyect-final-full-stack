import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>PROYECTO FINAL</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/ErrorPage">ERROR</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  
};

export default Header;
