import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
 
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
            <Route path="/detail/:id" component={Detail}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;