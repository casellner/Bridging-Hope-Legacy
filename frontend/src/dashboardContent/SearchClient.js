import React from "react";

import SearchForm from "./searchResults/SearchForm";
import SearchInstructions from "./searchResults/SearchInstructions";
import ClientList from "./searchResults/ClientList";
import ClientView from "./searchResults/ClientView";

function SearchClient() {
  const [instructionsIsOpen, setInstructionsIsOpen] = React.useState(true);
  const [clientListIsOpen, setClientListIsOpen] = React.useState(false);
  const [clientInfoIsOpen, setClientInfoIsOpen] = React.useState(false);

  let clientInfo;
  let searchResults;
  
  function handleSearchClient() {
    setInstructionsIsOpen(false);
    setClientListIsOpen(true);
  }
  function handleSelectClient() {
    setClientInfoIsOpen(true);
    setClientListIsOpen(false);
  }
  function handleBackToSearch() {
    setClientInfoIsOpen(false);
    setClientListIsOpen(true);
  }

  if (clientInfoIsOpen) {
    clientInfo = <ClientView onBack={handleBackToSearch} />   
  } else {
    clientInfo = <SearchForm onSearch={handleSearchClient} />;
  }
  
  if (instructionsIsOpen) {
    searchResults = <SearchInstructions />;
  } else if (clientListIsOpen) {
    searchResults = <ClientList onSelect={handleSelectClient} />;
  } else {
    searchResults = null;
  }
  
  return (
    <React.Fragment>
      <div className="card bg-info col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
        <div className="card-body p-0">
          <div className="row"> {/* For large screens, this row has two columns: search fields and result. Results are below on smaller screens. */}
            <div className="col-lg-6 col-12">
              {clientInfo}
            </div>
            <div className="col-lg-6 col-12 bg-light rounded-end">
              {/* Results */}
              {searchResults}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchClient;
