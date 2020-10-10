import React, { Component } from "react";
import logo from "../img/logo.png";

export default class Header extends Component {
  render() {
    return (
      // <div>
      //   <img src={logo} alt="" />
      // </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    );
  }
}
