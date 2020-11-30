import React, { Component } from "react";
import axios from "axios";

export default class Pokemon extends Component {
  state = {
    name: "",
    id: "",
    types: "",
    imageURL: "",
    moves: "",
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      specialAttack: "",
      specialDefense: "",
    },
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
        const moves = pokeData.moves[0].move.name;
        const stats = pokeData.stats;

        let { hp, attack, defense, speed, specialAttack, specialDefense } = "";

        pokeData.stats.map((stat) => {
          switch (stat.stat.name) {
            case "hp":
              hp = stat["base_stat"];
              break;
            case "attack":
              attack = stat["base_stat"];
              break;
            case "defense":
              defense = stat["base_stat"];
              break;
            case "speed":
              speed = stat["base_stat"];
              break;
            case "specialAttack":
              specialAttack = stat["base_stat"];
              break;
            case "specialDefense":
              specialDefense = stat["base_stat"];
              break;
          }
        });

        this.setState({
          name,
          id,
          types,
          imageURL,
          height,
          weight,
          moves,
          stats: {
            hp,
            attack,
            defense,
            speed,
            specialAttack,
            specialDefense,
          },
        });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center col-sm-12">
            {this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}
          </h1>
        </div>
        <div className="row d-flex justify-content-center center-text">
          <img
            className="pokemon-image-size col-12s"
            src={this.state.imageURL}
            alt=""
          />
        </div>
        <div className="row  d-flex justify-content-around">
          <h2 className="col-sm-3  text-center">ID# {this.state.id}</h2>
          <h2 className="col-sm-3 text-center">Types: {this.state.types}</h2>
          <h2 className="col-sm-3 text-center">
            Height: {Math.round(this.state.height * 100) / 100} feet
          </h2>
          <h2 className="col-sm-3 text-center">
            Weight: {Math.round(this.state.weight)} lbs
          </h2>
        </div>

        {/* Stats Table */}
        <table class="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Stat</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">HP</th>
              <td>{this.state.stats.hp}</td>
            </tr>
            <tr>
              <th scope="row">Attack</th>
              <td>{this.state.stats.attack}</td>
            </tr>
            <tr>
              <th scope="row">Defense</th>
              <td>{this.state.stats.defense}</td>
            </tr>
            <tr>
              <th scope="row">speed</th>
              <td>{this.state.stats.speed}</td>
            </tr>
            <tr>
              <th scope="row">specialAttack</th>
              <td>{this.state.stats.specialAttack}</td>
            </tr>
            <tr>
              <th scope="row">specialDefense</th>
              <td>{this.state.stats.specialDefense}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
