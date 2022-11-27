import React, { useState } from "react";

const CaughtPokemon = () => {
  const [caught, setCaught] = useState(0);
  // const listPoke = [
  //   "Charizard",
  //   "Gengar",
  //   "Arcanine",
  //   "Bulbasaur",
  //   "Eevee",
  //   "Dragonite",
  //   "Squirtle",
  //   "Ninetales",
  // ];

  const [catchPoke, setCatchPoke] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const date = new Date().toLocaleDateString();

  // function handleClick() {}

  function randomPoke(event) {
    // const random = Math.floor(Math.random() * listPoke.length);
    // setCatchPoke(catchPoke.concat(listPoke[random]));pokemonNameInput;
    if (pokemonNameInput !== "") {
      setCatchPoke(catchPoke.concat(pokemonNameInput));
      setCaught(caught + 1);
      setPokemonNameInput("");
    }
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }
  return (
    <div>
      <p>
        Caught {caught} Pokemon on {date}{" "}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button
        onClick={function () {
          // handleClick();
          randomPoke();
        }}
      >
        Catch Pokemon
      </button>
      <ul>
        {catchPoke.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default CaughtPokemon;
