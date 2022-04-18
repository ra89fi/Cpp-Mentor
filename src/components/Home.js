import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const checkout = (id) => {
        navigate(`/checkout/${id}`);
    };
    const gotoAbout = () => navigate('/about');
    return (
        <div className="home">
            <div className="banner">
                <div className="left">
                    <img
                        src="https://tunis.ibthemespro.com/img/hero/dark.jpg"
                        alt="Me"
                    />
                </div>
                <div className="right">
                    <h2>I'm Raihan Firoz</h2>
                    <h2>C++ Mentor</h2>
                    <p>
                        I'm a Bangladesi software engineer and programmer
                        focused on crafting clean & user‑friendly systems, I am
                        passionate about building excellent software that
                        improves the lives of those around me.
                    </p>
                    <p>
                        <button
                            className="btn btn-primary"
                            onClick={() => gotoAbout()}
                        >
                            More About Me
                        </button>
                    </p>
                </div>
            </div>
            <div id="services" className="services">
                <h2>Services</h2>
                <div className="items">
                    <div className="item">
                        <div className="header">
                            <h4>Beginner</h4>
                        </div>
                        <div className="body">
                            This course is for newbies who want an introduction
                            to C++. Topics include -
                            <ul>
                                <li>Variables</li>
                                <li>Data Types</li>
                                <li>Loops</li>
                                <li>Conditionals</li>
                                <li>Functions</li>
                                <li>Pointers</li>
                            </ul>
                        </div>
                        <div className="footer">
                            <button
                                className="btn btn-primary"
                                onClick={() => checkout(1)}
                            >
                                $10/<small>mo</small>
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="header">
                            <h4>Intermediate</h4>
                        </div>
                        <div className="body">
                            This course will teach you intermediate C++ concepts
                            such as -
                            <ul>
                                <li>References</li>
                                <li>Classes</li>
                                <li>Inheritance</li>
                                <li>Polymorphism</li>
                                <li>Overloading</li>
                                <li>Interfaces</li>
                            </ul>
                        </div>
                        <div className="footer">
                            <button
                                className="btn btn-primary"
                                onClick={() => checkout(2)}
                            >
                                $20/<small>mo</small>
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="header">
                            <h4>Advanced</h4>
                        </div>
                        <div className="body">
                            This course is for intermediate programmers who want
                            to go to advanced level. Learn these -
                            <ul>
                                <li>Move Semantics</li>
                                <li>Templates</li>
                                <li>STL</li>
                                <li>Threading</li>
                                <li>Concurrency</li>
                                <li>UI</li>
                            </ul>
                        </div>
                        <div className="footer">
                            <button
                                className="btn btn-primary"
                                onClick={() => checkout(3)}
                            >
                                $30/<small>mo</small>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p>Copyright &copy; {new Date(Date.now()).getFullYear()}</p>
            </footer>
        </div>
    );
};

export default Home;
