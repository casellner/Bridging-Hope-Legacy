//imports for images
import logo from './../BridgingHopeLogo.png';

import React from "react";
import { Link } from 'react-router-dom';


let username = 'user';
let password = '123';
const handleLogin = async () => {

    // Construct the API endpoint
    const url = 'http://localhost:3000/login';

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


const SignIn = () => {
    const [username, SetUsername] = React.useState('');
    const [password, SetPassword] = React.useState('');
    return (
        <React.Fragment>
            {/* navbar */}
            <nav className="navbar bg-dark">
                {/* logo */}
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Bridging Hope Logo" width="64" height="64" className="bg-light ms-3 rounded"/>
                </a>
            </nav>

            <body className="py-lg-3 py-md-2 bg-secondary">
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
