// import React from 'react';
import '../styles.scss';
import  logo  from './logo.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const Header = ({ title }) => {
  const [navOpen, setNavOpen] = useState(false);

  const showHideNav = () => {
    setNavOpen(!navOpen);
  };

  const isDesktop = e => {
    if (e.matches) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 768px)');
    mediaQuery.addEventListener('change', isDesktop);
    return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);

    return (
        <header className={navOpen ? 'show' : undefined}>
          <div className="logo-wrapper">
          <img src={logo} alt="Sunset Logo" />
          <h1>
          <Link to="/">{title}</Link>
          </h1>
          </div>
          {}
      <button
        className="btn-main-nav"
        onMouseDown={e => {
          e.preventDefault();
        }}
        onClick={showHideNav}
      >
        <span className="hamburger-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <span className="sr-only">Menu</span>
      </button>
      <Navbar handleShowHideNav={showHideNav} />

        </header>
      );
    };
    
    Header.defaultProps = {
      title: "Sunset"
    };
    
    export default Header;