import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return <header>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/#services">Services</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
        </header>
};

export default Header;
