import React, { Component } from "react";
import logo from "../../img/logo.png";

export default class Header extends Component {
  render() {
    return (
      <div class="container-fluid boxy">
        <div class="row">
          <div className="col-md">
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="col-md p-5 text-center">Pokemon Pokedex</div>
          <div className="col-md p-5 text-center">About</div>
        </div>
      </div>
    );
  }
}
