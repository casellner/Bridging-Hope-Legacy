import React from "react";
import ClientMap from "./../ClientMap.tsx";

{ /*
  Filename:    ClientHelp.js
  Description: This page is a work in progress. It will contain information for clients on how to connect with organizations and volunteers.
*/ }

const ClientHelp = () => {
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
        </div>
      </nav>

      {/* body */}
      <div className="col-12">
        <h1>Find an organization near you</h1>

        <div style={{height:"80vh", width:"100%"}}>
          <ClientMap />
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

export default ClientHelp;
