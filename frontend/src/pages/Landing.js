import React from "react";
import { Link } from 'react-router-dom';

const Landing = () => {
  let newDate = new Date();
  let year = newDate.getFullYear();

  return (
    <React.Fragment>
      {/* navbar */}
      <nav className="nav navbar navbar-expand-xl navbar-light iq-navbar">
        <div className="container-fluid navbar-inner">
          <a href="/" className="navbar-brand">
            <div className="logo-main">
              <div className="logo-normal">
                <img src="./images/BridgingHopeNoWord.svg" className="img-fluid" alt="logo" style={{maxHeight: "45px"}} />
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

      {/* background image and info */}
      <div className="col-12">
        <div className="h-75" style={{backgroundImage: `url(./images/volunteer.jpg)`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize:"cover"}}>
          <div className="row justify-content-end" style={{minHeight: "100%", maxWidth: "100%", important:false}}>
            <div className="col-12 col-md-6" style={{backgroundColor: 'rgba(0,0,0,.4)', minHeight: "100%"}}>
              <h1 className="text-white mt-5">Building Non-Profit Connections</h1>
              <h4 className="mt-3 mx-4 text-white">Our application has the features to help you better serve your mission</h4>
              <p className="mt-4 mx-5 text-white"><i className="bi bi-heart-fill me-2 text-info"></i>Manage volunteer credentials and availability</p>
              <p className="mt-2 mx-5 text-white"><i className="bi bi-heart-fill me-2 text-info"></i>Resource and assett tracking</p>
              <p className="mt-2 mx-5 text-white"><i className="bi bi-heart-fill me-2 text-info"></i>Visibility into client needs and services</p>
              <p className="mt-2 mx-5 text-white"><i className="bi bi-heart-fill me-2 text-info"></i>Centrally communicate with other area non-profits</p>
              <p className="mt-2 mx-5 text-white"><i className="bi bi-heart-fill me-2 text-info"></i>Advanced analytics for resource planning</p>
              <div className="row col-12 justify-content-center mt-5">
                <Link to="/faq" className="btn btn-secondary col-6 mb-5">Learn More</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="col-12 row mb-5 justify-content-center">
          <div className="col-12 col-md-6 ">
            <div className="">
              <h2 className="text-center col-12 mt-5">Our Vision</h2>
              <hr />
              <p className="text-center col-12 mt-3">Our vision is to create a world where non-profits can easily connect and share resources to better serve their communities. We believe that by providing a platform for non-profits to connect and share resources, we can help them better serve their communities and make a positive impact on the world.</p>
            </div>
          </div>
        </div>

        {/* More info cards */}
        <div className="col-12 row mt-4 mb-5 justify-content-around">
          <div className="col-12 col-md-3 card">
            <div className="card-body">
              <h2 className="text-center col-12 mt-2">Areas Served</h2>
              <hr />
              <p className="col-12 mt-4"><i className="bi bi-heart-fill me-2 text-info"></i>Algood</p>
              <p className="col-12 mt-2"><i className="bi bi-heart-fill me-2 text-info"></i>Baxter</p>
              <p className="col-12 mt-2"><i className="bi bi-heart-fill me-2 text-info"></i>Cookeville</p>
              <p className="col-12 mt-2"><i className="bi bi-heart-fill me-2 text-info"></i>Crossville</p>
              <p className="col-12 mt-2"><i className="bi bi-heart-fill me-2 text-info"></i>Cumberland County</p>
              <p className="col-12 mt-2"><i className="bi bi-heart-fill me-2 text-info"></i>Monterey</p>
              <p className="col-12 mt-2"><i className="bi bi-heart-fill me-2 text-info"></i>Putnam County</p>
            </div>
          </div>
          <div className="col-12 col-md-3 card">
            <div className="card-body">
              <h2 className="text-center col-12 mt-2">Partners</h2>
              <hr />
              <p className="col-12 mt-4"><i className="bi bi-heart-fill me-2 text-info"></i>DUO Mobile Missions</p>
              <p className="col-12 mt-2"><i className="bi bi-heart-fill me-2 text-info"></i>Life Church</p>
              <p className="col-12 mt-2"><i className="bi bi-heart-fill me-2 text-info"></i>Putnam County</p>
              <p className="col-12 mt-2"><i className="bi bi-heart-fill me-2 text-info"></i>Steven's Street Baptist Church</p>
              <p className="col-12 mt-2"><i className="bi bi-heart-fill me-2 text-info"></i>Upper Cumberland Family Justice Center</p>
              <btn className="btn btn-secondary">Contact us to add your organization!</btn> {/* TODO make this link to an email */}
            </div>
          </div>
          <div className="col-12 col-md-3 card">
            <div className="card-body">
              <h2 className="text-center col-12 mt-2">Features</h2>
              <hr />
              <p className="col-12 mt-4 mb-0"><i className="bi bi-heart-fill me-2 text-info"></i>Register Clients</p>
              <p className="col-12 mt-0 ms-4"><small className="fw-lighter fst-italic">Add new clients to Bridging Hope</small></p>
              <p className="col-12 mt-2 mb-0"><i className="bi bi-heart-fill me-2 text-info"></i>Log Visits</p>
              <p className="col-12 mt-0 ms-4"><small className="fw-lighter fst-italic">Track the aid you give digitally</small></p>
              <p className="col-12 mt-2 mb-0"><i className="bi bi-heart-fill me-2 text-info"></i>Search Clients</p>
              <p className="col-12 mt-0 ms-4"><small className="fw-lighter fst-italic">Find existing client accounts with ease</small></p>
            </div>
          </div>
        </div>

        {/* Register Now button */}
        <div className="col-12 row mt-4 mb-5 justify-content-around">
          <button className="btn btn-secondary btn-lg col-8">Register Now</button>
        </div>

        {/* Developed and maintained with love */}
        <div className="col-12 row mb-5 justify-content-center">
          <p className="text-primary text-center">Developed and maintained with<i className="bi bi-heart-fill ms-2 me-2 text-info"></i>by Business Information Technology and Computer Science students at Tennessee Technological University</p>
        </div>

        {/* footer */}
        <footer className="footer">
          <div className="footer-body d-flex justify-content-between mx-4 pb-3">
            <ul className="list-inline mb-0 p-0">
              <li className="list-inline-item"><a href="./dashboard/extra/privacy-policy.html">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="./dashboard/extra/terms-of-service.html">Terms of Use</a></li>
            </ul>
            <div className="right-panel">
              <p>© {year} Bridging Hope. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
        
        </div>
    </React.Fragment>
  );
}

export default Landing;
