import React from "react"
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"; //importing react router dom
//importing other components
import Home from "./Home";
import Login from "./Login";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
