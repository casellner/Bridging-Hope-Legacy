import React from "react";

//imports for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function HouseholdAidHistory() {
  return (
    <React.Fragment>
      <h2>Household aid history</h2>
        
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Organization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Food</td>
            <td>[amount]</td>
            <td>10/26/2024</td>
            <td>Org. ABC</td>
          </tr>
          <tr>
            <td>Debt payment</td>
            <td>$500.00</td>
            <td>10/24/2024</td>
            <td>Org. XYZ</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-info rounded row d-flex justify-content-center">
        <div className="col-auto d-flex align-items-center">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
        <div className="col-auto">
          <p className="my-2">Click on an entry for more details</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HouseholdAidHistory;
