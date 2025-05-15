import React from "react";
import SearchPlayer from "./SearchPlayer";
import "../Card.css"
function CardAtleta({ result }) {
    // for resuts : criar div p/ cada result

    //for results : criar array com n results (armazena todos os resutados neste array)

    //for player in array : colcoar as info do player na div

    //return : todas as n divs (results) na pagina
    return (
        <div>
            {result && result.response && result.response[0] && (
                <>
                    <div className="cardAtleta">
                        <img src={result.response[0].player.photo} alt={result.response[0].player.name} />
                        <p>{result.response[0].player.id}</p>
                        <p>{result.response[0].player.name}</p>
                        <p>{result.response[0].player.age}</p>
                        <p>{result.response[0].player.birth.date}, {result.response[0].player.birth.place}, {result.response[0].player.birth.country}</p>
                        <p>{result.response[0].player.nationality}</p>
                        <p>{result.response[0].player.number}</p>
                        <p>{result.response[0].player.height}</p>
                        <p>{result.response[0].player.weight}</p>
                        <p>{result.response[0].player.position}</p>
                    </div>

                    <div className="button">
                        <button onClick={() => addFavoritos()}> Adicionar aos Favoritos</button>
                    </div>

                </>
            )
            }

            {result && result.response && result.response[1] && (
                <>
                    <div className="cardAtleta">
                        <img src={result.response[1].player.photo} alt={result.response[1].player.name} />
                        <p>{result.response[1].player.id}</p>
                        <p>{result.response[1].player.name}</p>
                        <p>{result.response[1].player.age}</p>
                        <p>{result.response[1].player.birth.date}, {result.response[1].player.birth.place}, {result.response[1].player.birth.country}</p>
                        <p>{result.response[1].player.nationality}</p>
                        <p>{result.response[1].player.number}</p>
                        <p>{result.response[1].player.height}</p>
                        <p>{result.response[1].player.weight}</p>
                        <p>{result.response[1].player.position}</p>
                    </div>

                    <div className="button">
                        <button onClick={() => addFavoritos()}> Adicionar aos Favoritos</button>
                    </div>

                </>
            )
            }

            {result && result.response && result.response[2] && (
                <>

                    <div className="cardAtleta">
                        <img src={result.response[2].player.photo} alt={result.response[2].player.name} />
                        <p>{result.response[2].player.id}</p>
                        <p>{result.response[2].player.name}</p>
                        <p>{result.response[2].player.age}</p>
                        <p>{result.response[2].player.birth.date}, {result.response[2].player.birth.place}, {result.response[2].player.birth.country}</p>
                        <p>{result.response[2].player.nationality}</p>
                        <p>{result.response[2].player.number}</p>
                        <p>{result.response[2].player.height}</p>
                        <p>{result.response[2].player.weight}</p>
                        <p>{result.response[2].player.position}</p>
                    </div>

                    <div className="button">
                        <button onClick={() => addFavoritos()}> Adicionar aos Favoritos</button>
                    </div>

                </>



            )
            }
            {result && result.response && result.response[3] && (
                <>

                    <div className="cardAtleta">
                        <img src={result.response[3].player.photo} alt={result.response[3].player.name} />
                        <p>{result.response[3].player.id}</p>
                        <p>{result.response[3].player.name}</p>
                        <p>{result.response[3].player.age}</p>
                        <p>{result.response[3].player.birth.date}, {result.response[3].player.birth.place}, {result.response[3].player.birth.country}</p>
                        <p>{result.response[3].player.nationality}</p>
                        <p>{result.response[3].player.number}</p>
                        <p>{result.response[3].player.height}</p>
                        <p>{result.response[3].player.weight}</p>
                        <p>{result.response[3].player.position}</p>

                        <div className="button">
                            <button onClick={() => addFavoritos()}> Adicionar aos Favoritos</button>
                        </div>

                    </div>



                </>
            )
            }

        </div >
    );

}

function addFavoritos() {
    // fazer adicinar o cadAtleta no componente PainelFavoritos
    alert("Adicionado")
}

export default CardAtleta