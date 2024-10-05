//imports for images
//import BridgingHopeNoWord from './../images/BridgingHopeNoWord.svg'; //TODO: fix this import
import background from './../fooddrive.webp';
import profilePic1 from './../ExampleProfile1.jpg';
import profilePic2 from './../ExampleProfile2.jpg';

import React from "react";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <React.Fragment>
      {/* navbar */}
      <nav className="nav navbar navbar-expand-xl navbar-light iq-navbar">
        <div className="container-fluid navbar-inner">
          <a href="/" className="navbar-brand">
            <div className="logo-main">
              <div className="logo-normal">
                {/* <img src={BridgingHopeNoWord} className="img-fluid" alt="logo" style={{maxHeight: "45px"}} /> */}
              </div>
              <div className="logo-mini">
                <svg className="text-primary icon-30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
                  <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
                  <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
                  <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
                </svg>
              </div>
            </div>
            <h4 className="logo-title">Bridging Hope</h4>
          </a>

          <div className="d-flex justify-content-around align-items-center">
            <Link to="/signin" className="btn btn-primary btn-sm align-items-center me-2">Sign In</Link>
            <Link to="/register" className="btn btn-secondary btn-sm align-items-center">Register</Link>
          </div>
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

            {/* FAQ */}
            <h2 className="text-center mt-3">Questions?</h2>
            <div className="d-flex flex-row justify-content-center">
              <p>Check out our&nbsp;</p>
              <a href="/faq">Frequently asked questions</a>
            </div>
          </div>
        </div>
      </body>

      { /* footer */}
      <footer className="bg-dark">
        <div className="row">
          <div className="col-6">
            <h3 className="fs-5 text-light ms-3 mt-3">Pages</h3>
            <ul className="list-group">
              <li className="list-group-item bg-dark border-0"><a href="/" className="link-underline link-underline-opacity-0 text-light">Landing Page</a></li>
              <li className="list-group-item bg-dark border-0"><a href="/faq" className="link-underline link-underline-opacity-0 text-light">Frequently Asked Questions</a></li>
            </ul>
          </div>
          {/* more columns can be added here */}
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Landing;
