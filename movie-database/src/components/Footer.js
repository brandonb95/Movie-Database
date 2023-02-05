import  logo  from '../scss/logo.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React, {useState} from "react";

const Footer = ({ title }) => {

    return (     
    
    <footer className="footer-logo-wrapper">
        <section className="footer-main">
        
            <div className="logo-desc">
                <div className="footer-logo">
                    <img src={logo} alt="Sunset Logo" />
                </div>
                <div>
                    <h1><Link to="/">{title}</Link></h1>
                    <p className="footer-desc">Sunset Movies is credible source for movies, TV shows, celebrity content. Find ratings and reviews for the latest movies.</p>
                </div>
            </div>


        <div className="footer-content">

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
        </section>


        <div className="credits">
            <p>REACT Movie Database - FWD32</p>
            <p>Brandon Birk, Mai Le, Len Tong</p>
        </div>

    </footer>
    )

}

export default Footer;