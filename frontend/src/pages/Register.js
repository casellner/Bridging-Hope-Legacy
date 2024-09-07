//imports for images
import logo from './../BridgingHopeLogo.png';

import React from "react";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <React.Fragment>
            {/* navbar */}
            <nav className="navbar bg-dark">
                {/* logo */}
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Bridging Hope Logo" width="64" height="64" className="bg-light ms-3 rounded"/>
                </a>
            </nav>

            <body className="py-lg-3 py-md-2 bg-secondary">
                <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
                    <div className="card-header">
                        <h1 className="text-center my-1">Register</h1>
                    </div>
                    
                    <div className="card-body p-0">
                        {/* Registration form */}
                        <div className="bg-info rounded-bottom-1 pb-3">
                            <form className="col-8 offset-2"> { /* these columns could be adjusted for different screen sizes */ }
                                { /* username and password */ }
                                <label for="txtUsername" className="form-label mt-2">Username</label>
                                <input id="txtUsername" type="text" placeholder="johndoe" className="form-control" />
                                <label for="txtPassword" className="form-label mt-2">Password</label>
                                <input id="txtPassword" type="password" className="form-control" />

                                { /* first and last name */ }
                                <label for="txtFirstName" className="form-label mt-5">First Name</label>
                                <input id="txtFirstName" type="text" placeholder="John" className="form-control" />
                                <label for="txtLastName" className="form-label mt-2">Last Name</label>
                                <input id="txtLastName" type="text" placeholder="Doe" className="form-control" />

                                { /* organizations */ }
                                <label for="txtOrganization" className="form-label mt-5">Choose your organization</label>
                                <select id="txtOrganization" className="form-select" aria-label="select organization">
                                    <option selected className="text-secondary">select</option>
                                    { /* TODO populate with organizations from the database */ }
                                    <option value="1">Organization XYZ</option>
                                    <option value="2">Organization ABC</option>
                                </select>

                                <button id="btnRegister" type="button" className="btn btn-primary mt-5 col-12">Register</button>
                                
                                <Link to="/signin">
                                    <a className="d-flex justify-content-center mt-3">Sign in instead</a>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </React.Fragment>
    );
}
  
export default Register;
