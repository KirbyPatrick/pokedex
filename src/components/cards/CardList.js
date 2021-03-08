import React, { Component } from "react";
import axios from "axios";
// Import Componnents
import Card from "./Card";

export default class CardList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon?limit=50",
    pokemon: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    console.log("state.pokemon.results: ", this.state.pokemon);
    return (
      <React.Fragment>
        <input type="text" placeholder="Find Pokemon..." />
        {this.state.pokemon ? (
          <div className="row d-flex justify-content-center">
            {this.state.pokemon.map((pokemon) => (
              <Card
                key={pokemon.name}
                name={pokemon.name}
                pokemonURL={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>loading....</h1>
        )}
      </React.Fragment>
    );
  }
}
