import React from "react";
import { Link } from 'react-router-dom';

//imports for content (search client, register client, etc.)
import InfoPopup from '../dashboardContent/InfoPopup';
import SearchClient from '../dashboardContent/SearchClient';
import RegisterClient from '../dashboardContent/RegisterClient';
import SwitchOrganization from "../dashboardContent/organizationContent/SwitchOrganization";
import EditOrganization from "../dashboardContent/organizationContent/EditOrganization";
import ManageVolunteers from "../dashboardContent/organizationContent/ManageVolunteers";
import CreateOrganization from "../dashboardContent/CreateOrganization";
import ViewOrganizations from "../dashboardContent/ViewOrganizations";

{ /*
  Filename:    Dashboard.js
  Description: This page displays the tools volunteers and admins use to manage clients and organizations.
*/ }

const Landing = () => {
  //constants that determine which content is displayed
  const [contentOpen, setContentOpen] = React.useState("info");

  const [sidebarExpanded, setSidebarExpanded] = React.useState(true);

  //functions for search client, register client, and organization buttons
  function handleClientSearchClick() {
    setContentOpen("search");
  }
  function handleRegisterClientClick() {
    setContentOpen("register");
  }
  function handleSwitchOrganizationClick() {
    setContentOpen("switchOrganization");
  }
  function handleEditOrganizationClick() {
    setContentOpen("editOrganization");
  }
  function handleManageVolunteersClick() {
    setContentOpen("manageVolunteers");
  }
  function handleCreateOrganizationClick() {
    setContentOpen("createOrganization");
  }
  function handleViewOrganizationsClick() {
    setContentOpen("viewOrganizations");
  }

  function sidebarToggle() {
    setSidebarExpanded(!sidebarExpanded);
  }

  //content to be displayed (client search, register client, organization, etc.)
  let content;
  if (contentOpen === "info") {
    content = <InfoPopup />;
  } else if (contentOpen === "search") {
    content = <SearchClient />;
  } else if (contentOpen === "register") {
    content = <RegisterClient />;
  } else if (contentOpen === "switchOrganization") {
    content = <SwitchOrganization />;
  } else if (contentOpen === "editOrganization") {
    content = <EditOrganization />;
  } else if (contentOpen === "manageVolunteers") {
    content = <ManageVolunteers />;
  } else if (contentOpen === "createOrganization") {
    content = <CreateOrganization />;
  } else if (contentOpen === "viewOrganizations") {
    content = <ViewOrganizations />;
  }

  return (
    <React.Fragment>
      <aside {...(sidebarExpanded ? { className: "sidebar sidebar-default sidebar-white sidebar-base navs-rounded-all" } : { className: "sidebar sidebar-default sidebar-white sidebar-base navs-rounded-all sidebar-mini" })}>
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <a className="navbar-brand" href="/">
            <img src="./images/BridgingHopeNoWord.svg" className="img-fluid" alt="logo" style={{maxHeight: "45px"}} />
          </a>
          <button type="button" {...(sidebarExpanded ? { className: 'btn' } : { className: 'btn invisible' })} aria-label="close sidebar" onClick={sidebarToggle}>
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
                    <span className="mini-icon">━━━━━</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a {...((contentOpen === "search") ? { className: 'nav-link active' } : { className: 'nav-link' })} onClick={handleClientSearchClick}>
                    <i className="bi bi-search"></i>
                    <span className="item-name">Client Search</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a {...((contentOpen === "register") ? { className: 'nav-link active' } : { className: 'nav-link' })} onClick={handleRegisterClientClick}>
                    <i className="bi bi-clipboard-check"></i>
                    <span className="item-name">Register Client</span>
                  </a>
                </li>
                <li className="nav-item static-item">
                  <a className="nav-link static-item disabled" href="#" tabIndex="-1">
                    <span className="default-icon">Organization</span>
                    <span className="mini-icon">━━━━━</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a {...((contentOpen === "switchOrganization") ? { className: 'nav-link active' } : { className: 'nav-link' })} onClick={handleSwitchOrganizationClick}>
                    <i className="bi bi-arrow-left-right"></i>
                    <span className="item-name">Switch Organization</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a {...((contentOpen === "editOrganization") ? { className: 'nav-link active' } : { className: 'nav-link' })} onClick={handleEditOrganizationClick}>
                    <i className="bi bi-pen"></i>
                    <span className="item-name">Edit Organization</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a {...((contentOpen === "manageVolunteers") ? { className: 'nav-link active' } : { className: 'nav-link' })} onClick={handleManageVolunteersClick}>
                    <i className="bi bi-person-lines-fill"></i>
                    <span className="item-name">ManageVolunteers</span>
                  </a>
                </li>
                <li className="nav-item static-item">
                  <a className="nav-link static-item disabled" href="#" tabIndex="-1">
                    <span className="default-icon">BH Admin</span>
                    <span className="mini-icon">━━━━━</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a {...((contentOpen === "createOrganization") ? { className: 'nav-link active' } : { className: 'nav-link' })} onClick={handleCreateOrganizationClick}>
                    <i className="bi bi-building-add"></i>
                    <span className="item-name">Create Organization</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a {...((contentOpen === "viewOrganizations") ? { className: 'nav-link active' } : { className: 'nav-link' })} onClick={handleViewOrganizationsClick}>
                    <i className="bi bi-view-list"></i>
                    <span className="item-name">View Organizations</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar-footer"></div>
      </aside>

      <main className="main-content">
        {/* navbar */}
        <nav className="nav navbar">
          <div className="container-fluid navbar-inner">
            <button type="button" {...(sidebarExpanded ? { className: 'btn invisible' } : { className: 'btn' })} aria-label="open sidebar" onClick={sidebarToggle}>
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
