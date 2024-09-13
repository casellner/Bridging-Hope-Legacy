import React from "react";

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
            <div className="mt-4">
              <button type="button" className="btn btn-primary">Edit Address</button>
              <button type="button" className="btn btn-primary">Edit Logo</button>
              <button type="button" className="btn btn-primary">Edit Services</button>
              <button type="button" className="btn btn-warning" onClick={onSelectBack}>Go back</button>
              <button type="button" className="btn btn-success">Save</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditOrganization;
  