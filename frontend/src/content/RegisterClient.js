import React from "react";

function RegisterClient() {
  return (
    <React.Fragment>
      <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-header">
          {/* currently, this progress bar will go from 10% to 55% to 100% */}
          <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{width: '10%'}}></div>
          </div>
        </div>

        <div className="card-body">
          {/* Registration form */}
          <form className="col-8 offset-2"> { /* these columns could be adjusted for different screen sizes */}
            { /* first and last name */}
            <label for="txtFirstName" className="form-label mt-2">First Name</label>
            <input id="txtFirstName" type="text" placeholder="John" className="form-control" />
            <label for="txtLastName" className="form-label mt-2">Last Name</label>
            <input id="txtLastName" type="text" placeholder="Doe" className="form-control" />

            { /* email */}
            <label for="txtEmail" className="form-label mt-2">Email</label>
            <input id="txtEmail" type="email" placeholder="jdoe@email.com" className="form-control" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RegisterClient;
