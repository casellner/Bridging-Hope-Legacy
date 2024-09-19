//imports for images
import logo from './../BridgingHopeLogo.png';

import React from "react";
import { Link } from 'react-router-dom';

//imports for content (search client, register client, etc.)
import InfoPopup from '../dashboardContent/InfoPopup';
import SearchClient from '../dashboardContent/SearchClient';
import RegisterClient from '../dashboardContent/RegisterClient';
import Organization from '../dashboardContent/Organization';

const Landing = () => {
  //constants that determine which content is displayed on the dashboard
  const [infoIsOpen, setInfoIsOpen] = React.useState(true); //only the info popup is displayed by default
  const [searchIsOpen, setSearchIsOpen] = React.useState(false);
  const [registerIsOpen, setRegisterIsOpen] = React.useState(false);
  const [organizationIsOpen, setOrganizationIsOpen] = React.useState(false);

  //functions for the 'search client,' 'register client,' and 'organization' buttons
  function handleSearchClick() {
    setInfoIsOpen(false);
    setSearchIsOpen(true);
    setRegisterIsOpen(false);
    setOrganizationIsOpen(false);
  }
  function handleRegisterClick() {
    setInfoIsOpen(false);
    setSearchIsOpen(false);
    setRegisterIsOpen(true);
    setOrganizationIsOpen(false);
  }
  function handleOrganizationClick() {
    setInfoIsOpen(false);
    setSearchIsOpen(false);
    setRegisterIsOpen(false);
    setOrganizationIsOpen(true);
  }

  //content to be displayed (client search, register client, organization, etc.)
  let content;
  if (infoIsOpen) {
    content = <InfoPopup />;
  } else if (searchIsOpen) {
    content = <SearchClient />;
  } else if (registerIsOpen) {
    content = <RegisterClient />;
  } else if (organizationIsOpen) {
    content = <Organization />;
  }

  return (
    <React.Fragment>
      {/* website navbar */}
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

      <body className="py-3 bg-secondary vh-100">
        {/* Client Search, Register Client, and Organization buttons */}
        <div className="card mb-3 col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
          <div className="card-body d-flex justify-content-evenly">
            { /* if a button is clicked, it will have the active className */ }
            <button {...(searchIsOpen ? { className: 'btn btn-primary btn-sm active' } : { className: 'btn btn-primary btn-sm' })}
                    onClick={handleSearchClick}>
              Client Search
            </button>
            <button {...(registerIsOpen ? { className: 'btn btn-primary btn-sm active' } : { className: 'btn btn-primary btn-sm' })}
                    onClick={handleRegisterClick}>
              Register Client
            </button>
            <button {...(organizationIsOpen ? { className: 'btn btn-primary btn-sm active' } : { className: 'btn btn-primary btn-sm' })}
                    onClick={handleOrganizationClick}>
              Organization
            </button>
          </div>
        </div>

        {content}
      </body>
    </React.Fragment>
  );
}

export default Landing;
