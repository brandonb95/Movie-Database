import { NavLink } from 'react-router-dom';
import '../styles.scss';

const Navbar = ({ handleShowHideNav }) => {
  function closeNav(e) {
    if (window.innerWidth < 600) {
      handleShowHideNav();
    } else {
      e.target.blur();
    }
  }

  return (
    <nav className="main-nav" onClick={closeNav}>
      <ul>
        <li>
          <NavLink to="/">TV</NavLink>
        </li>
        <li>
          <NavLink to="/about">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/products">Favourites</NavLink>
        </li>
        <li>
          <NavLink to="/services">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
