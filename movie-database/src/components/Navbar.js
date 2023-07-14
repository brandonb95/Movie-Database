import { NavLink } from "react-router-dom";
// import '../scss/styles.scss';

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
        {/* <li>
          <NavLink to="/">TV</NavLink>
        </li> */}
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
