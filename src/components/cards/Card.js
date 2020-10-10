import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const imageSize = {
      height: "150px",
      width: "150px",
    };
    return (
      <div class="col-lg-3 col-md-4 card text-left m-4">
        <img
          class="card-img-top img-thumbnail rounded mx-auto d-block"
          src="https://via.placeholder.com/150x150"
          alt="Image of Pokemon Name"
          style={imageSize}
        />
        <div class="card-body">
          <h4 class="card-title text-center">Pokemon Name</h4>
          <p class="card-text text-center">Pokemon Type</p>
        </div>
      </div>
    );
  }
}
