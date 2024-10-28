import React from "react";

import exampleLogo from './../../ExampleLogo.png';
import exampleLogo2 from './../../ExampleLogo2.png';

{ /*
  Filename:    SwitchOrganization.js
  Description: This component renders a list of organizations that the user can switch to and allows a user to join a new organization.
*/ }

const SwitchOrganization = () => {
  return (
    <React.Fragment>
      <div className="card col-12 col-md-10 offset-0 offset-md-1 mt-3"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-header">
          <h2 className="text-center">Select an Organization</h2>
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

          <button type="button" className="btn btn-secondary mt-4 col-4 offset-4" data-bs-toggle="modal" data-bs-target="#joinOrganizationModal">Join organization</button>
        </div>
      </div>

      {/* Join organizaiton modal */}
      <div className="modal fade" id="joinOrganizationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Select an Organization</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <form>
                    <p>Join an organizaiton with a code:</p>
                    <input type="text" placeholder="12345" className="form-control" />
                  </form>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-center">
                    <img src={exampleLogo} alt="Organization logo" width="64" height="64" />
                  </div>
                  <h5 className="text-center">Organization XYZ</h5>
                  <p className="text-center">Description of Organization XYZ</p>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary">Join</button>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-center">
                    <img src={exampleLogo2} alt="Organization logo" width="64" height="64" />
                  </div>
                  <h5 className="text-center">Organization ABC</h5>
                  <p className="text-center">Description of Organization ABC</p>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary">Join</button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SwitchOrganization;
