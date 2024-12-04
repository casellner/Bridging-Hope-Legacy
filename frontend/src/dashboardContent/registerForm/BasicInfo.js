import React from "react";

{ /*
  Filename:    BasicInfo.js
  Description: This component is the first part of registering a client.
*/ }

function BasicInfo({ formData, onChange, onClickContinue }) {
  /*
    Function: checkValidity
    Purpose:  Check if the first and last name fields are filled out. If they are, call the onClickContinue function.
              Error messages are currently hanled by the browser.
  */
  function checkValidity() {
    if (formData.firstName != "" && formData.lastName != "") {
      onClickContinue();
    }
  }

  return (
    <React.Fragment>
      { /* first and last name */}
      <label for="firstName" className="form-label mt-2">First Name <span className="align-top" style={{ fontSize: "0.6em" }}>*required</span></label>
      <input id="firstName" type="text" placeholder="John" className="form-control" required aria-required="true" value={ formData.firstName } onChange={ onChange } />
      <label for="lastName" className="form-label mt-2">Last Name <span className="align-top" style={{ fontSize: "0.6em" }}>*required</span></label>
      <input id="lastName" type="text" placeholder="Doe" className="form-control" required aria-required="true" value={ formData.lastName } onChange={ onChange }/>

      { /* email */}
      <label for="email" className="form-label mt-2">Email</label>
      <input id="email" type="email" placeholder="jdoe@email.com" className="form-control" value={ formData.email } onChange={ onChange }/>

      <div className="row">
        <div className="col">
          <label for="DOB" className="form-label mt-2">Date of birth</label>
          <input id="DOB" type="date" className="form-control" value={ formData.DOB } onChange={ onChange }/>
        </div>
        <div className="col">
          <label for="phone" className="form-label mt-2">Phone number</label>
          <input id="phone" type="tel" className="form-control" placeholder="(555) 123-4567" value={ formData.phone } onChange={ onChange }/>
        </div>
      </div>
      <label for="photo" className="form-label mt-2">Profile picture</label>
      <input id="photo" class="form-control" type="file" value={ formData.photo } onChange={ onChange }/>


      { /* Continue button */}
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary mt-4" onClick={checkValidity}>Continue</button>
      </div>
    </React.Fragment>
  );
}

export default BasicInfo;