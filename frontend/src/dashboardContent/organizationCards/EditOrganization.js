import React from "react";

import exampleLogo from './../../ExampleLogo.png';

const EditOrganization = ({ onSelectBack }) => {
  return (
    <React.Fragment>
      <div className="card bg-info col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-body">
          <form>
            <label for="txtOrgName" className="form-label mt-2">Organization name</label>
            <input id="txtOrgName" type="text" placeholder="Organization XYZ" className="form-control" />
            <label for="txtOrgType" className="form-label mt-2">Organization type</label>
            <select id="txtOrgType" className="form-select">
              <option selected className="text-secondary" aria-label="select ID Type">select</option>
              <option value="1">Religious organization</option>
              <option value="2">Government</option>
              <option value="3">Nonprofit</option>
            </select>
            <label for="txtOrgPhone" className="form-label mt-2">Phone</label>
            <input id="txtOrgPhone" type="tel" placeholder="(555) 555-5555" className="form-control" />
            <label for="txtOrgEmail" className="form-label mt-2">Email</label>
            <input id="txtOrgEmail" type="email" placeholder="orgxyz@email.com" className="form-control" />

            {/* TODO: change these buttons to match wireframes */}
            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editAddressBackdrop">Edit address</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editLogoBackdrop">Edit logo</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editServicesBackdrop">Edit services</button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <button type="button" className="btn btn-warning" onClick={onSelectBack}>Go back</button>
              <button type="button" className="btn btn-success">Save</button>
            </div>
          </form>
        </div>
      </div>

      { /* Edit address modal */ }
      <div class="modal fade" id="editAddressBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit address</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <label for="txtOrgStreetAddress1" className="form-label mt-2">Street address 1</label>
                <input id="txtOrgStreetAddress1" type="text" placeholder="123 Cherry Lane" className="form-control" />
                <label for="txtOrgStreetAddress2" className="form-label mt-2">Street address 2</label>
                <input id="txtOrgStreetAddress2" type="text" placeholder="Apartment 001" className="form-control" />
                <div className="row">
                  <div className="col">
                    <label for="txtOrgCity" className="form-label mt-2">City</label>
                    <input id="txtOrgCity" type="text" placeholder="City" className="form-control" />
                  </div>
                  <div className="col">
                    <label for="txtOrgState" className="form-label mt-2">State</label>
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
                  </div>
                  <div className="col">
                    <label for="txtOrgZip" className="form-label mt-2">Zip</label>
                    <input id="txtOrgZip" type="text" placeholder="Zip" className="form-control" />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>

      { /* Edit logo modal */ }
      <div class="modal fade" id="editLogoBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit logo</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h2 className="text-center">Current logo</h2>
              <div className="d-flex justify-content-center">
                <img src={exampleLogo} alt="Example Logo" width="128" height="128" className="rounded" />
              </div>
              <label for="imgOrgLogo" className="form-label mt-2">Upload logo</label>
              <input id="imgOrgLogo" class="form-control" type="file" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>

      { /* Edit services modal */ }
      <div class="modal fade" id="editServicesBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="modal-header bg-info border-dark">
              <h3 class="modal-title fs-5" id="staticBackdropLabel">Edit services</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bg-info">
              <h2>Services</h2>
              <div class="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckFood" />
                <label className="form-check-label" for="flexCheckFood">Food</label>
              </div>
              <div class="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDebtPayment" />
                <label className="form-check-label" for="flexCheckDebtPayment">Debt payment</label>
              </div>
              <div class="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckMedical" />
                <label className="form-check-label" for="flexCheckMedical">Medical</label>
              </div>
              <div class="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckClothing" />
                <label className="form-check-label" for="flexCheckClothing">Clothing</label>
              </div>
            </div>
            <div className="modal-footer bg-info border-dark">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditOrganization;
  