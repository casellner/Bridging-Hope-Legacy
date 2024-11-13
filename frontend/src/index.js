import React from 'react';
import ReactDOM from 'react-dom/client';

// router imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import NoPage from './pages/NoPage';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPass';
import FAQ from './pages/FAQ';
import ClientHelp from './pages/ClientHelp';

import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/clienthelp" element={<ClientHelp />} />
          <Route path="*" element={<NoPage />} /> {/* 404 page */}
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
