import React from "react";

import BasicInfo from "./registerForm/BasicInfo";
import Identification from "./registerForm/Identification";
import Address from "./registerForm/Address";

function RegisterClient() {
  //constants that determine which content is displayed (start with basic info)
  const [basicInfoIsOpen, setBasicInfoIsOpen] = React.useState(true);
  const [identificationIsOpen, setIdentificationIsOpen] = React.useState(false);
  const [AddressIsOpen, setAddressIsOpen] = React.useState(false);

  const [progressBarValue, setProgressBarValue] = React.useState(10);
  
  //constants to change the continue button to a register button
  const [btnText, setBtnText] = React.useState("Continue");
  const [btnColor, setBtnColor] = React.useState("primary");

  let formContent;

  function handleProgressBar() {
    setProgressBarValue(progressBarValue + 45);
  }

  function handleBtn() {
    setBtnText("Register");
    setBtnColor("success");
  }

  //functions for continue buttons
  function handleContinue() {
    if (basicInfoIsOpen) { //if basic info is open, close it and open identification
      setBasicInfoIsOpen(false);
      setIdentificationIsOpen(true);
    } else if (identificationIsOpen) { //if identification is open, close it and open address
      setIdentificationIsOpen(false);
      setAddressIsOpen(true);
      handleBtn();
    }
    handleProgressBar();
    console.log(progressBarValue);
  }

  if (basicInfoIsOpen) {
    formContent = <BasicInfo />;
  } else if (identificationIsOpen) {
    formContent = <Identification />;
  } else if (AddressIsOpen) {
    formContent = <Address />;
  }

  return (
    <React.Fragment>
      <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-header">
          {/* currently, this progress bar will go from 10% to 55% to 100% */}
          <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{width: `${progressBarValue}%`}}></div>
          </div>
        </div>

        <div className="card-body">
          {/* Registration form */}
          <form className="col-10 offset-1"> { /* these columns could be adjusted for different screen sizes */}
            {formContent}
          
            <button type="button" className={`btn btn-${btnColor} mt-4 col-10 offset-1`} onClick={handleContinue}>{ btnText }</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RegisterClient;
