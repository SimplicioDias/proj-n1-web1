import React, { Children, useState } from "react";
import CardAtleta from "../CardAtleta/CardAtleta";
function Favoritos({ addFavorito }) {

    const [arrayFavoritos, setArrayFavoritos] = useState([])

    setArrayFavoritos(CardAtleta.addFavorito())

    /* const addFavorito = (player) => {
        setArrayFavoritos((prevFavoritos) => {
            if (!prevFavoritos.some((fav) => fav.id === player.id)) {
                return [...prevFavoritos, player]
            }
            return prevFavoritos
        })
    } */

    /* const handleAddFavorito = (player) => {
        setArrayFavoritos((prevFavoritos) => {
            if (!prevFavoritos.some((fav) => fav.id === player.id)) {
                return [...prevFavoritos, player];
            }
            return prevFavoritos;
        });

        // Chama a função herdada (addFavorito) se necessário
        if (addFavorito) {
            addFavorito(player);
        }
    }; */

    return (
        <div>
            <h2>Favoritos</h2>
            {arrayFavoritos.length === 0 ? (
                <p>Nenhum jogador foi adicionado aos favoritos.</p>
            ) : (
                arrayFavoritos.map((player, index) => (
                    <div key={index}>
                        <p>Nome: {player.name}</p>
                        <img src={player.photo} alt={player.name} />
                    </div>
                ))
            )}
        </div>
    );
}

export default Favoritos