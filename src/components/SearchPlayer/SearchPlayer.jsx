import React, { useState } from "react";
import "./SearchPlayer.css";

function SearchPlayer({ onSearch }) {
  const [namePlayer, setNamePlayer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (namePlayer.trim()) {
      onSearch(namePlayer);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Digite o nome do jogador"
        value={namePlayer}
        onChange={(e) => setNamePlayer(e.target.value)}
        className="search-input"
        required
      />
      <button type="submit" className="search-button">
        Buscar
      </button>
    </form>
  );
}

export default SearchPlayer;