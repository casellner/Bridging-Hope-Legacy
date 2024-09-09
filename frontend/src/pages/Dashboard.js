//imports for images
import logo from './../BridgingHopeLogo.png';

import React from "react";
import { Link } from 'react-router-dom';

//imports for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

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
          <Link to="/">
            <button type="button" className="btn btn-danger me-3">Sign Out</button>
          </Link>
        </div>
      </nav>

      <body className="py-3 bg-secondary">
        {/* Client Search, Register Client, and Organization buttons */}
        <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
          <div className="card-body d-flex justify-content-evenly">
            <button className="btn btn-primary">Client Search</button>
            <button className="btn btn-primary">Register Client</button>
            <button className="btn btn-primary">Organization</button>
          </div>
        </div>

        { /* info "popup" */}
        <div className="bg-info rounded col-10 offset-1 row my-3 d-flex justify-content-center">
          <div className="col-auto d-flex align-items-center">
            <FontAwesomeIcon icon={faCircleInfo} />
          </div>
          <div className="col-auto">
            <p className="my-2">Click on a button above to get started!</p>
          </div>
        </div>
      </body>
    </React.Fragment>
  );
}

export default Landing;
