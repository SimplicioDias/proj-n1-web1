import React, { Children, useState } from "react"
import CardAtleta from "../CardAtleta/CardAtleta"
function Favoritos({ favoritos }) {
  return (
    <>
      <div>
        <h2>Favoritos</h2>
        {favoritos.map((player) => (
          <div>
            <CardAtleta player={player} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Favoritos
