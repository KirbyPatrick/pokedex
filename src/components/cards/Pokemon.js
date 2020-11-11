import React, { Component } from "react";
import axios from "axios";

export default class Pokemon extends Component {
  state = {
    name: "",
    id: "",
    types: "",
    imageURL: "",
  };

  async componentDidMount() {
    //pulling the pokemon index from the end of the page URL
    const { pokemonIndex } = this.props.match.params;
    //image URL
    const imageURL = `https://github.com/pokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    //Passing the api call the pokemonIndex value to state.
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`)
      .then((res) => {
        const pokeData = res.data;
        const name = pokeData.forms[0].name;
        const id = pokeData.id;
        const types = pokeData.types[0].type.name;
        this.setState({ name, id, types, imageURL });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center boxy col-sm-12">{this.state.name}</h1>
        </div>
        <div className="row d-flex boxy justify-content-center center-text">
          <img
            className="pokemon-image-size col-12s"
            src={this.state.imageURL}
            alt=""
          />
        </div>
        <div className="row boxy">
          <h2 className="col-sm-2 text-center">#{this.state.id}</h2>
          <h2 className="col-sm-2 text-center">Types: {this.state.types}</h2>
        </div>
      </div>
    );
  }
}
