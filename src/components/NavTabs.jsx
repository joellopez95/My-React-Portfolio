import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavTabs = () => {
  const navLinkStyle = {
    fontSize: '16px',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/About" style={navLinkStyle}>
          About Me
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Portfolio"
                activeClassName="active"
                style={navLinkStyle}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Contact"
                activeClassName="active"
                style={navLinkStyle}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Resume"
                activeClassName="active"
                style={navLinkStyle}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavTabs;
