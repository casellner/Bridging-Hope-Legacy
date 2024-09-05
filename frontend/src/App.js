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
        <div className="card col-6 offset-3">
          <div className="card-header">
            <h1 className='text-center'>Bridging Hope</h1>
            <p>Our application is a powerful tool for nonprofits. It simplifies the process of tracking clients, ensuring that those who need assistance are reached with precision and care.</p>
          </div>

          <div className="card-body">
            {/* key features */}
            <div className="bg-info">
              <h2 className="text-center">Key Features</h2>
              <hr></hr> 
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item">Register Clients</li>
                <li className="list-group-item">Log Visits</li>
                <li className="list-group-item">Search Clients</li>
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
                <h4>Mr. Y</h4>
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
