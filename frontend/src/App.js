//import logo from './logo.svg';
import logo from './BridgingHopeLogo.png';
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

      <body>
        <h1 className='text-center'>Bridging Hope</h1>
        <p>Our application is a powerful tool for nonprofits. It simplifies the process of tracking clients, ensuring that those who need assistance are reached with precision and care.</p>
      
        <h2>Key Features</h2>
        <hr></hr> 
        <ul>
          <li>Register Clients</li>
          <li>Log Visits</li>
          <li>Search Clients</li>
        </ul>

        <h2>Contact an Administrator to connect your organization to Bridging Hope</h2>
        <ul className="list-group list-group-flush">
          <li>
            <p>Mrs. X</p>
          </li>
          <li>
            <p>Mr. Y</p>
          </li>
        </ul>
      </body>
    </div>
  );
}

export default App;
