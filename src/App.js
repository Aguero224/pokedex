import React from 'react';
import './App.css';
import PokemonGrid from './components/PokemonGrid';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Pokédex</h1>
      </header>
      <div className="container">
        <div className="pokedex">
          <PokemonGrid />
        </div>
      </div>
      <footer className="footer">
        <p>Roberto Carlos Aguero Calleja</p>
        <p>© 2024 Pokémon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
