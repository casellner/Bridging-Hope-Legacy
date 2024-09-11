import React from "react";

function SearchClient() {
  return (
    <React.Fragment>
      <div className="card bg-info col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-body p-0">
          {/* Search fields */}
          <form className="col-8 offset-2"> { /* these columns could be adjusted for different screen sizes */}
            <label for="txtFirstName" className="form-label mt-2">First name</label>
            <input id="txtFirstName" type="text" placeholder="John" className="form-control" />
            <label for="txtLastName" className="form-label mt-2">Last name</label>
            <input id="txtLastName" type="text" placeholder="Doe" className="form-control" />
            <label for="txtDOB" className="form-label mt-2">Date of Birth</label>
            <input id="txtDOB" type="date" className="form-control" />
            <label for="txtPhone" className="form-label mt-2">Phone</label>
            <input id="txtPhone" type="tel" placeholder="(555) 123-4567" className="form-control" />
            <label for="txtEmail" className="form-label mt-2">Email</label>
            <input id="txtEmail" type="email" placeholder="jdoe@email.com" className="form-control" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchClient;
