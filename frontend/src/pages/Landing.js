//imports for images
import logo from './../BridgingHopeLogo.png';
import background from './../fooddrive2.jpg';
import profilePic1 from './../ExampleProfile1.jpg';
import profilePic2 from './../ExampleProfile2.jpg';

import React from "react";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <React.Fragment>
      {/* navbar */}
      <nav className="navbar bg-dark">
        {/* logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Bridging Hope Logo" width="64" height="64" className="bg-light ms-3 rounded" />
        </a>

        <div>
          <Link to="/signin">
            <button type="button" className="btn btn-primary me-3">Sign In</button>
          </Link>
          <Link to="/register">
            <button type="button" className="btn btn-secondary me-3">Register</button>
          </Link>
        </div>
      </nav>

      <body className="py-lg-3 py-md-2" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
        <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
          <div className="card-header">
            <h1 className="text-center fw-bold my-3">Bridging Hope</h1>
            <p className="text-center">Our application is a powerful tool for nonprofits. It simplifies the process of tracking clients, ensuring that those who need assistance are reached with precision and care.</p>
          </div>

          <div className="card-body p-0"> { /* card body which displays key features and contacts */}
            {/* key features */}
            <div className="bg-info mb-3">
              <h2 className="text-center pt-3 fs-1">Key Features</h2>
              <hr className="border border-1 border-dark opacity-100"></hr>
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item bg-info col-4 border-0">
                  <h3 className="fw-bold">Register Clients</h3>
                  <p>File new clients to track aid over time. Digitize records to simplify your data.</p>
                </li>
                <li className="list-group-item bg-info col-4 border-0">
                  <h3 className="fw-bold">Log Visits</h3>
                  <p>Record assistance and choose which organizations can access your records</p>
                </li>
                <li className="list-group-item bg-info col-4 border-0">
                  <h3 className="fw-bold">Search Clients</h3>
                  <p>Easily find clients so help can be delivered quickly</p>
                </li>
              </ul>
            </div>

            {/* contact an admin section */}
            <div className="px-3">
              <h2 className="mb-3 text-center">Contact an Administrator to connect your organization to Bridging Hope</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-6 row">
                      <div className="col-auto">
                        <img src={profilePic2} alt="profile picture" style={{width:"64px", height:"64px", 'object-fit': "cover"}} className="rounded-circle" />
                      </div>
                      <h3 className="col-6">Ms. X</h3>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <p className="col-auto">p: </p>
                        <a className="col-auto" href="tel:+15555555555">(555) 555-5555</a>
                      </div>
                      <div className="row">
                        <p className="col-auto">e: </p>
                        <a className="col-auto" href="mailto:msx@email.com">msx@email.com</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-6 row">
                      <div className="col-auto">
                        <img src={profilePic1} alt="profile picture" style={{width:"64px", height:"64px", 'object-fit': "cover"}} className="rounded-circle" />
                      </div>
                      <h3 className="col">Mr. Y</h3>      
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <p className="col-auto">p: </p>
                        <a className="col-auto" href="tel:+15555555556">(555) 555-5556</a>
                      </div>
                      <div className="row">
                        <p className="col-auto">e: </p>
                        <a className="col-auto" href="mailto:mry@email.com">mry@email.com</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </React.Fragment>
  );
}

export default Landing;
