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
        const height = pokeData.height / 3;
        const weight = pokeData.weight / 4.536;
        const moves = pokeData.moves;
        const stats = pokeData.stats;
        this.setState({
          name,
          id,
          types,
          imageURL,
          height,
          weight,
          moves,
          stats,
        });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center boxy col-sm-12">
            {this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}
          </h1>
        </div>
        <div className="row d-flex boxy justify-content-center center-text">
          <img
            className="pokemon-image-size col-12s"
            src={this.state.imageURL}
            alt=""
          />
        </div>
        <div className="row  d-flex justify-content-around">
          <h2 className="col-sm-3  text-center boxy">ID# {this.state.id}</h2>
          <h2 className="col-sm-3 text-center boxy">
            Types: {this.state.types}
          </h2>
          <h2 className="col-sm-3 text-center boxy">
            Height: {Math.round(this.state.height * 100) / 100} feet
          </h2>
          <h2 className="col-sm-3 text-center boxy">
            Weight: {Math.round(this.state.weight)} lbs
          </h2>
        </div>
        <h1>Stats</h1>
        <h1> </h1>
      </div>
    );
  }
}
