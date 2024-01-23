// Components/NavTabs.jsx
import { NavLink } from 'react-router-dom';

const NavTabs = () => {
  const navLinkStyle = {
    fontSize: '16px', // Adjust the font size as needed
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" exact to="/About" activeClassName="active" style={navLinkStyle}>About Me</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Portfolio" activeClassName="active" style={navLinkStyle}>Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact" activeClassName="active" style={navLinkStyle}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Resume" activeClassName="active" style={navLinkStyle}>Resume</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavTabs;
