import React from "react";

function BasicInfo() {
    return (
        <React.Fragment>
            { /* first and last name */}
            <label for="txtFirstName" className="form-label mt-2">First Name</label>
            <input id="txtFirstName" type="text" placeholder="John" className="form-control" />
            <label for="txtLastName" className="form-label mt-2">Last Name</label>
            <input id="txtLastName" type="text" placeholder="Doe" className="form-control" />

            { /* email */}
            <label for="txtEmail" className="form-label mt-2">Email</label>
            <input id="txtEmail" type="email" placeholder="jdoe@email.com" className="form-control" />
        </React.Fragment>
    );
}

export default BasicInfo;
