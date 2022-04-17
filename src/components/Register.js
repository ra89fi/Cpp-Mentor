import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register">
            <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Name"
            />
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
                Register
            </button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
            <p className="text-danger errTxt">This is sample error.</p>
        </div>
    );
};

export default Register;
