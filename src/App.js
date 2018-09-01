import React, {Component} from 'react';
import './App.css';
import {Grid} from 'semantic-ui-react'
import Profile from "./components/profile"
import NavBar from "./components/NavBar"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Shoes from "./pages/Shoes"
import Clothes from "./pages/Clothes"
import About from "./pages/About"

export default class App extends Component {
  render() {
    return (
<Router>
  <div className="App">

      <header className="App-header">
        <h1 className="App-title">BLACKMARKET.CO.ID</h1>
        <NavBar className="Nav-Bar"/>
      </header>
      <br/>
      <div className="Main-content">
        <Route exact path="/" component={Home}/>
        <Route  path="/Shoes" component={Shoes}/>
        <Route  path="/Clothes" component={Clothes}/>
        <Route  path="/About" component={About}/>
      </div>
  </div>
</Router>

  )
  }
}
