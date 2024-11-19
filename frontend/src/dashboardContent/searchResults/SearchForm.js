// Filename:    SearchForm.js
// Description: This component is a form of fields a volunteer can search clients by.
//              (First name, Last name, Date of Birth, Phone, ID type, ID number, Email)

import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    DOB: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSearchClick = () => {
    onSearch(formData);
    console.log(formData); //DEBUG
  };

  return (
    <React.Fragment>
      {/* Search fields */}
      <form className="pb-3 rounded"> { /* these columns could be adjusted for different screen sizes */}
        <div className="row mx-3">
          <div className="col">
            <label for="txtFirstName" className="form-label mt-2">First name</label>
            <input id="txtFirstName" type="text" placeholder="John" className="form-control" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="col">
            <label for="txtLastName" className="form-label mt-2">Last name</label>
            <input id="txtLastName" type="text" placeholder="Doe" className="form-control" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>
        <div className="row mx-3">
          <div className="col">
            <label for="txtDOB" className="form-label mt-2">Date of Birth</label>
            <input id="txtDOB" type="date" className="form-control" value={formData.DOB} onChange={handleChange} />
          </div>
          <div className="col">
            <label for="txtPhone" className="form-label mt-2">Phone</label>
            <input id="txtPhone" type="tel" placeholder="(555) 123-4567" className="form-control" value={formData.phone} onChange={handleChange} />
          </div>
        </div>

        { /* ID section. This may need to be changed drastically */}
        <div className="row mx-3">
          <div className="col">
            <label for="txtIDType" className="form-label mt-2">ID type</label>
            <select id="txtIDType" className="form-select">
              <option selected className="text-secondary" aria-label="select ID Type">select</option>
              <option value="1">Driver's license</option>
              <option value="2">Other</option>
            </select>
          </div>
          <div className="col">
            <label for="txtIDNumber" className="form-label mt-2">ID number</label>
            <input id="txtIDNumber" type="text" className="form-control" />
          </div>
        </div>

        { /* Email and Search Button */}
        <div className="row mb-3 mx-3">
          <div className="col">
            <label for="txtEmail" className="form-label mt-2">Email</label>
            <input id="txtEmail" type="email" placeholder="jdoe@email.com" className="form-control" value={formData.email} onChange={handleChange} />
          </div>
          <div className="col align-self-end">
            <button type="button" className="btn btn-success" onClick={handleSearchClick}>Search</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default SearchForm;