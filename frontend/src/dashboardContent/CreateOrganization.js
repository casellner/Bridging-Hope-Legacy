import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import exampleLogo from './../ExampleLogo.png';

{ /*
  Filename:    CreateOrganization.js
  Description: This component is used by the Bridging Hope Admin to create a new organization.
*/ }

function CreateOrganization() {
  const url = 'https://bridginghope.life/api/register'; 
  //const url = 'http://localhost:4433/api/create_organization';  //uncomment for local testing
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    orgName: '',
    orgType: '',
    email: '',
    phone: '',
    orgLogo: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: ''
  });

  const [serviceData, setServiceData] = useState({
    food: false,
    debtPayment: false,
    medical: false,
    clothing: false
  });

  const [errors, setErrors] = useState({
    message: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCheck = (e) => {
    setServiceData({
      ...serviceData,
      [e.target.id]: e.target.checked
    });
  };
    
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const organizationData = {
      ...formData,
      services: serviceData
    };
    try {
      await axios.post(url, organizationData);
      setShowSuccessModal(true); // Show success modal
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error registering user';
      setErrors({ message: errorMessage });
      alert("Registration Failed");
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <React.Fragment>
      <h1 className="mt-3 ms-5">Create Organization</h1>
      <div className="card col-12 col-md-10 offset-0 offset-md-1 mt-3"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <h2 className="fs-4 mb-1">Basic Info</h2>
            <div className="row">
              <div className="col">
                <label for="orgName" className="form-label mt-2">Organization name</label>
                <input id="orgName" type="text" placeholder="Organization XYZ" className="form-control" value={formData.orgName} onChange={handleChange}/>
              </div>
              <div className="col">
                <label for="orgType" className="form-label mt-2">Organization type</label>
                <select id="orgType" className="form-select" value={formData.orgType} onChange={handleChange} >
                  <option selected className="text-secondary" aria-label="select ID Type">select</option>
                  <option value="religious">Religious organization</option>
                  <option value="government">Government</option>
                  <option value="nonprofit">Nonprofit</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label for="phone" className="form-label mt-2">Phone</label>
                <input id="phone" type="tel" placeholder="(555) 555-5555" className="form-control" value={formData.phone} onChange={handleChange}/>
              </div>
              <div className="col">
                <label for="email" className="form-label mt-2">Email</label>
                <input id="email" type="email" placeholder="orgxyz@email.com" className="form-control" value={formData.email} onChange={handleChange}/>
              </div>
            </div>

            <h2 className="text-center mt-4">Current logo</h2>
            <div className="d-flex justify-content-center">
              <img src={exampleLogo} alt="Example Logo" width="128" height="128" className="rounded" />
            </div>
            <label for="orgLogo" className="form-label mt-2">Upload logo</label>
            <input id="orgLogo" className="form-control" type="file" value={formData.orgLogo} onChange={handleChange}/>

            <h2 className="fs-4 mt-4">Address</h2>
            <label for="addressLine1" className="form-label mt-2">Street address 1</label>
            <input id="addressLine1" type="text" placeholder="123 Cherry Lane" className="form-control" value={formData.addressLine1} onChange={handleChange}/>
            <label for="addressLine2" className="form-label mt-2">Street address 2</label>
            <input id="addressLine2" type="text" placeholder="Apartment 001" className="form-control" value={formData.addressLine2} onChange={handleChange}/>
            <div className="row">
              <div className="col">
                <label for="city" className="form-label mt-2">City</label>
                <input id="city" type="text" placeholder="City" className="form-control" value={formData.city} onChange={handleChange}/>
              </div>
              <div className="col">
                <label for="state" className="form-label mt-2">State</label>
                <select id="state" className="form-select" aria-label="select state" value={formData.state} onChange={handleChange}>
                  <option selected className="text-secondary">select</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="col">
                <label for="zip" className="form-label mt-2">Zip</label>
                <input id="zip" type="text" placeholder="Zip" className="form-control" value={formData.zip} onChange={handleChange}/>
              </div>
            </div>

            <h2 className="fs-4 mt-4 mb-2">Services</h2>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="food" checked={serviceData.food} onChange={handleCheck}/>
              <label className="form-check-label" for="flexCheckFood">Food</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="debtPayment" checked={serviceData.debtPayment} onChange={handleCheck}/>
              <label className="form-check-label" for="flexCheckDebtPayment">Debt payment</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="medical" checked={serviceData.medical} onChange={handleCheck}/>
              <label className="form-check-label" for="flexCheckMedical">Medical</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="clothing" checked={serviceData.clothing} onChange={handleCheck}/>
              <label className="form-check-label" for="flexCheckClothing">Clothing</label>
            </div>

            <div className="d-flex justify-content-center mt-3">
              <button type="submit" className="btn btn-primary">Create Organization!</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateOrganization;
