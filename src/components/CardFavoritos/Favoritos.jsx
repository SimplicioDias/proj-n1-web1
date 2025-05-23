import React from "react";
import CardAtleta from "../CardAtleta/CardAtleta.jsx";

function Favoritos({ favoritos, onRemoveFavorito }) {
  return (
    <div className="favoritos-container">
      <h2>Favoritos</h2>
      {favoritos.map((player) => (
        <div key={player.id}>
          <CardAtleta player={player} showAddButton={false} />
          <button 
            onClick={() => onRemoveFavorito(player.id)}
            className="remove-button"
          >
            ❌ Remover
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favoritos;