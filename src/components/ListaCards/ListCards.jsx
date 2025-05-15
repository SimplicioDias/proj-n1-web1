import React from "react"
import CardAtleta from "../CardAtleta/CardAtleta"

function ListCards({ result }) {
  return (
    <>
      {result &&
        result.response &&
        result.response.map((r, index) => <CardAtleta key={index} player={r.player} />)}
    </>
  )
}

export default ListCards
