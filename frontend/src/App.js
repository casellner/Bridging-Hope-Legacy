//import logo from './logo.svg';
import logo from './BridgingHopeLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo}/>
        
      </header>
      <body>
        <h1>Bridging Hope</h1>
        <p>Our application is a powerful tool for nonprofits. It simplifies the process of tracking clients, ensuring that those who need assistance are reached with precision and care.</p>
      
        <h2>Key Features</h2>
        <hr></hr> 
        <ul>
          <li>Register Clients</li>
          <li>Log Visits</li>
          <li>Search Clients</li>
        </ul>

        <h2>Contact an Administrator to connect your organization to Bridging Hope</h2>
        <ul>
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
