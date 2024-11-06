import React, { useEffect } from "react";

{ /*
    Filename:    FAQ.js
    Description: This page displays frequently asked questions and their answers.
*/ }

const FAQ = () => {
  useEffect(() => { // Code to run only on first page load
    window.scrollTo(0, 0); // scroll to top of page
  }, []);

  let newDate = new Date();
  let year = newDate.getFullYear();

  return (
    <React.Fragment>
      {/* Page title */}
      <div className="d-flex justify-content-center mt-3">
        <img src="./images/BridgingHopeNoWord.svg" className="img-fluid" alt="logo" style={{maxHeight: "64px"}} />
      </div>
      <div className="d-flex justify-content-center my-3 align-items-center">
        <img src="./images/corporate_people/box.png" className="img-fluid mx-2" style={{maxHeight:"75px", transform:"rotate(-5deg)"}}></img>
        <img src="./images/corporate_people/waving.png" className="img-fluid mx-2" style={{maxHeight:"75px"}}></img>
        <h1 className="text-center pt-1 pb-3">Frequently Asked Questions</h1>
        <img src="./images/corporate_people/feeding_dog.png" className="img-fluid mx-2" style={{maxHeight:"75px"}}></img>
        <img src="./images/corporate_people/box2.png" className="img-fluid mx-2" style={{maxHeight:"75px", transform:"rotate(5deg"}}></img>
      </div>

      {/* Attribution for images. Note that it is aligned with the accordion below. */}
      <p className="col-10 offset-1 text-end">Designed by <a href="https://www.freepik.com">Freepik</a></p>

      {/* Questions and answers */}
      <div className="accordion col-10 offset-1" id="accordionFAQ">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <span className="fw-bold">What is Bridging Hope?</span>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFAQ">
            <div className="accordion-body">
              <span>Bridging Hope is a non-profit organization that connects other non-profits with resources and volunteers. Our application has the features to help you better serve your mission. Manage volunteer credentials and availability, resource and asset tracking, visibility into client needs and services, centrally communicate with other area non-profits, and advanced analytics for resource planning.</span>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <span className="fw-bold">I need help. How can Bridging Hope assist me?</span>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div className="accordion-body">
              Bridging Hope can help you by connecting you with resources and volunteers from other non-profits. We can help you manage volunteer credentials and availability, resource and asset tracking, visibility into client needs and services, centrally communicate with other area non-profits, and provide advanced analytics for resource planning.  
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <span className="fw-bold">Question 3</span>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div className="accordion-body">
              Answer 3
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <span className="fw-bold">Question 4</span>
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div className="accordion-body">
              Answer 4
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <span className="fw-bold">Question 5</span>
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div className="accordion-body">
              Answer 5
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <a href="/" className="d-flex align-item-center">Back to home</a>
      </div>

      {/* footer */}
      <footer className="footer mt-5">
        <div className="footer-body d-flex justify-content-between mx-4 pb-3">
          <ul className="list-inline mb-0 p-0">
            <li className="list-inline-item"><a href="./dashboard/extra/privacy-policy.html">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="./dashboard/extra/terms-of-service.html">Terms of Use</a></li>
          </ul>
          <div className="right-panel">
            <p>© {year} Bridging Hope. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FAQ;
