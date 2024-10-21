import React from "react";

function BasicInfo({onClickContinue}) {
    return (
        <React.Fragment>
            { /* first and last name */}
            <label for="txtFirstName" className="form-label mt-2">First Name</label>
            <input id="txtFirstName" type="text" placeholder="John" className="form-control" required aria-required="true" />
            <label for="txtLastName" className="form-label mt-2">Last Name</label>
            <input id="txtLastName" type="text" placeholder="Doe" className="form-control" required aria-required="true" />

            { /* email */}
            <label for="txtEmail" className="form-label mt-2">Email</label>
            <input id="txtEmail" type="email" placeholder="jdoe@email.com" className="form-control" />
        
            { /* Continue button */}
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mt-4" onClick={onClickContinue}>Continue</button>
            </div>
        </React.Fragment>
    );
}

export default BasicInfo;
