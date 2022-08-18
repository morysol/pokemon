import { Component } from "react";
//
import { ErrorInfo } from "./ErrorInfo/ErrorInfo";
import { PokemonDataView } from "./PokemonDataView";
import { PokemonPendingView } from "./PokemonPendingView";
import { fetchPokemon } from "../services/pokemon-api";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: "idle", // idle, pending, resolved, rejected
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      //
      this.setState({ status: "pending" });

      fetchPokemon(this.props.pokemonName)
        .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

    if (status === "idle") {
      return <div>Enter name</div>;
    }

    if (status === "pending") {
      return <PokemonPendingView />;
    }

    if (status === "rejected") {
      return <ErrorInfo errMess={error.message} />;
    }

    if (status === "resolved") {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
