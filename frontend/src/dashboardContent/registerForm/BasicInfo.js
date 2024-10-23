import React from "react";

function BasicInfo({ onClickContinue }) {
  /*
    Function: checkValidity
    Purpose:  Check if the first and last name fields are filled out. If they are, call the onClickContinue function.
              Error messages are currently hanled by the browser.
  */
  function checkValidity() {
    const txtFirstName = document.getElementById("txtFirstName");
    const txtLastName = document.getElementById("txtLastName");
    if (txtFirstName.value != "" && txtLastName != "") {
      onClickContinue();
    }
  }

  return (
    <React.Fragment>
      { /* first and last name */}
      <label for="txtFirstName" className="form-label mt-2">First Name <span className="align-top" style={{fontSize:"0.6em"}}>*required</span></label>
      <input id="txtFirstName" type="text" placeholder="John" className="form-control" required aria-required="true" />
      <label for="txtLastName" className="form-label mt-2">Last Name <span className="align-top" style={{fontSize:"0.6em"}}>*required</span></label>
      <input id="txtLastName" type="text" placeholder="Doe" className="form-control" required aria-required="true" />

      { /* email */}
      <label for="txtEmail" className="form-label mt-2">Email</label>
      <input id="txtEmail" type="email" placeholder="jdoe@email.com" className="form-control" />

      { /* Continue button */}
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary mt-4" onClick={checkValidity}>Continue</button>
      </div>
    </React.Fragment>
  );
}

export default BasicInfo;
