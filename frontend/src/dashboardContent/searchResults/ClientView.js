import React from "react";

import profilePic1 from "./../../ExampleProfile1.jpg";

{ /*
  Filename:    ClientView.js
  Description: This component renders the details of a specific client.
*/ }

function ClientView({ onBack }) {
  const [serviceType, setServiceType] = React.useState("0");
  
  let amountInput;

  if (serviceType == "0") {
    amountInput = 
    <React.Fragment>
      <label className="form-label mt-2">Amount</label>
      <div className="d-flex align-items-start">
        <p>Feeds</p>
        <input type="text" placeholder="7" className="form-control" aria-label="number of people fed" />
        <p>people for</p>
        <input type="text" placeholder="7" className="form-control" aria-label="number of days fed" />
        <p>days</p>
      </div>
    </React.Fragment>;
  } else if (serviceType == "1") {
    amountInput =
    <React.Fragment>
      <label for="txtAmount" className="form-label mt-2">Amount</label>
      <div className="d-flex align-items-start">
        <p>$</p>
        <input id="txtAmount" type="text" placeholder="7" className="form-control" />
      </div>
    </React.Fragment>;
  } else if (serviceType == "2") {
    amountInput =
    <React.Fragment>
      <label for="txtAmount" className="form-label mt-2">Amount</label>
      <input id="txtAmount" type="text" placeholder="7" className="form-control" />
    </React.Fragment>;
  } else {
    amountInput = <p>error</p>;
  }

  return (
    <React.Fragment>
      {/* Profile picture */}
      <div className="d-flex justify-content-center py-1 bg-info">
        <img src={profilePic1} alt="profile picture" style={{width:"128px", height:"128px", 'object-fit': "cover"}} className="rounded-circle" />
      </div>

      {/* Client information */}
      <div className="row">
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
      <div className="d-flex justify-content-between py-1 bg-light">
        <button type="button" className="btn btn-warning mx-2" onClick={onBack}>Back</button>
        <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#editHouseholdBackdrop">Edit household</button>
        <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#editClientBackdrop">Edit client</button>
        <button type="button" className="btn btn-success mx-2" data-bs-toggle="modal" data-bs-target="#logVisitBackdrop">Log visit</button>
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
                    <select id="txtState" className="form-select" aria-label="select state">
                      <option selected className="text-secondary">select</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
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

      { /* Log visit modal */ }
      <div className="modal fade" id="logVisitBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Log visit</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label for="txtServiceType" className="form-label">Service type</label>
              <select id="txtServiceType" className="form-select" aria-label="select service type" value={serviceType} onChange={e => setServiceType(e.target.value)}>
                <option selected className="text-secondary">select</option>
                <option value="0">Food</option>
                <option value="1">Debt payment</option>
                <option value="2">Medical</option>
              </select>

              { /* TODO: add conditional rendering for the following fields based on the selected service type */ }
              {amountInput}

              <label for="txtComments" className="form-label mt-2">Additional comments</label>
              <textarea id="txtComments" placeholder="Comment here" className="form-control" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-success">Log visit!</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ClientView;
