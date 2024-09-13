import React from "react";

const ManageVolunteers = ({ onSelectBack }) => {
  return (
    <React.Fragment>
      <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-body">
          <p>TODO also</p>

          {/* TODO: change this to match wireframes */}
          <button type="button" className="btn btn-warning mt-2 col-4 offset-4" onClick={onSelectBack}>Go back</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ManageVolunteers;
  