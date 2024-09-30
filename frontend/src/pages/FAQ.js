import React from "react";
import { Link } from 'react-router-dom';
import logo from './../BridgingHopeLogo.png';

{ /*
    Filename:    FAQ.js
    Description: This page displays frequently asked questions and their answers.
*/ }

const FAQ = () => {
    return (
        <React.Fragment>
            {/* navbar */}
            <nav className="navbar bg-dark">
                {/* logo */}
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Bridging Hope Logo" width="64" height="64" className="bg-light ms-3 rounded" />
                </a>

                <div>
                    <Link to="/signin" className="btn btn-primary me-4">Sign In</Link>
                    <Link to="/register" className="btn btn-secondary me-4">Register</Link>
                </div>
            </nav>

            {/* Questions and answers */}
            <body>
                <h1 className="text-center py-3">Frequently Asked Questions</h1>
                <div className="accordion" id="accordionFAQ">
                    <div className="accordion-item border-dark">
                        <h2 className="accordion-header">
                            <button className="accordion-button bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Question 1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Answer 1
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item border-dark">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Question 2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Answer 2
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3">
                    <a href="/" className="d-flex align-item-center">Back to home</a>
                </div>
            </body>

            { /* footer */}
            <footer className="bg-dark">
                <div className="row">
                    <div className="col-6">
                        <h3 className="fs-5 text-light ms-3 mt-3">Pages</h3>
                        <ul className="list-group">
                            <li className="list-group-item bg-dark border-0"><a href="/" className="link-underline link-underline-opacity-0 text-light">Landing Page</a></li>
                            <li className="list-group-item bg-dark border-0"><a href="/faq" className="link-underline link-underline-opacity-0 text-light">Frequently Asked Questions</a></li>
                        </ul>
                    </div>
                    {/* more columns can be added here */}
                </div>
            </footer>
        </React.Fragment>
    );
};

export default FAQ;
