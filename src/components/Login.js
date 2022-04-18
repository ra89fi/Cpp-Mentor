import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import app from '../firebase.init';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            e.target.email.value,
            e.target.password.value
        );
    };

    useEffect(() => {
        if (user) formRef.current.reset();
    }, [user]);

    return (
        <div className="login">
            <form onSubmit={handleSubmit} ref={formRef}>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                />
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
            <p>
                Do not have an account? <Link to="/register">Register</Link>
            </p>
            {error && <p className="text-danger errTxt">{error.message}</p>}
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default Login;
