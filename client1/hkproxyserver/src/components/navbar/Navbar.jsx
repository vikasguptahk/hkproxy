import { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="title">HKproxyServer</Link>
            <div className="menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
            <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <li>
                    <NavLink to="/blocked">Blockedsite</NavLink>
                </li>
                <li>
                    <NavLink to="/inspect">Inspectedsite</NavLink>
                </li>
                <li>
                    <NavLink to="/modified">Modifiedsites</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/product/searchproduct">Search_Product</NavLink>
                </li>
                <li>
                    <NavLink to="/" >Main Menu</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
