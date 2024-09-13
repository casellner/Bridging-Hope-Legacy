import React from "react";

function Organization() {
  return (
    <React.Fragment>
      <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-body">
          <h2 className="text-center">Currently signed into: Organization XYZ</h2>
          <button type="button" className="btn btn-primary mt-2 col-6 offset-3">Switch Organization</button>
          <button type="button" className="btn btn-warning mt-2 col-6 offset-3">Edit Organization</button>
          <button type="button" className="btn btn-primary mt-2 col-6 offset-3">Manage Volunteers</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Organization;
  