import React from "react";

function BasicInfo() {
    return (
        <React.Fragment>
            <label for="txtDateOfBirth" className="form-label mt-2">Date of birth</label>
            <input id="txtDateOfBirth" type="date" className="form-control" />
            <h1>TODO add other fields</h1>
        </React.Fragment>
    );
}

export default BasicInfo;
