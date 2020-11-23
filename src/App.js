
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar.js'
import Projects from './Projects.js'
import Contact from './Contact.js'

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </div>
      </Router>
    );
  }

}


