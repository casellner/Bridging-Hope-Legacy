//import logo from './logo.svg';
import logo from './BridgingHopeLogo.png';
import background from './fooddrive2.jpg';
//import './App.css';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <nav className="navbar bg-dark">
        {/* logo */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bridging Hope Logo" width="64" height="64" className="bg-light ms-3 rounded"/>
        </a>

        <div>
          <button className="btn btn-primary me-3">Sign In</button>
          <button className="btn btn-secondary me-3">Register</button>
        </div>
      </nav>

      <body style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
        <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
          <div className="card-header">
            <h1 className='text-center fw-bold'>Bridging Hope</h1>
            <p>Our application is a powerful tool for nonprofits. It simplifies the process of tracking clients, ensuring that those who need assistance are reached with precision and care.</p>
          </div>

          <div className="card-body">
            {/* key features */}
            <div className="bg-info mb-3">
              <h2 className="text-center">Key Features</h2>
              <hr className="border border-1 border-dark opacity-100"></hr> 
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item bg-info col-4 border-0">
                  <h3 className="fw-bold">Register Clients</h3>
                  <p>File new clients to track aid over time. Digitize records to simplify your data.</p>
                </li>
                <li className="list-group-item bg-info col-4 border-0">
                  <h3 className="fw-bold">Log Visits</h3>
                  <p>Record assistance and choose which organizations can access your records</p>
                </li>
                <li className="list-group-item bg-info col-4 border-0">
                  <h3 className="fw-bold">Search Clients</h3>
                  <p>Easily find clients so help can be delivered quickly</p>
                </li>
              </ul>
            </div>

            {/* contact an admin section */}
            <h2>Contact an Administrator to connect your organization to Bridging Hope</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h3>Ms. X</h3>
                <p>phone: </p>
                <p>email: </p>
              </li>
              <li className="list-group-item">
                <h3>Mr. Y</h3>
                <p>phone: </p>
                <p>email: </p>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
