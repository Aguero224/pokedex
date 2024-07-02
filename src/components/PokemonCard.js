import React, { useState, useEffect } from 'react';
import './PokemonCard.css';

const PokemonCard = ({ name }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
      });
  }, [name]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { sprites, base_experience, weight, height } = pokemonData;

  return (
    <div className="pokemon-card">
      <img src={sprites.front_default} alt={name} />
      <h3>{name}</h3>
      <p><strong>Base Experience:</strong> {base_experience}</p>
      <p><strong>Weight:</strong> {weight}</p>
      <p><strong>Height:</strong> {height}</p>
    </div>
  );
};

export default PokemonCard;
