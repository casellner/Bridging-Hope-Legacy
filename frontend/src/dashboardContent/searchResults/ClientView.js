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
      <div className="pt-4 row bg-light">
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
        <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#editHouseholdBackdrop">Edit household</button>
        <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#editClientBackdrop">Edit client</button>
        <button type="button" className="btn btn-success mx-2">Log visit</button>
      </div>

      {/* Edit household modal */}
      <div className="modal fade" id="editHouseholdBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit household</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h2>TODO: finish this</h2>
              <p>note: there are no wireframes for this yet</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit client modal */}
      <div className="modal fade" id="editClientBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit client</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-6">
                    <label for="txtName" className="form-label">Name</label>
                    <input id="txtName" type="text" placeholder="John Doe" className="form-control" />
                    <label for="txtEmail" className="form-label mt-2">Email</label>
                    <input id="txtEmail" type="email" placeholder="jdoe@email.com" className="form-control" />
                    <label for="txtPhone" className="form-label mt-2">Phone</label>
                    <input id="txtPhone" type="tel" placeholder="(555)-456-7890" className="form-control" />
                    <label for="txtDOB" className="form-label mt-2">Date of Birth</label>
                    <input id="txtDOB" type="date" className="form-control" />
                  </div>
                  <div className="col-6">
                    <label for="txtStreetAddress1" classname="form-label">Street address 1</label>
                    <input id="txtStreetAddress1" type="text" placeholder="123 Main St." className="form-control" />
                    <label for="txtStreetAddress2" classname="form-label mt-2">Street address 2</label>
                    <input id="txtStreetAddress2" type="text" placeholder="Apt. 1" className="form-control" />
                    <label for="txtCity" classname="form-label mt-2">City</label>
                    <input id="txtCity" type="text" placeholder="Cookeville" className="form-control" />
                    <label for="txtState" classname="form-label mt-2">State</label>
                    <p>todo</p>
                    <label for="txtZip" classname="form-label mt-2">Zip</label>
                    <input id="txtZip" type="text" placeholder="38501" className="form-control" />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ClientView;
