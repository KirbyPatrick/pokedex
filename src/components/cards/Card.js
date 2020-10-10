import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="card text-left">
            <img
              class="card-img-top img-thumbnail"
              src="https://via.placeholder.com/150x150"
              alt=""
            />
            <div class="card-body">
              <h4 class="card-title text-center">Pokemon Name</h4>
              <p class="card-text text-center">Pokemon Type</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
