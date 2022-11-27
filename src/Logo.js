import React from "react";

export default function Logo(props) {
//   const logWhenClicked = () => {
//     console.log("Image Pokemon");
//   };
  return (
    <header>
      <h1> Welcome to the {props.appName} Pokedex </h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokemon Browny"
        onClick={props.handleClick}
      />
    </header>
  );
}
