import React from 'react';

function SearchForm({onSearch}) {
    return (
        <React.Fragment>
            {/* Search fields */}
            <form className="col-lg-10 col-12 offset-lg-1"> { /* these columns could be adjusted for different screen sizes */}
                <div className="row">
                    <div className="col">
                        <label for="txtFirstName" className="form-label mt-2">First name</label>
                        <input id="txtFirstName" type="text" placeholder="John" className="form-control" />
                    </div>
                    <div className="col">
                        <label for="txtLastName" className="form-label mt-2">Last name</label>
                        <input id="txtLastName" type="text" placeholder="Doe" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label for="txtDOB" className="form-label mt-2">Date of Birth</label>
                        <input id="txtDOB" type="date" className="form-control" />
                    </div>
                    <div className="col">
                        <label for="txtPhone" className="form-label mt-2">Phone</label>
                        <input id="txtPhone" type="tel" placeholder="(555) 123-4567" className="form-control" />
                    </div>
                </div>

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

                { /* Email and Search Button */}
                <label for="txtEmail" className="form-label mt-2">Email</label>
                <div className="row mb-3">
                    <div className="col">
                        <input id="txtEmail" type="email" placeholder="jdoe@email.com" className="form-control" />
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-success" onClick={onSearch}>Search</button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}

export default SearchForm;