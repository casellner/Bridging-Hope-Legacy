import React from "react";

const ManageVolunteers = ({ onSelectBack }) => {
  return (
    <React.Fragment>
      <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-body">
          <h2 className="text-center">Manage volunteers</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="row">
                <img src="https://via.placeholder.com/150" alt="profile" className="col-2" />
                <p className="col-4">John</p>
                <p className="col-4">Doe</p>
                <button type="button" className="col-2 btn btn-secondary">Edit</button>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <img src="https://via.placeholder.com/150" alt="profile" className="col-2" />
                <p className="col-4">Jane</p>
                <p className="col-4">Doe</p>
                <button type="button" className="col-2 btn btn-secondary">Edit</button>
              </div>
            </li>
          </ul>

          <h2 className="text-center">Volunteer requests</h2>
          <ul className="list-group">
            <li className="list-group-item">
                <div className="row">
                  <img src="https://via.placeholder.com/150" alt="profile" className="col-2" />
                  <p className="col-3">John</p>
                  <p className="col-3">Doe</p>
                  <button type="button" className="col-2 btn btn-success">Add</button>
                  <button type="button" className="col-2 btn btn-danger">Deny</button>
                </div>
              </li>
            </ul>

          {/* TODO: change this to match wireframes */}
          <button type="button" className="btn btn-warning mt-2 col-4 offset-4" onClick={onSelectBack}>Go back</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ManageVolunteers;
  