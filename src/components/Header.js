import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import app from '../firebase.init';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
const auth = getAuth(app);

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const logOut = () => signOut(auth);
    return (
        <header>
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
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    {!user && <Link to="/login">Login</Link>}
                    {user && <button onClick={logOut}>Log Out</button>}
                </li>
            </ul>
            {user && <span>Hi! {user.user.displayName}</span>}
        </header>
    );
};

export default Header;
