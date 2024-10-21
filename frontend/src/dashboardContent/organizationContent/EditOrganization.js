import React from "react";

import exampleLogo from './../../ExampleLogo.png';

const EditOrganization = () => {
  return (
    <React.Fragment>
      <h1 className="mt-3 ms-5">Organization XYZ</h1>
      <div className="card col-12 col-md-10 offset-0 offset-md-1 mt-3"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-body">
          <form>
            <h2 className="fs-4 mb-1">Basic Info</h2>
            <div className="row">
              <div className="col">
                <label for="txtOrgName" className="form-label mt-2">Organization name</label>
                <input id="txtOrgName" type="text" placeholder="Organization XYZ" className="form-control" />
              </div>
              <div className="col">
                <label for="txtOrgType" className="form-label mt-2">Organization type</label>
                <select id="txtOrgType" className="form-select">
                  <option selected className="text-secondary" aria-label="select ID Type">select</option>
                  <option value="1">Religious organization</option>
                  <option value="2">Government</option>
                  <option value="3">Nonprofit</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="txtOrgPhone" className="form-label mt-2">Phone</label>
                <input id="txtOrgPhone" type="tel" placeholder="(555) 555-5555" className="form-control" />
              </div>
              <div className="col">
                <label for="txtOrgEmail" className="form-label mt-2">Email</label>
                <input id="txtOrgEmail" type="email" placeholder="orgxyz@email.com" className="form-control" />
              </div>
            </div>

            <h2 className="text-center mt-4">Current logo</h2>
            <div className="d-flex justify-content-center">
              <img src={exampleLogo} alt="Example Logo" width="128" height="128" className="rounded" />
            </div>
            <label for="imgOrgLogo" className="form-label mt-2">Upload logo</label>
            <input id="imgOrgLogo" className="form-control" type="file" />

            <h2 className="fs-4 mt-4">Address</h2>
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

            <h2 className="fs-4 mt-4 mb-2">Services</h2>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckFood" />
              <label className="form-check-label" for="flexCheckFood">Food</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDebtPayment" />
              <label className="form-check-label" for="flexCheckDebtPayment">Debt payment</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckMedical" />
              <label className="form-check-label" for="flexCheckMedical">Medical</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckClothing" />
              <label className="form-check-label" for="flexCheckClothing">Clothing</label>
            </div>

            <div className="d-flex justify-content-center mt-3">
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditOrganization;
