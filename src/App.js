// import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

// original
// function App() {
//   return <div className="App">aasasasas</div>;
// }

// export default App;

export default class App extends Component {
  state = { pokemon: null, loading: false };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((result) => result.json())
      .then((pokemon) => this.setState({ pokemon }))
      .finally(this.setState({ loading: false }));
  }
  render() {
    const pokemon = this.state.pokemon;
    return (
      <div className="App">
        {this.state.loading && <h1>Загрузка</h1>}
        {pokemon && <div>{pokemon.name}</div>}
      </div>
    );
  }
}
