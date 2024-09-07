//imports for images
import logo from './../BridgingHopeLogo.png';

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
          <Link to="/">
            <button type="button" className="btn btn-danger me-3">Sign Out</button>
          </Link>
        </div>
      </nav>

      <body className="py-lg-3 py-md-2 bg-secondary">
        <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
          <div className="card-body">
            <button></button>
          </div>
        </div>
      </body>
    </React.Fragment>
  );
}

export default Landing;
