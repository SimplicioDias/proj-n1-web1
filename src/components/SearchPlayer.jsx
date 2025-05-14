import React, { useState } from "react"

function SearchPlayer({ onSearch }) {
  const [namePlayer, setNamePlayer] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (namePlayer.trim()) {
      onSearch(namePlayer)
      setNamePlayer("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome do jogador"
        value={namePlayer}
        onChange={(e) => setNamePlayer(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchPlayer