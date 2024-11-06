import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

{ /*
  Filename:    SignIn.js
  Description: This page is the sign in for volunteers and admins.
*/ }

const SignIn = () => {
  useEffect(() => { // Code to run only on first page load
    window.scrollTo(0, 0); // scroll to top of page
  }, []);
  
  const [username, SetUsername] = React.useState('');
  const [password, SetPassword] = React.useState('');

  const handleLogin = async () => {
    // Construct the API endpoint
    const url = 'https://bridginghope.life/api/signin';
    //const url = 'http://localhost:4433/api/signin'; //uncomment for local testing

    try {
      // Sending the username and password to the server
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Assuming the server responds with JSON data
      const data = await response.json();
      console.log('Login successful:', data);

      window.location.href = '/dashboard'; // Example of redirection

    } catch (error) {
      console.error('Error during login:', error.message);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <React.Fragment>
      <div className="col-12 d-flex justify-content-center align-items-center" >
        <div className="col-11 col-md-4 col-lg-3 card my-4">
          <div className="card-body">
            <div className="d-flex col-12 mt-4 justify-content-center align-items-center">
              <img src="images/BridgingHopeWord.svg" className="img-fluid" alt="logo" style={{ maxWidth: "50%" }} />
            </div>
            <form className="mt-5">
              <label for="txtUsername" className="form-label mt-2">Username</label>
              <input
                id="txtUsername"
                type="text"
                placeholder="johndoe"
                className="form-control"
                value={username}
                onChange={(e) => SetUsername(e.target.value)}
              />
              <label for="txtPassword" className="form-label mt-2">Password</label>
              <input
                id="txtPassword"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />

              <button
                id="btnSignIn"
                type="button"
                class="btn btn-primary mt-5 col-12"
                onClick={handleLogin}
              >Sign In</button>

              <Link to="/register" type="button" className="btn btn-secondary col-12 mt-2">Register</Link>
              <hr />
              <div className="col-12 d-flex justify-content-center align-items-center mb-4">
                <a href="" className="text-center col-12">Forgot Password</a>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center mb-3">
                <Link to="/" href="" className="text-center col-12">Go back to home</Link>
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
}

export default SignIn;
