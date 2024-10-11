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
      <aside className="sidebar-sidebar-default sidebar-white sidebar-base navs-rounded-all sidebar-mini on-resize">
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <a className="navbar-brand" href="/">
            TODO: Insert Logo Here
          </a>
          <div className="sidebar-toggle" data-toggle="sidebar" data-active="true">
            <p>TODO: add icon</p>
          </div>
        </div>
        <div className="sidebar-body pt-0 data-scrollbar" dataScrollbar="true" tabIndex={-1} style={{overflow:"hidden", outline:"none"}}>

        </div>
        <div className="sidebar-footer"></div>
      </aside>
      <body className="vh-100">
        {/* website navbar */}
        <nav className="navbar">
          {/* logo */}
          <a className="navbar-brand ms-3" href="/">
            <img src="./images/BridgingHopeNoWord.svg" className="img-fluid" alt="logo" style={{maxHeight: "45px"}} />
          </a>

          <div>
            <Link to="/" className="btn btn-danger btn-sm me-4">Sign Out</Link>
          </div>
        </nav>
        
        {/* Client Search, Register Client, and Organization buttons */}
        <div className="card bg-dark my-3 col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
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
