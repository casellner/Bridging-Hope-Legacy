import React from "react";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <React.Fragment>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div className="col-11 col-md-4 col-lg-3 card my-4">
          <div className="card-body">
            <div className="d-flex col-12 mt-4 justify-content-center align-items-center">
              <img src="images/BridgingHopeWord.svg" className="img-fluid" alt="logo" style={{ maxWidth: "50%" }} />
            </div>
            <form className="mt-5"> { /* these columns could be adjusted for different screen sizes */}
              { /* username and password */}
              <label for="txtUsername" className="form-label mt-2">Username</label>
              <input id="txtUsername" type="text" placeholder="johndoe" className="form-control" />
              <label for="txtPassword" className="form-label mt-2">Password</label>
              <input id="txtPassword" type="password" className="form-control" />
              <label for="txtConfirmPassword" className="form-label mt-2">Confirm Password</label>
              <input id="txtConfirmPassword" type="password" className="form-control" />

              { /* first and last name */}
              <label for="txtFirstName" className="form-label mt-5">First Name</label>
              <input id="txtFirstName" type="text" placeholder="John" className="form-control" />
              <label for="txtLastName" className="form-label mt-2">Last Name</label>
              <input id="txtLastName" type="text" placeholder="Doe" className="form-control" />

              { /* organizations */}
              <label for="txtOrganization" className="form-label mt-5">Choose your organization</label>
              <select id="txtOrganization" className="form-select" aria-label="select organization">
                <option selected className="text-secondary">select</option>
                { /* TODO populate with organizations from the database */}
                <option value="1">Organization XYZ</option>
                <option value="2">Organization ABC</option>
              </select>

              { /* Note: this is temporary */}
              <Link to="/dashboard" type="button" className="btn btn-primary col-12 mt-3">Register</Link>
              <Link to="/signin" type="button" className="btn btn-secondary col-12 mt-2">Sign In</Link>
            </form>

            <div className="col-12 d-flex justify-content-center align-items-center mb-3">
              <Link to="/" href="" className="text-center col-12 mt-5">Go back to home</Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-body d-flex justify-content-between mx-4 pb-3">
          <ul className="list-inline mb-0 p-0">
            <li className="list-inline-item"><a href="./dashboard/extra/privacy-policy.html">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="./dashboard/extra/terms-of-service.html">Terms of Use</a></li>
          </ul>
          <div className="right-panel">
            ©<script>document.write(new Date().getFullYear())</script> Bridging Hope. All Rights Reserved.
          </div>
        </div>
      </footer>
    </React.Fragment >
  );
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from './../BridgingHopeLogo.png';
import axios from 'axios';

const Register = () => {
    const url = 'http://192.168.99.87:8000/register';   //need to fix this so we don't have to keep doing this
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        organization: ''
    });

    const [errors, setErrors] = useState({
        message: ''
    });
    
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setErrors({ message: 'Passwords do not match' });
            return;
        }
        try {
            await axios.post(url, formData);
            setShowSuccessModal(true); // Show success modal
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Error registering user';
            setErrors({ message: errorMessage });
        }
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        navigate('/signin'); // Redirect to sign-in page
    };

    return (
        <React.Fragment>
            <nav className="navbar bg-dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Bridging Hope Logo" width="64" height="64" className="bg-light ms-3 rounded"/>
                </a>
            </nav>

            <div className="py-lg-3 py-md-2 bg-secondary">
                <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0">
                    <div className="card-header">
                        <h1 className="text-center my-1">Register</h1>
                    </div>
                    
                    <div className="card-body p-0">
                        <div className="bg-info rounded-bottom-1 pb-3">
                            <form className="col-8 offset-2" onSubmit={handleSubmit}>
                                <label htmlFor="username" className="form-label mt-2">Username</label>
                                <input id="username" type="text" placeholder="johndoe" className="form-control" value={formData.username} onChange={handleChange} />

                                <label htmlFor="password" className="form-label mt-2">Password</label>
                                <input id="password" type="password" className="form-control" value={formData.password} onChange={handleChange} />

                                <label htmlFor="confirmPassword" className="form-label mt-2">Confirm Password</label>
                                <input id="confirmPassword" type="password" className="form-control" value={formData.confirmPassword} onChange={handleChange} />

                                <label htmlFor="firstName" className="form-label mt-5">First Name</label>
                                <input id="firstName" type="text" placeholder="John" className="form-control" value={formData.firstName} onChange={handleChange} />

                                <label htmlFor="lastName" className="form-label mt-2">Last Name</label>
                                <input id="lastName" type="text" placeholder="Doe" className="form-control" value={formData.lastName} onChange={handleChange} />

                                <label htmlFor="organization" className="form-label mt-5">Choose your organization</label>
                                <select id="organization" className="form-select" value={formData.organization} onChange={handleChange}>
                                    <option value="" className="text-secondary">Select</option>
                                    <option value="1">Organization XYZ</option>
                                    <option value="2">Organization ABC</option>
                                </select>

                                {errors.message && <div className="alert alert-danger" role="alert">{errors.message}</div>}

                                <button id="btnRegister" type="submit" className="btn btn-success mt-5 col-12">Register</button>

                                <Link to="/signin">
                                    <div className="d-flex justify-content-center mt-3">Sign in instead</div>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Registration Successful</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Your account has been created successfully. You can now sign in.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Go to Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default Register;
