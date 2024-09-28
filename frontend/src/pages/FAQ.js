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
                    <Link to="/signin" className="btn btn-primary me-3">Sign In</Link>
                    <Link to="/register" className="btn btn-secondary me-3">Register</Link>
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
        </React.Fragment>
    );
};

export default FAQ;
