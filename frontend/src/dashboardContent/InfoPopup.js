import React from "react";

{ /*
  Filename:    InfoPopup.js
  Description: This "popup" component is used to display a message to the user when they first visit the dashboard.
*/ }

function InfoPopup() {
    return (
      <React.Fragment>
        { /* info "popup" */}
        <div className="bg-info rounded row my-3 d-flex justify-content-center col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4">
          <div className="col-auto d-flex align-items-center">
            <i className="bi bi-info-circle text-dark"></i>
          </div>
          <div className="col-auto">
            <p className="text-dark my-2">Click on a button to get started!</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
  
  export default InfoPopup;
  