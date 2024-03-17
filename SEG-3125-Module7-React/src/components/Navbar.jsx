import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
    <nav className="navbar">
        <h1 className="title">The Big Fork</h1>
        <u1 className="navbar-links">
            <li className="links"><Link to="/">Home</Link></li>
            <li className="links"><Link to="/about">About</Link></li>
            <li className="links"><Link to="/menu">Menu</Link></li>
            <li className="links"><Link to="/contact">Contact</Link></li>
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
};

export default Navbar;