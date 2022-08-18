// import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

//
import PokemonForm from "./components/PokemonForm";
import PokemonInfo from "./components/PokemonInfo";
import { Box } from "./components/Box";
// import { flex } from "styled-system";

// original
// function App() {
//   return <div className="App">aasasasas</div>;
// }

// export default App;

export default class App extends Component {
  state = {
    pokemonName: "",
  };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  render() {
    // console.log(this.props);
    return (
      <Box
        bg="text"
        color="accent"
        p={4}
        display="flex"
        width={2} // "33vw"
        height={3}
        m="auto"
        alignItems="center"
        justifyContent="center"
      >
        <div className="App">
          {/* {this.state.loading && <h1>Загрузка</h1>}
        {pokemon && <div>{pokemon.name}</div>} */}
          <PokemonForm onSubmit={this.handleFormSubmit} />
          <PokemonInfo pokemonName={this.state.pokemonName} />
          <ToastContainer autoClose={3000} />
        </div>
      </Box>
    );
  }
}

// ErrorInfo
