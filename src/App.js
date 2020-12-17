
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Home from './Home.js'

export default class App extends React.Component {

  state = {
    projects: [
      {picture: "react-logo.png",
      title: "On-Sight",
      description: "An app for climbers",
      demo_url: "",
      repo_url: ""
    },
    {picture: "react-logo.png",
      title: "Hulite",
      description: "Hulu clone",
      demo_url: "",
      repo_url: ""
    },
    {picture: "react-logo.png",
      title: "Planet Pursuit",
      description: "A Star Wars game",
      demo_url: "",
      repo_url: ""
    }
    ]
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar className="header-color"/>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/projects">
            <Projects projects={this.state.projects}/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </div>
      </Router>
    );
  }

}


