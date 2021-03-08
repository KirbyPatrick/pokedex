import React, { Component } from "react";
import { Link } from "react-router-dom";
import loading from "../../img/loading.gif";

export default class Card extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    imageLoading: true,
  };

  componentDidMount() {
    const { name, pokemonURL } = this.props;
    const pokemonIndex = pokemonURL.split("/")[
      pokemonURL.split("/").length - 2
    ];
    const imageUrl = `https://github.com/pokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    // console.log("index:", pokemonURL);

    this.setState({
      name,
      pokemonIndex,
      imageUrl,
    });
  }

  render() {
    return (
      <div className="col-md-2 col-sm-6 mx-2 my-4">
        <Link to={`/pokemon/${this.state.pokemonIndex}`}>
          <div className="card">
            <div className="card-header">{this.state.pokemonIndex}</div>
            {this.state.imageLoading ? (
              <img
                className="card-img-top thumbnail-size rounded mx-auto d-block loading-gif-style"
                src={loading}
                alt="Loading image"
              />
            ) : null}
            <img
              onLoad={() => this.setState({ imageLoading: false })}
              src={this.state.imageUrl}
              alt=""
              className="card-img-top thumbnail-size rounded mx-auto d-block"
            />

            <div className="card-body">
              <h5 className="card-text text-center">
                {this.props.name.charAt(0).toUpperCase() +
                  this.props.name.slice(1)}
              </h5>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
