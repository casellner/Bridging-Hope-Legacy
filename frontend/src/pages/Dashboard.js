import React from "react";
import { Link } from 'react-router-dom';

//imports for content (search client, register client, etc.)
import InfoPopup from '../dashboardContent/InfoPopup';
import SearchClient from '../dashboardContent/SearchClient';
import RegisterClient from '../dashboardContent/RegisterClient';
import Organization from '../dashboardContent/Organization';

const Landing = () => {
  //constants that determine which content is displayed
  const [infoIsOpen, setInfoIsOpen] = React.useState(true);
  const [searchIsOpen, setSearchIsOpen] = React.useState(false);
  const [registerIsOpen, setRegisterIsOpen] = React.useState(false);
  const [organizationIsOpen, setOrganizationIsOpen] = React.useState(false);

  const [sidebarExpanded, setSidebarExpanded] = React.useState(true);

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

  function sidebarToggle() {
    setSidebarExpanded(!sidebarExpanded);
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
      <aside {...(sidebarExpanded ? { className: "sidebar sidebar-default sidebar-white sidebar-base navs-rounded-all" } : { className: "sidebar sidebar-default sidebar-white sidebar-base navs-rounded-all sidebar-mini" })} onClick={handleOrganizationClick}>
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <a className="navbar-brand" href="/">
            <img src="./images/BridgingHopeNoWord.svg" className="img-fluid" alt="logo" style={{maxHeight: "45px"}} />
          </a>
          <button type="button" className="btn" aria-label="close sidebar" onClick={sidebarToggle}>
            <i class="bi bi-arrow-left-circle-fill"></i>
          </button>
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

      <main className="main-content">
        {/* website navbar */}
        <nav className="nav navbar">
          <div className="container-fluid navbar-inner">
            <button type="button" className="btn" aria-label="open sidebar" onClick={sidebarToggle}>
              <i class="bi bi-arrow-right-circle-fill"></i>
            </button>
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
            <div>
              <Link to="/" className="btn btn-danger btn-sm me-4">Sign Out</Link>
            </div>
          </div>
        </nav>

        {content}
      </main>
    </React.Fragment>
  );
}

export default Landing;
