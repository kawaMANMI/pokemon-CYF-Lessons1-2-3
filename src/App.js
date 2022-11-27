// import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import PokemonCity from "./PokemonCity";
import PokemonMovesSelector from "./PokemonMovesSelector";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  const favouritePoke = "Sonic";
  const abilities = ["Anticipation", "Adaptability", "Run-Away", "Strong"];
  const appName = "CYFs";

  const logWhenClicked = () => {
    console.log("Image Pokemon");
  };

  return (
    <div className="appBody">
      <Logo appName={appName} handleClick={logWhenClicked}/>
      <BestPokemon favouritePoke={favouritePoke} abilities={abilities} />

      <CaughtPokemon />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
