import React from "react";
import { Link } from 'react-router-dom';

{ /*
    Filename:    FAQ.js
    Description: This page displays frequently asked questions and their answers.
*/ }

const FAQ = () => {
  return (
    <React.Fragment>
      {/* Page title */}
      <h1 className="text-center py-3">Frequently Asked Questions</h1>

      {/* Questions and answers */}
      <div className="accordion col-10 offset-1" id="accordionFAQ">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Question 1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFAQ">
            <div className="accordion-body">
              Answer 1
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Question 2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div className="accordion-body">
              Answer 2
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <a href="/" className="d-flex align-item-center">Back to home</a>
      </div>
    </React.Fragment>
  );
};

export default FAQ;
