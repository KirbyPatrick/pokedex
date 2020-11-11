import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <div className="row bg-danger">
            <div className="col-md">
              <Link to={"/"}>
                <img className="logo" src={logo} alt="" />
              </Link>
            </div>
            <Link to={"/"}>
              <div className="col-md p-5 text-center text-white">
                Pokemon Pokedex
              </div>
            </Link>

            <div className="col-md p-5 text-center text-white">
              <a href="https://github.com/KirbyPatrick/pokedex">About</a>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
