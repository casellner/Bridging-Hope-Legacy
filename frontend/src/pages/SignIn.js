//imports for images
import logo from './../BridgingHopeLogo.png';

import React from "react";
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <React.Fragment>
                <div class="col-12 d-flex justify-content-center align-items-center" >
        <div class="col-11 col-md-4 col-lg-3 card my-4">
            <div class="card-body">
                <div class="d-flex col-12 mt-4 justify-content-center align-items-center">
                    <img src="images/BridgingHopeWord.svg" class="img-fluid" alt="logo" style={{maxWidth:"50%"}} />
                </div>
                <form class="mt-5">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control mb-3" placeholder="Email" />
                    <label class="form-label mt-3">Password</label>
                    <input type="password" class="form-control mb-3" placeholder="Password" />
                    <button type="button" class="btn btn-primary col-12 mt-3">Login</button>
                    <button type="button" class="btn btn-secondary col-12 mt-2">Register</button>
                    <hr />
                    <div class="col-12 d-flex justify-content-center align-items-center mb-3">
                        <a href="" class="text-center col-12">Forgot Password</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
     
    <footer class="footer">
        <div class="footer-body d-flex justify-content-between mx-4 pb-3">
            <ul class="list-inline mb-0 p-0">
                <li class="list-inline-item"><a href="./dashboard/extra/privacy-policy.html">Privacy Policy</a></li>
                <li class="list-inline-item"><a href="./dashboard/extra/terms-of-service.html">Terms of Use</a></li>
            </ul>
            <div class="right-panel">
                ©<script>document.write(new Date().getFullYear())</script> Bridging Hope. All Rights Reserved.
            </div>
        </div>
    </footer>
        </React.Fragment>
    );
}
  
export default SignIn;
