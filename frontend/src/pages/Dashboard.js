import React from "react";
import { Link } from 'react-router-dom';

//imports for content (search client, register client, etc.)
import InfoPopup from '../content/InfoPopup';
import SearchClient from '../content/SearchClient';
import RegisterClient from '../content/RegisterClient';
import Organization from '../content/Organization';

const Landing = () => {
  //constants that determine which content is displayed
  const [infoIsOpen, setInfoIsOpen] = React.useState(true);
  const [searchIsOpen, setSearchIsOpen] = React.useState(false);
  const [registerIsOpen, setRegisterIsOpen] = React.useState(false);
  const [organizationIsOpen, setOrganizationIsOpen] = React.useState(false);

  //functions for search client, register client, and organization buttons
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
      <aside className="sidebar sidebar-default sidebar-white sidebar-base navs-rounded-all">
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <a className="navbar-brand" href="/">
            <img src="./images/BridgingHopeNoWord.svg" className="img-fluid" alt="logo" style={{maxHeight: "45px"}} />
          </a>
          <div className="sidebar-toggle" data-toggle="sidebar" data-active="true">
            {/* TODO: make icon change */}
            <i class="bi bi-arrow-left-circle-fill"></i>
          </div>
        </div>
        <div className="sidebar-body pt-0 data-scrollbar" dataScrollbar="true" tabIndex={-1} style={{overflow:"hidden", outline:"none"}}>
          <div className="scroll-content">
            <div className="sidebar-list">
              <ul className="navbar-nav iq-main-menu" id="sidebar-menu">
                <li className="nav-item static-item">
                  <a className="nav-link static-item disabled" href="#" tabIndex="-1">
                    <span className="default-icon">Tools</span>
                    <span className="mini-icon">-</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a {...(searchIsOpen ? { className: 'nav-link active' } : { className: 'nav-link' })} onClick={handleSearchClick}>
                    <span className="item-name">Client Search</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a {...(registerIsOpen ? { className: 'nav-link active' } : { className: 'nav-link' })} onClick={handleRegisterClick}>
                    <span className="item-name">Register Client</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a {...(organizationIsOpen ? { className: 'nav-link active' } : { className: 'nav-link' })} onClick={handleOrganizationClick}>
                    <span className="item-name">Organization</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar-footer"></div>
      </aside>


      <body className="vh-100">
        {/* website navbar */}
        <nav className="navbar">
          <div>
            <Link to="/" className="btn btn-danger btn-sm me-4">Sign Out</Link>
          </div>
        </nav>

        {content}
      </body>
    </React.Fragment>
  );
}

export default Landing;
