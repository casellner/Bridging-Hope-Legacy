import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

{ /*
  Filename:    Register.js
  Description: This page is the registration page for volunteers.
*/ }

const Register = () => {
  useEffect(() => { // Code to run only on first page load
    window.scrollTo(0, 0); // scroll to top of page
    const url = 'https://bridginghope.life/api/register'; 
    //const url = 'http://localhost:4433/api/register';  //uncomment for local testing
    const navigate = useNavigate();
  }, []);

  const [formData, setFormData] = useState({
      username: '',
      email: '',
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
      alert("Registration Failed");
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <React.Fragment>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div className="col-11 col-md-4 col-lg-3 card my-4">
          <div className="card-body">
            <div className="d-flex col-12 mt-4 justify-content-center align-items-center">
              <img src="images/BridgingHopeWord.svg" className="img-fluid" alt="logo" style={{ maxWidth: "50%" }} />
            </div>
            <form className="mt-5" onSubmit={handleSubmit}> { /* these columns could be adjusted for different screen sizes */}
              { /* username and password */}
              <label htmlFor="username" className="form-label mt-2">Username</label>
              <input id="username" type="text" placeholder="johndoe" className="form-control" value={formData.username} onChange={handleChange} />
              <label htmlFor="email" className="form-label mt-2">Email</label>
              <input id="email" type="text" placeholder="jdoe@email.com" className="form-control" value={formData.email} onChange={handleChange} />
              <label htmlFor="password" className="form-label mt-2">Password</label>
              <input id="password" type="password" className="form-control" value={formData.password} onChange={handleChange} />
              <label htmlFor="confirmPassword" className="form-label mt-2">Confirm Password</label>
              <input id="confirmPassword" type="password" className="form-control" value={formData.confirmPassword} onChange={handleChange} />

              { /* first and last name */}
              <label htmlFor="firstName" className="form-label mt-5">First Name</label>
              <input id="firstName" type="text" placeholder="John" className="form-control" value={formData.firstName} onChange={handleChange} />
              <label htmlFor="lastName" className="form-label mt-2">Last Name</label>
              <input id="lastName" type="text" placeholder="Doe" className="form-control" value={formData.lastName} onChange={handleChange} />

              { /* email */}
              <label htmlFor="email" className="form-label mt-5">Email</label>
              <input id="email" type="email" placeholder="jdoe@email.com" className="form-control" />

              { /* organization */}
              <label htmlFor="organization" className="form-label mt-5">Choose your organization</label>
              <select id="organization" className="form-select" value={formData.organization} onChange={handleChange}>
                <option value="" className="text-secondary">Select</option>
                <option value="Organization XYZ">Organization XYZ</option>
                <option value="Organization ABC">Organization ABC</option>
              </select>

              {errors.message && <div className="alert alert-danger" role="alert">{errors.message}</div>}

              <button id="btnRegister" type="submit" className="btn btn-primary mt-5 col-12">Register</button>

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
    </React.Fragment >
  );
}

export default Register;
