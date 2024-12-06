import React, { useState, useEffect } from "react";
import axios from 'axios';
import BasicInfo from "./registerForm/BasicInfo";
import Address from "./registerForm/Address";

{ /*
  Filename:    RegisterClient.js
  Description: This component renders BasicInfo.js, Identification.js, or Address.js
               depending on where a user is in the Register Client form.
*/ }

function RegisterClient() {
    const url = process.env.REACT_APP_API_URL + '/api/register_client';

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        DOB: '',
        phone: '',
        photo: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: ''
    });
  
    const [errors, setErrors] = useState({
      message: ''
    });
  
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleCloseModal = () => {
      setShowSuccessModal(false);
    };
  
    const handleChange = (e) => {
      /*if (e.target.id == 'photo') {
        let file = e.target.value
        const photoBlob = new Blob([file], { type: file.type });
        setFormData({
          ...formData,
          [e.target.id]: photoBlob
        });
        console.log("ehllo")
        return;
      }*/
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      });
      console.log(formData);
    };

    async function submit() {
      try {
        setShowSuccessModal(true); // Show success modal
        await axios.post(url, formData);
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error registering user';
        setErrors({ message: errorMessage });
        alert("Registration Failed");
      }
    };

  //constants that determine which form content is displayed (start with basic info)
  const [basicInfoIsOpen, setBasicInfoIsOpen] = React.useState(true);
  const [AddressIsOpen, setAddressIsOpen] = React.useState(false);

  const [progressBarValue, setProgressBarValue] = React.useState(10);

  let formContent;

  //function for continue buttons
  const handleContinue = () => {
    setProgressBarValue(progressBarValue + 45); //first, update the progress bar
    if (basicInfoIsOpen) { //if basic info is open, close it and open identification
      setBasicInfoIsOpen(false);
      setAddressIsOpen(true);
    } else if(AddressIsOpen){
      submit();
    }
  }

  //function for back buttons
  const handleBack = () => {
    setProgressBarValue(progressBarValue - 45); //first, update the progress bar
     if (AddressIsOpen) { //if address is open, close it and open identification
      setAddressIsOpen(false);
      setBasicInfoIsOpen(true);
    }
  }

  if (basicInfoIsOpen) {
    formContent = <BasicInfo onClickContinue={handleContinue} formData={formData} onChange={handleChange} />;
    //formContent = <BasicInfo onClickContinue={handleContinue} />;
  } else if (AddressIsOpen) {
    //formContent = <Address onClickBack={handleBack} onClickContinue={handleContinue}/>;
    formContent = <Address onClickBack={handleBack} onClickContinue={handleContinue} formData={formData} onChange={handleChange} />;
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

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Registration Successful</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>The client has been registered.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default RegisterClient;
