import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Pokemon List</h1>
          <ul className="header">
            <li><NavLink to="/">Pokemon List</NavLink></li>
           
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;