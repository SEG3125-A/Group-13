import React from 'react';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <h1 className="title">The Big Fork</h1>
        <u1 className="navbar-links">
            <li className="links"><a href="#home">Home</a></li>
            <li className="links"><a href="#about">About</a></li>
            <li className="links"><a href="#menu">Menu</a></li>
            <li className="links"><a href="#contact">Contact</a></li>
        </u1>
        <div className="navbar-login">
            <a href="login" className="login">Log In / Register</a>
        </div>
        <div className="navbar-divider"></div>
        <div className="navbar-book">
            <a href="/" className="book">Book Table</a>
        </div>
    </nav>
);

export default Navbar;