import React from "react";

//imports for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function InfoPopup() {
    return (
      <React.Fragment>
        { /* info "popup" */}
        <div className="bg-info rounded row d-flex justify-content-center col-lg-6 col-md-6 col-12 offset-lg-3 offset-md-3">
          <div className="col-auto d-flex align-items-center">
            <FontAwesomeIcon icon={faCircleInfo} className="text-dark" />
          </div>
          <div className="col-auto">
            <p className="text-dark my-2">Click on a button to get started!</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
  
  export default InfoPopup;
  