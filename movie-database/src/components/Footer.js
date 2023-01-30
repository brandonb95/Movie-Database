import  logo  from '../scss/logo.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Footer = ({ title }) => {

    return (     
    
    <footer className="footer-logo-wrapper">
        <div className="footer-logo">
            <img src={logo} alt="Sunset Logo" />
        </div>

        <div className="footer-content">
            <h1><Link to="/">{title}</Link></h1>

            <nav className="footer-nav">
            <ul>
                <li>
                    <NavLink to="/">TV</NavLink>
                </li>
                <li>
                    <NavLink to="/">Movies</NavLink>
                </li>
                <li>
                    <NavLink to="/favourites">Favourites</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
            </nav>
        </div>

    </footer>
    )

}

export default Footer;