import React from "react";

import profilePic1 from "./../../ExampleProfile1.jpg";

function ClientView() {
  return (
    <React.Fragment>
      {/* Profile picture */}
      <div className="d-flex justify-content-center my-3">
        <img src={profilePic1} alt="profile picture" style={{width:"256px", height:"256px", 'object-fit': "cover"}} className="rounded-circle" />
      </div>

      {/* Client information */}
      <div className="row bg-light">
        <div className="col-5">
          <div className="row">
            <h2 className="col-6 fs-6">Name</h2>
            <p className="col-6">John Doe</p>

            <h2 className="col-6 fs-6">Phone</h2>
            <p className="col-6">(555)-456-7890</p>

            <h2 className="col-6 fs-6">DOB</h2>
            <p className="col-6">01/01/2000</p>
          </div>
        </div>
        <div className="col-7">
          <div className="row">
            <h2 className="col-6 fs-6">Street address 1</h2>
            <p className="col-6">123 Main St.</p>

            <h2 className="col-6 fs-6">Street address 2</h2>
            <p className="col-6">Apt. 1</p>

            <h2 className="col-6 fs-6">City</h2>
            <p className="col-6">Springfield</p>

            <h2 className="col-6 fs-6">State</h2>
            <p className="col-6">IL</p>

            <h2 className="col-6 fs-6">Zip</h2>
            <p className="col-6">62701</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-between py-3 bg-light">
        <button type="button" className="btn btn-warning mx-2">Back</button>
        <button type="button" className="btn btn-primary mx-2">Edit household</button>
        <button type="button" className="btn btn-primary mx-2">Edit client</button>
        <button type="button" className="btn btn-success mx-2">Log visit</button>
      </div>
    </React.Fragment>
  );
}

export default ClientView;
