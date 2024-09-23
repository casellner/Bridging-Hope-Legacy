import React from "react";

import SearchForm from "./searchResults/SearchForm";
import SearchInstructions from "./searchResults/SearchInstructions";
import ClientList from "./searchResults/ClientList";

function SearchClient() {
  const [instructionsIsOpen, setInstructionsIsOpen] = React.useState(true);
  const [clientInfoIsOpen, setClientInfoIsOpen] = React.useState(true);

  let clientInfo;
  let searchResults;
  
  function handleSearchClient() {
    setInstructionsIsOpen(false);
  }

  if (clientInfoIsOpen) {
    clientInfo = <SearchForm onSearch={handleSearchClient} />;
  } else {
    clientInfo = <h1>Test state 2</h1>
  }
  
  if (instructionsIsOpen) {
    searchResults = <SearchInstructions />;
  } else {
    searchResults = <ClientList />;
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
