import React from "react";

const SwitchOrganization = () => {
  return (
    <React.Fragment>
      <div className="card col-12 col-md-10 offset-0 offset-md-1 mt-3"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-header">
          <h2 className="text-center">Select an Organization</h2>
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-success col-6 offset-3">Organization XYZ</button>
          <button type="button" className="btn btn-success mt-2 col-6 offset-3">Organization ABC</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SwitchOrganization;
