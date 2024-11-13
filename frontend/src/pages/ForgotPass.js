import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    const url = 'http://192.168.99.84:4433/api/forgot-password';

    try { 
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error('Failed to send reset email');
      }

      alert('A password reset link has been sent to your email address.');
    } catch (error) {
      console.error('Error sending reset email:', error.message);
      alert('Failed to send reset email: ' + error.message);
    }
  };

  return (
    <React.Fragment>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div className="col-11 col-md-4 col-lg-3 card my-4">
          <div className="card-body">
            <div className="d-flex col-12 mt-4 justify-content-center align-items-center">
              <img src="images/BridgingHopeWord.svg" className="img-fluid" alt="logo" style={{ maxWidth: "50%" }} />
            </div>
            <form className="mt-5">
              <label htmlFor="email" className="form-label mt-2">Enter your email</label>
              <input
                id="email"
                type="email"
                placeholder="example@example.com"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary mt-5 col-12"
                onClick={handlePasswordReset}
              >
                Send Reset Link
              </button>

              <div className="col-12 d-flex justify-content-center align-items-center mt-4">
                <Link to="/" className="btn btn-secondary col-12">Go back to home</Link>
              </div>
            </form>
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
    </React.Fragment>
  );
};

export default ForgotPassword;
