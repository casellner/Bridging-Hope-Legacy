import React from "react";

{ /*
    Filename:    Identification.js
    Description: This component is the second part of registering a client.
*/ }

function BasicInfo({onClickBack, onClickContinue}) {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <label for="txtDateOfBirth" className="form-label mt-2">Date of birth</label>
                    <input id="txtDateOfBirth" type="date" className="form-control" />
                </div>
                <div className="col">
                    <label for="txtPhone" className="form-label mt-2">Phone number</label>
                    <input id="txtPhone" type="tel" className="form-control" placeholder="(555) 123-4567" />
                </div>
            </div>
            <label for="imgProfilePic" className="form-label mt-2">Profile picture</label>
            <input id="imgProfilePic" class="form-control" type="file" />
            
            { /* ID section. This may need to be changed drastically */}
            <div className="row">
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

            { /* Continue and Back buttons */}
            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-warning mt-4" onClick={onClickBack}>Back</button>
                <button type="button" className="btn btn-primary mt-4" onClick={onClickContinue}>Continue</button>
            </div>
        </React.Fragment>
    );
}

export default BasicInfo;
