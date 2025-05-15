import React from "react";
import SearchPlayer from "./SearchPlayer";

function a({ result }) {

    return (
        <div>
            {result && result.response && result.response[0] && (
                <div>
                    <img src={result.response[0].player.photo} alt={result.response[0].player.name} />
                    <p>{result.response[0].player.name}</p>
                </div>
            )}
        </div>
    );

}

export default a