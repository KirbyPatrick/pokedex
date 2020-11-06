import Axios from "axios";
import React, { Component } from "react";

export default class Card extends Component {
  state = {
    name: "",
    image: "",
    url: "",
    pokemonData: "",
    pokemonIndex: "",
  };

  async componentDidMount() {
    const { name, pokemonURL } = this.props;
    this.setState({ name: name, url: pokemonURL });
    const res = await Axios.get(this.state.url);
    this.setState({ pokemonURL: res });
    const pokemonIndex = pokemonURL.split("/")[
      pokemonURL.split("/").length - 2
    ];
    console.log(pokemonIndex);
    this.setState({ pokemonIndex: pokemonIndex });
  }

  render() {
    //props
    //set pokemon image size
    const imageSize = {
      height: "250px",
      width: "250px",
    };
    return (
      <div className="col-xl-2 col-lg-4 mx-4 mt-4">
        <img
          className="card-img-top img-thumbnail rounded mx-auto d-block"
          src="https://via.placeholder.com/150x150"
          alt="pokemon"
          style={imageSize}
        />
        <div className="card-body">
          <h4 className="card-title text-center text-capitalize">
            {this.state.name}
          </h4>
          <p className="card-text text-center">{this.state.url}</p>
          <p>{this.state.pokemonIndex}</p>
        </div>
      </div>
    );
  }
}
