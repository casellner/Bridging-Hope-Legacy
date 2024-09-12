import React from "react";

function BasicInfo() {
    return (
        <React.Fragment>
            <label for="txtDateOfBirth" className="form-label mt-2">Date of birth</label>
            <input id="txtDateOfBirth" type="date" className="form-control" />
            <label for="txtPhone" className="form-label mt-2">Phone number</label>
            <input id="txtPhone" type="tel" className="form-control" />
            <label for="imgProfilePic" className="form-label mt-2">Profile picture</label>
            <input id="imgProfilePic" class="form-control" type="file" />
            
            { /* ID section. This may need to be changed drasticallys */}
            <label for="txtIDType" className="form-label mt-2">ID type</label>
            <select id="txtIDType" className="form-select">
            <option selected className="text-secondary" aria-label="select ID Type">select</option>
                <option value="1">Driver's license</option>
                <option value="2">Other</option>
            </select>
            <label for="txtIDNumber" className="form-label mt-2">ID number</label>
            <input id="txtIDNumber" type="text" className="form-control" />
        </React.Fragment>
    );
}

export default BasicInfo;
