// import React from 'react';
import '../styles.scss';
import  logo  from './logo.svg';


const Header = ({ title }) => {
    const Navbar = () => {
        <nav>
            <ul>
                <li><a href="#">TV</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Favourites</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    }
    return (
        <header>
          <img src={logo} alt="Sunset Logo" />
          <h1>{title}</h1>
        </header>
      );
    };
    
    Header.defaultProps = {
      title: "Movie Database"
    };
    
    export default Header;