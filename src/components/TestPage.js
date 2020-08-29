import React, { Component } from "react";

export default class TestPage extends Component {
  state = {
    loading: true,
    name: null,
    height: null,
    image: null,
    moves: null,
  };

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/25";
    const response = await fetch(url);
    const data = await response.json();

    // adding api data to state
    this.setState({ name: data.forms[0].name, loading: false });
    this.setState({ height: data.height });
    this.setState({ image: data.sprites.front_default });
    this.setState({ moves: data.moves });

    console.log(data);
    console.log("name: ", data.forms[0].name);
    console.log("moves: ", data.moves);
    console.log("imageURL: ", data.sprites.front_default);
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <p>loading...</p>
        ) : (
          <div>
            <h1> {this.state.name}</h1>
            <img src={this.state.image} alt="pikachu" />
            <p>Height: {this.state.height}</p>
          </div>
        )}
      </div>
    );
  }
}
