import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default class Pokemon extends Component {
  state = {
    url: "",
    pokemonIndex: "",
    baseExperience: "",
    abilities: "",
  };

  async componentDidMount() {
    //pulling the pokemon index from the end of the page URL
    const { pokemonIndex } = this.props.match.params;
    console.log("index ", pokemonIndex);
    //Passing the api call the pokemonIndex value to state.
    this.setState({
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`,
    });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`)
      .then((res) => {
        const pokeData = res.data;
        const baseExperience = pokeData.base_experience;
        const abilities = pokeData.abilities[1].ability.name;
        this.setState({ baseExperience, abilities });
      });
  }

  render() {
    return (
      <div>
        <p>test......</p>
        <p>{this.state.baseExperience}</p>
        <p>{this.state.abilities}</p>
      </div>
    );
  }
}
