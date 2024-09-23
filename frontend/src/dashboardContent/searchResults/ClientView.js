import React from "react";

function ClientView() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-5">
          <div className="row">
            <h2 className="col-6 fs-5">Name</h2>
            <p className="col-6">John Doe</p>

            <h2 className="col-6 fs-5">Phone</h2>
            <p className="col-6">(555)-456-7890</p>

            <h2 className="col-6 fs-5">DOB</h2>
            <p className="col-6">01/01/2000</p>
          </div>
        </div>
        <div className="col-7">
          <div className="row">
            <h2 className="col-6 fs-5">Street address 1</h2>
            <p className="col-6">123 Main St.</p>

            <h2 className="col-6 fs-5">Street address 2</h2>
            <p className="col-6">Apt. 1</p>

            <h2 className="col-6 fs-5">City</h2>
            <p className="col-6">Springfield</p>

            <h2 className="col-6 fs-5">State</h2>
            <p className="col-6">IL</p>

            <h2 className="col-6 fs-5">Zip</h2>
            <p className="col-6">62701</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ClientView;
