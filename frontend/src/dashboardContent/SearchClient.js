// Filename:    SearchClient.js
// Description: This component renders the components in /searchResults.

import React, { useState }  from "react";
import axios from "axios";
import SearchForm from "./searchResults/SearchForm";
import SearchInstructions from "./searchResults/SearchInstructions";
import ClientList from "./searchResults/ClientList";
import ClientView from "./searchResults/ClientView";
import HouseholdAidHistory from "./searchResults/HouseholdAidHistory";

function SearchClient() {
  const [instructionsIsOpen, setInstructionsIsOpen] = React.useState(true);
  const [clientInfoIsOpen, setClientInfoIsOpen] = React.useState(false);
  const [clients, setClients] = React.useState([]);
  const [selectedClient, setSelectedClient] = React.useState(null);

  let left;
  let right;
  
  async function handleSearchClient(searchParams) {
    //implement session ID later
    //Retrieve the sessionID
    //const sessionID = sessionStorage.getItem('sessionID');

    //if (!sessionID) {
    //  alert("SessionID is required, please log in again.");
    //  return;
    //}
    //const url = 'https://bridginghope.life/api/clientSearch';
    //const url = process.env.REACT_APP_URL + '/api/clientSearch?sessionID=${sessionID}';
    const url = process.env.REACT_APP_URL + '/api/clientSearch';

    setInstructionsIsOpen(false);

    console.log("Searching for clients with params", searchParams); //DEBUG

    try {
      const response = await axios.get(url, {
        params: searchParams
      });
      setClients(response.data.clients);
      console.log("Clients found:", response.data.clients); //DEBUG
    } catch (error) {
      console.error("Error fetching clients", error);
    }
  }

  function handleSelectClient(client) {
    setSelectedClient(client);
    setClientInfoIsOpen(true);
  }
  function handleBackToSearch() {
    setClientInfoIsOpen(false);
    setSelectedClient(null);
  }

  if (instructionsIsOpen) {
    left = <SearchForm onSearch={handleSearchClient} />;
    right = <SearchInstructions />;
  } else if (clientInfoIsOpen) {
    left = <ClientView client={selectedClient} onBack={handleBackToSearch} /> 
    right = <HouseholdAidHistory client={selectedClient}/>;
  } else {
    left = <SearchForm onSearch={handleSearchClient} />;
    right = <ClientList clients={clients} onSelect={handleSelectClient} />;
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
