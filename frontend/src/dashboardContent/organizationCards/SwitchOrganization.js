import React from "react";

const SwitchOrganization = ({ onSelectBack }) => {
  return (
    <React.Fragment>
      <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-header">
          <h2 className="text-center">Select an Organization</h2>
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-success col-6 offset-3">Organization XYZ</button>
          <button type="button" className="btn btn-success mt-2 col-6 offset-3">Organization ABC</button>
          <button type="button" className="btn btn-warning mt-2 col-4 offset-4" onClick={onSelectBack}>Go back</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SwitchOrganization;
  