import React from "react";

import profilePic1 from "./../../ExampleProfile1.jpg";
import profilePic2 from "./../../ExampleProfile2.jpg";

function ClientList() {
  return (
    <React.Fragment>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-2">
              <img src={profilePic1} alt="profile picture" style={{width:"64px", height:"64px", 'object-fit': "cover"}} className="rounded-circle" />
            </div>
            <div className="col-10 row d-flex align-items-center">
              <p className="col-5">John</p>
              <p className="col-5">Doe</p>
              <button type="button" className="col-2 btn btn-primary">Select</button>
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
              <button type="button" className="col-2 btn btn-primary">Select</button>
            </div>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default ClientList;
