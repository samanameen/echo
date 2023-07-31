import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./component/About";
import Form from "./component/Form";
import Contact from "./component/Contact";
import Services from "./component/Services";
import Movies from "./component/Movies";
import Empdetails from "./component/Empdetails";
import Test from "./component/Test";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="">
                <h3> MOVIE NIGHT </h3>
              </Link>
            </li>
            <li>
              <Link to="/movies">MOVIES</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
          </ul>

          <Routes>
            <Route exact path="/"></Route>
            <Route exact path="/movies" element={<Movies />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/form" element={<Form />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route exact path="/empdetails/:id/:name" element={<Empdetails />}></Route>
            <Route exact path="/empdetails/:id" element={<Empdetails />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
