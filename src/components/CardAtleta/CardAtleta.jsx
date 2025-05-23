import React from "react";
import "./CardAtleta.css";

function CardAtleta({ player, onAddFavorito, showAddButton = true }) {
  const birth = player.birth;
  let datePlace;

  if (birth?.date && birth?.place) {
    const date = new Date(birth.date).toLocaleDateString("pt-BR");
    const place = birth.place;
    datePlace = `${date}, ${place}`;
  } else if (birth?.date) {
    const date = new Date(birth.date).toLocaleDateString("pt-BR");
    datePlace = `${date}`;
  } else if (birth?.place) {
    const place = birth.place;
    datePlace = `${place}`;
  } else {
    datePlace = "Desconhecido";
  }

  return (
    <div className="cardAtleta" id={`cardAtleta${player.id}`}>
      <img src={player.photo} alt={player.name} />
      <div className="flex-col">
        <p>Nome: {player.name}</p>
        <p>Idade: {player.age}</p>
        <p>Data de Nascimento: {datePlace}</p>
        <p>Nacionalidade: {player.nationality ?? "desconhecido"}</p>
        {player.number && <p>Camisa: {player.number}</p>}
        {player.height && <p>Altura: {player.height}</p>}
        {player.weight && <p>Peso: {player.weight}</p>}
        {player.position && <p>Posição: {player.position}</p>}
      </div>
      {showAddButton && onAddFavorito && (
        <div className="bttCard">
          <button className="btt" onClick={() => onAddFavorito(player)}>
            Adicionar aos Favoritos
          </button>
        </div>
      )}
    </div>
  );
}

export default CardAtleta;