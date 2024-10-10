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
}

export default Register;
