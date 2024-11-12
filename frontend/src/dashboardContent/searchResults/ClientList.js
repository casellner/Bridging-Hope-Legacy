import React from "react";

{ /*
  Filename:    ClientList.js
  Description: This component renders a list of users returned after searching.
*/ }

function ClientList({ clients, onSelect }) {
  return (
    <React.Fragment>
      <ul className="list-group">
        {clients.map((client, index) => (
          <li key={client.id} className="list-group-item">
            <div className="row">
              <div className="col-2">
                <img src={client.profilePic || "defaultProfilePic.jpg"} alt="profile picture" style={{width:"64px", height:"64px", 'object-fit': "cover"}} className="rounded-circle" />
              </div>
              <div className="col-10 row d-flex align-items-center">
                <p className="col-4">{client.firstName}</p>
                <p className="col-5">{client.lastName}</p>
                <button type="button" className="col-3 btn btn-primary" onClick={() => onSelect(client)}>Select</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ClientList;