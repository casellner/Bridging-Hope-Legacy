import React from "react";
import profilePic1 from "../../ExampleProfile1.jpg";
import profilePic2 from "../../ExampleProfile2.jpg";

const ManageVolunteers = () => {
  return (
    <React.Fragment>
      <div className="card col-12 col-md-10 offset-0 offset-md-1 mt-3"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-body">
          <h2 className="mb-4 fs-3">Manage volunteers</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Picture</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={profilePic1} alt="profile picture" style={{width:"64px", height:"64px", 'object-fit': "cover"}} className="rounded-circle" /></td>
                <td>John</td>
                <td>Doe</td>
                <td><button type="button" className="btn btn-secondary">Edit</button></td>
              </tr>
              <tr>
                <td><img src={profilePic2} alt="profile picture" style={{width:"64px", height:"64px", 'object-fit': "cover"}} className="rounded-circle" /></td>
                <td>Jane</td>
                <td>Doe</td>
                <td><button type="button" className="btn btn-secondary">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ManageVolunteers;
