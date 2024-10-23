import React from "react";

//imports for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function InfoPopup() {
    return (
      <React.Fragment>
        { /* info "popup" */}
        <div className="bg-info rounded row my-3 d-flex justify-content-center col-10 col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4">
          <div className="col-auto d-flex align-items-center">
            <FontAwesomeIcon icon={faCircleInfo} />
          </div>
          <div className="col-auto">
            <p className="my-2">Click on a button above to get started!</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
  
  export default InfoPopup;
  