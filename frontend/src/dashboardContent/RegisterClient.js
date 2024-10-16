import React from "react";

import BasicInfo from "./registerForm/BasicInfo";
import Identification from "./registerForm/Identification";
import Address from "./registerForm/Address";

function RegisterClient() {
  //constants that determine which form content is displayed (start with basic info)
  const [basicInfoIsOpen, setBasicInfoIsOpen] = React.useState(true);
  const [identificationIsOpen, setIdentificationIsOpen] = React.useState(false);
  const [AddressIsOpen, setAddressIsOpen] = React.useState(false);

  const [progressBarValue, setProgressBarValue] = React.useState(10);

  let formContent;

  //function for continue buttons
  const handleContinue = () => {
    setProgressBarValue(progressBarValue + 45); //first, update the progress bar
    if (basicInfoIsOpen) { //if basic info is open, close it and open identification
      console.log("basic info is open");
      setBasicInfoIsOpen(false);
      console.log(basicInfoIsOpen);
      setIdentificationIsOpen(true);
    } else if (identificationIsOpen) { //if identification is open, close it and open address
      setIdentificationIsOpen(false);
      setAddressIsOpen(true);
    }
  }

  //function for back buttons
  const handleBack = () => {
    setProgressBarValue(progressBarValue - 45); //first, update the progress bar
    if (identificationIsOpen) { //if identification is open, close it and open basic info
      setIdentificationIsOpen(false);
      setBasicInfoIsOpen(true);
    } else if (AddressIsOpen) { //if address is open, close it and open identification
      setAddressIsOpen(false);
      setIdentificationIsOpen(true);
    }
  }

  if (basicInfoIsOpen) {
    formContent = <BasicInfo onClickContinue={handleContinue} />;
  } else if (identificationIsOpen) {
    formContent = <Identification onClickBack={handleBack} onClickContinue={handleContinue}/>; 
  } else if (AddressIsOpen) {
    formContent = <Address onClickBack={handleBack}/>;
  }

  return (
    <React.Fragment>
      <div className="card col-12 col-md-10 offset-0 offset-md-1 mt-3"> {/* this card will have different widths depending on the resolution of the device */}
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
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RegisterClient;
