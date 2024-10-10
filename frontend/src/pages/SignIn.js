import React from "react";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <React.Fragment>
      <div className="col-12 d-flex justify-content-center align-items-center" >
        <div className="col-11 col-md-4 col-lg-3 card my-4">
          <div className="card-body">
            <div className="d-flex col-12 mt-4 justify-content-center align-items-center">
              <img src="images/BridgingHopeWord.svg" className="img-fluid" alt="logo" style={{ maxWidth: "50%" }} />
            </div>
            <form className="mt-5">
              <label className="form-label">Email</label>
              <input type="email" className="form-control mb-3" placeholder="Email" />
              <label className="form-label mt-3">Password</label>
              <input type="password" className="form-control mb-3" placeholder="Password" />
              <button type="button" className="btn btn-primary col-12 mt-3">Login</button>
              <Link to="/register" type="button" className="btn btn-secondary col-12 mt-2">Register</Link>
              <hr />
              <div className="col-12 d-flex justify-content-center align-items-center mb-3">
                <a href="" className="text-center col-12">Forgot Password</a>
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
