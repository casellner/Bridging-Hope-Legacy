import React from "react";

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
    </React.Fragment>
  );
}

export default HouseholdAidHistory;
