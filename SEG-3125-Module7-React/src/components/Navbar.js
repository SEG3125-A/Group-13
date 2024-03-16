import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Big Fork</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
    );
}

export default Navbar;