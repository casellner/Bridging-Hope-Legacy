import React, { useState }from "react";
import { useNavigate, Link } from 'react-router-dom';
{ /*
    Filename:    Address.js
    Description: This component is the third part of registering a client.
*/ }

function Address({formData, onChange, onClickBack, onClickContinue}) {
    return (
        <React.Fragment>
            <label htmlfor="addressLine1" className="form-label mt-2">Street address 1</label>
            <input id="addressLine1" type="text" placeholder="123 Cherry Lane" className="form-control" value={formData.addressLine1} onChange={ onChange } />
            <label htmlfor="addressLine2" className="form-label mt-2">Street address 2</label>
            <input id="addressLine2" type="text" placeholder="Apartment 001" className="form-control" value={formData.addressLine2} onChange={ onChange } />
            <div className="row">
                <div className="col">
                    <label htmlfor="city" className="form-label mt-2">City</label>
                    <input id="city" type="text" placeholder="Cookeville" className="form-control" value={formData.city} onChange={ onChange }/>
                </div>
                <div className="col">
                    <label htmlfor="state" className="form-label mt-2">State</label>
                    <select id="state" className="form-select" aria-label="select state" value={formData.state} onChange={ onChange }>
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
                <label htmlfor="zip" className="form-label mt-2">Zip</label>
                <input id="zip" type="text" placeholder="38501" className="form-control" value={formData.zip} onChange={ onChange }/>
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-warning mt-4" onClick={onClickBack}>Back</button>
                <button type="button" className="btn btn-success mt-4" onClick={onClickContinue}>Register</button>
            </div>
        </React.Fragment>
    );
}

export default Address;
