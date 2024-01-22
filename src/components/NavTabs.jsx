// Components/NavTabs.jsx
import { NavLink } from 'react-router-dom';

const NavTabs = () => {
  return (
    <nav className="nav-tabs">
      <NavLink exact to="/About" activeClassName="active" style={{ marginRight: '10px' }}>About Me</NavLink>
      <NavLink to="/Portfolio" activeClassName="active" style={{ marginRight: '10px' }}>Portfolio</NavLink>
      <NavLink to="/Contact" activeClassName="active" style={{ marginRight: '10px' }}>Contact</NavLink>
      <NavLink to="/Resume" activeClassName="active">Resume</NavLink>
    </nav>
  );
};

export default NavTabs;
