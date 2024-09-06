//imports for routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/">
            <Landing />
          </Route>
          {/* <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
