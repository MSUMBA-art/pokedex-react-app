/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Logo = (props) => {
  //const appName = "Alexander's Pokedex";
  //console.log(props);

  return (
    <header>
      <h1>{props.appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
    </header>
  );
};

export default Logo;