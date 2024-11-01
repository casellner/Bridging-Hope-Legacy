import React from "react";

import exampleLogo from './../ExampleLogo.png';
import exampleLogo2 from './../ExampleLogo2.png';

{ /*
  Filename:    ViewOrganizations.js
  Description: This component is used by the Bridging Hope Admin to view organizations and delete them.
*/ }

function ViewOrganizations() {
  return (
    <React.Fragment>
      <div className="card col-12 col-md-10 offset-0 offset-md-1 mt-3"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-header">
          <h2 className="text-center">Organization List</h2>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item border-0">
              <button type="button" className="btn btn-light col-6 offset-3">
                <div className="d-flex justify-content-center">
                  <img src={exampleLogo} alt="Organization logo" width="64" height="64" />
                </div>
                <h5 className="text-center">Organization XYZ</h5>
                <p className="text-center">Description of Organization XYZ</p>
              </button>
            </li>
            <li className="list-group-item border-0">
              <button type="button" className="btn btn-light col-6 offset-3">
                <div className="d-flex justify-content-center">
                  <img src={exampleLogo2} alt="Organization logo" width="64" height="64" />
                </div>
                <h5 className="text-center">Organization ABC</h5>
                <p className="text-center">Description of Organization ABC</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ViewOrganizations;
