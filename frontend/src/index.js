import React from 'react';
import ReactDOM from 'react-dom/client';

// router imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import NoPage from './pages/NoPage';

import reportWebVitals from './reportWebVitals';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/blogs">
            <Blogs />
          </Route> */ }
          <Route path="*" element={<NoPage />} /> {/* 404 page */}
        </Routes>
    </BrowserRouter>
  );
}
//import App from './App';

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
