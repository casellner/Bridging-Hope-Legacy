import React from "react";
import { Link } from 'react-router-dom';


const SignIn = () => {
  return (
    <React.Fragment>
      <div className="col-12 d-flex justify-content-center align-items-center" >
        <div className="col-11 col-md-4 col-lg-3 card my-4">
          <div className="card-body">
            <div className="d-flex col-12 mt-4 justify-content-center align-items-center">
              <img src="images/BridgingHopeWord.svg" className="img-fluid" alt="logo" style={{ maxWidth: "50%" }} />
            </div>
            <form className="mt-5">
              <label className="form-label">Email</label>
              <input type="email" className="form-control mb-3" placeholder="Email" />
              <label className="form-label mt-3">Password</label>
              <input type="password" className="form-control mb-3" placeholder="Password" />
              <button type="button" className="btn btn-primary col-12 mt-3">Login</button>
              <Link to="/register" type="button" className="btn btn-secondary col-12 mt-2">Register</Link>
              <hr />
              <div className="col-12 d-flex justify-content-center align-items-center mb-4">
                <a href="" className="text-center col-12">Forgot Password</a>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center mb-3">
                <Link to="/" href="" className="text-center col-12">Go back to home</Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-body d-flex justify-content-between mx-4 pb-3">
          <ul className="list-inline mb-0 p-0">
            <li className="list-inline-item"><a href="./dashboard/extra/privacy-policy.html">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="./dashboard/extra/terms-of-service.html">Terms of Use</a></li>
          </ul>
          <div className="right-panel">
            ©<script>document.write(new Date().getFullYear())</script> Bridging Hope. All Rights Reserved.
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
    const [username, SetUsername] = React.useState('');
    const [password, SetPassword] = React.useState('');
    
    const handleLogin = async () => {
        // Construct the API endpoint
        const url = 'http://192.168.99.87:8000/signin';     //need to fix this so we don't have to keep doing this
    
        try {
            // Sending the username and password to the server
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
    
            if (!response.ok) {
                throw new Error('Login failed');
            }
    
            // Assuming the server responds with JSON data
            const data = await response.json();
            console.log('Login successful:', data);
    
            window.location.href = '/dashboard'; // Example of redirection
            
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    return (
        <React.Fragment>
            <body className="bg-secondary vh-100">
                {/* navbar */}
                <nav className="navbar bg-dark mb-3">
                    {/* logo */}
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Bridging Hope Logo" width="64" height="64" className="bg-light ms-3 rounded"/>
                    </a>
                </nav>
                
                <div className="card col-lg-6 col-md-10 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0"> {/* this card will have different widths depending on the resolution of the device */}
                    <div className="card-header">
                        <h1 className="text-center my-1">Sign In</h1>
                    </div>
                    
                    <div className="card-body p-0">
                        {/* Sign in form */}
                        <div className="bg-info rounded-bottom-1 pb-3">
                            <form className="col-8 offset-2"> { /* these columns could be adjusted for different screen sizes */ }
                                <label for="txtUsername" className="form-label mt-2">Username</label>
                                <input 
                                id="txtUsername" 
                                type="text" 
                                placeholder="johndoe" 
                                className="form-control" 
                                value={username}
                                onChange={(e) => SetUsername(e.target.value)}
                                />
                                <label for="txtPassword" className="form-label mt-2">Password</label>
                                <input 
                                id="txtPassword" 
                                type="password" 
                                className="form-control" 
                                value={password}
                                onChange={(e) => SetPassword(e.target.value)}
                                />

                                { /* Note: this is temporary */ }
                                
                                    <button 
                                    id="btnSignIn" 
                                    type="button" 
                                    class="btn btn-success mt-5 col-12"
                                    onClick={handleLogin}
                                    >Sign In</button>
                                

                                <Link to="/register">
                                    <a className="d-flex justify-content-center mt-3">Register instead</a>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </React.Fragment>
    );
}

export default SignIn;
