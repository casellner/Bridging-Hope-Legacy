import React from "react";

import SearchForm from "./searchResults/SearchForm";
import SearchInstructions from "./searchResults/SearchInstructions";
import ClientList from "./searchResults/ClientList";
import ClientView from "./searchResults/ClientView";
import HouseholdAidHistory from "./searchResults/HouseholdAidHistory";

function SearchClient() {
  const [instructionsIsOpen, setInstructionsIsOpen] = React.useState(true);
  const [clientInfoIsOpen, setClientInfoIsOpen] = React.useState(false);

  let left;
  let right;
  
  function handleSearchClient() {
    setInstructionsIsOpen(false);
  }
  function handleSelectClient() {
    setClientInfoIsOpen(true);
  }
  function handleBackToSearch() {
    setClientInfoIsOpen(false);
  }

  if (instructionsIsOpen) {
    left = <SearchForm onSearch={handleSearchClient} />;
    right = <SearchInstructions />;
  } else if (clientInfoIsOpen) {
    left = <ClientView onBack={handleBackToSearch} /> 
    right = <HouseholdAidHistory />;
  } else {
    left = <SearchForm onSearch={handleSearchClient} />;
    right = <ClientList onSelect={handleSelectClient} />;
  }
  
  return (
    <React.Fragment>
      <div className="card col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1 offset-sm-0 mt-3"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-body p-0">
          <div className="row"> {/* For large screens, this row has two columns: search fields and result. Results are below on smaller screens. */}
            <div className="col-lg-6 col-12">
              { /* Left column of screen */ }
              {left}
            </div>
            <div className="col-lg-6 col-12 bg-light rounded-end">
              {/* Right column of screen */}
              {right}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchClient;
