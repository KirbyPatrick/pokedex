import React, { Component } from "react";
import logo from "../../img/logo.png";

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-danger">
          <div className="col-md">
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="col-md p-5 text-center text-white">
            Pokemon Pokedex
          </div>
          <div className="col-md p-5 text-center text-white">About</div>
        </div>
      </div>
    );
  }
}
