import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
  state = {
    loading: true,
    pokemon: null,
    testing: null,
  };

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const pokemon = await response.json();
    this.setState({ loading: false });
    this.setState({ pokemon: pokemon });
    this.setState({ testing: pokemon.results[0].name });
    // console.log("pokemon: ", pokemon);
    console.log("test: ", pokemon.results[0].name);
  }

  render() {
    console.log("this: ", this.state);
    return (
      <React.Fragment>
        {/* {this.state.loading ? <p>loading...</p> : <p>test</p>} */}

        {/* <h1>{pokemon.results[0].name}</h1> */}
        <h1> {this.state.testing} </h1>
      </React.Fragment>
    );
  }
}
