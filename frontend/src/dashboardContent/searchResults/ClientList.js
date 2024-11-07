import React, { useState, useEffect} from "react";
import axios from "axios";

{ /*
  Filename:    ClientList.js
  Description: This component renders a list of users returned after searching.
*/ }

function ClientList({onSelect}) {
  //Sets the array of clients, firstName, lastName, and error to initial values
  const [clients, setClients] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); 
  const [error, setError] = useState(null);

  //Fetches the clients from the database
  const fetchClients = async () => {
    try {
      setError(null); //Clears the error
      const { data } = await axios.get("/api/clientSearch", { 
        params: { firstName, lastName } 
      });
      setClients(data.client); //Sets the clients to the data received
    } catch (error) {
      console.error("Error fetching clients", error);
      setError("Error fetching clients");
    }
  };

  //Handles the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchClients();
  };

  //Returns the clientList
  return (
    //Allows us to return multiple elements
    <React.Fragment>
      //Allows the user to enter criteia
      <form onSubmit={handleSearch} className="mb-3">
        //First name input
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="form-control mb-2"
        />
        //last name input
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="form-control mb-2"
          />
          //Search button
          <button type="submit" className="btn btn-primary">Search</button>
      </form>

      //Displays an error message if there is an error
      {error && <p className="text-danger">{error}</p>}

      //Rednering the list of clients
      <ul className="list-group">
        {clients.map((client, index) => (
          <li key={index} className="list-group-item">
            <div className="row">
              <div className="col-2">
                //Displays the profile picture
                <img 
                  src={client.profilePic || "defaultProfilePic.jpg"}
                  alt="profile picture"
                  style={{width:"64px", height:"64px", 'object-fit': "cover"}} 
                  className="rounded-circle" 
                />
              </div>
              <div className="col-10 row d-flex align-items-center">
                //Client details and select button
                <p className="col-4">{client.firstName}</p>
                <p className="col-5">{client.lastName}</p>
                <button 
                  type="button" 
                  className="col-3 btn btn-primary" 
                  onClick={() => onSelect(client)}
                >
                  Select
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ClientList;