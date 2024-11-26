import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); // Initialize navigate hook

  const handleResetPassword = async () => {
    if (!otp) {
      setError("OTP is required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const url = 'http://192.168.99.87:4433/api/reset-password';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp, password, confirmPassword })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to reset password');
      }

      setSuccess('Your password has been successfully reset.');
      setError('');
      
      // Redirect to sign in page after success
      setTimeout(() => navigate('/signin'), 2000); // Redirect after 2 seconds
    } catch (error) {
      setError(error.message);
      setSuccess('');
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
              <label htmlFor="otp" className="form-label mt-2">Enter OTP</label>
              <input
                id="otp"
                type="text"
                placeholder="Enter OTP"
                className="form-control"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <label htmlFor="password" className="form-label mt-2">New Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter new password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="confirmPassword" className="form-label mt-2">Confirm New Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary mt-5 col-12"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>

              {error && <p className="text-danger mt-3">{error}</p>}
              {success && <p className="text-success mt-3">{success}</p>}
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

export default ResetPassword;
