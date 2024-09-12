import React from "react";

function Address() {
    return (
        <React.Fragment>
            <label for="txtStreetAddress1" className="form-label mt-2">Street address 1</label>
            <input id="txtStreetAddress1" type="text" placeholder="123 Cherry Lane" className="form-control" />
            <h1>TODO add other fields</h1>
        </React.Fragment>
    );
}

export default Address;
