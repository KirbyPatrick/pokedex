import React, { Component } from "react";

export default class Card extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
  };

  componentDidMount() {
    const { name, pokemonURL } = this.props;
    const pokemonIndex = pokemonURL.split("/")[
      pokemonURL.split("/").length - 2
    ];
    const imageUrl = `https://github.com/pokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    console.log("index:", pokemonURL);

    this.setState({
      name,
      pokemonIndex,
      imageUrl,
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <div className="card-header">{this.state.pokemonIndex}</div>
          <img src={this.state.imageUrl} alt="" className="card-img-top" />
          <div className="card-body">
            <p className="card-text">{this.props.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
