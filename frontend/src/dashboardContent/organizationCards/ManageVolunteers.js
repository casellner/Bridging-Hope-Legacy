import React from "react";
import profilePic1 from "../../ExampleProfile1.jpg";
import profilePic2 from "../../ExampleProfile2.jpg";

const ManageVolunteers = ({ onSelectBack }) => {
  return (
    <React.Fragment>
      <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-body">
          <h2 className="text-center mb-4">Manage volunteers</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="row">
                <div className="col-2">
                  <img src={profilePic1} alt="profile picture" style={{width:"64px", height:"64px", 'object-fit': "cover"}} className="rounded-circle" />
                </div>
                <div className="col-10 row d-flex align-items-center">
                  <p className="col-5">John</p>
                  <p className="col-5">Doe</p>
                  <button type="button" className="col-2 btn btn-secondary">Edit</button>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-2">
                  <img src={profilePic2} alt="profile picture" style={{width:"64px", height:"64px", 'object-fit': "cover"}} className="rounded-circle" />
                </div>
                <div className="col-10 row d-flex align-items-center">
                  <p className="col-5">Jane</p>
                  <p className="col-5">Doe</p>
                  <button type="button" className="col-2 btn btn-secondary">Edit</button>
                </div>
              </div>
            </li>
          </ul>

          <h2 className="text-center my-3">Volunteer requests</h2>
          <ul className="list-group">
            <li className="list-group-item">
                <div className="row">
                  <div className="col-2">
                    <img src={profilePic2} alt="profile picture" style={{width:"64px", height:"64px", 'object-fit': "cover"}} className="rounded-circle" />
                  </div>
                  <div className="col-10 row d-flex align-items-center">
                    <p className="col-3">Alice</p>
                    <p className="col-4">Bob</p>
                    <button type="button" className="col-2 btn btn-success">Add</button>
                    <button type="button" className="col-2 ms-2 btn btn-danger">Deny</button>
                  </div>
                </div>
              </li>
            </ul>

          <button type="button" className="btn btn-warning mt-4 col-4 offset-4" onClick={onSelectBack}>Go back</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ManageVolunteers;
  