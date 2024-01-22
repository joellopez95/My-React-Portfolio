// Components/NavTabs.jsx
import { NavLink } from 'react-router-dom';
import './NavTabs.css'; // Import your styles

const NavTabs = () => {
  return (
    <nav className="nav-tabs">
      <NavLink to="/About" activeClassName="active">About Me</NavLink>
      <NavLink to="/Portfolio" activeClassName="active">Portfolio</NavLink>
      <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
      <NavLink to="/Resume" activeClassName="active">Resume</NavLink>
    </nav>
  );
};

export default NavTabs;


