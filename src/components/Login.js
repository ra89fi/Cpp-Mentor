import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
            />
            <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
            />
            <button type="button" class="btn btn-primary">
                Login
            </button>
            <p>
                Do not have an account? <Link to="/register">Register</Link>
            </p>
            <p className="text-danger errTxt">This is sample error.</p>
        </div>
    );
};

export default Login;
