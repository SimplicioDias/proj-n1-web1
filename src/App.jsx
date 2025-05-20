import { useState } from "react"
import "./App.css"
import SearchPlayer from "./components/SearchPlayer.jsx"
import Favoritos from "./components/CardFavoritos/Favoritos.jsx"
import CardAtleta from "./components/CardAtleta/CardAtleta.jsx"

// ITEM A : CHECK
// ITEM B: CHECK
// ITEM C: CHECK
// ITEM D: CHECK
// ITEM E: CHECK 
// ITEM F: CHECK
// ITEM G: CHECK
// ITEM H: CHECK

function App() {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState("")
  const [favoritos, setFavoritos] = useState([])

  const handleAddFavorito = (player) => {
    setFavoritos((prev) => [...prev, player])
  }

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "980805025emsh0b625f38045dff8p19cbacjsndd4c87d912e2",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
  }
  const handleSearch = async (namePlayer) => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch(
        `https://api-football-v1.p.rapidapi.com/v3/players/profiles?search=${namePlayer}`,
        options
      )

      if (!response.ok) {
        throw new Error("Nenhum jogador encontrado")
      }
      const result = await response.json()
      console.log(result)
      //console.log(result.response[0].player.name)
      setResult(result)
    } catch (error) {
      console.error(error)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <main>
        <section className="flex">
          <SearchPlayer onSearch={handleSearch} />
          <button onClick={() => setShowFavoritos(!showFavoritos)}>
            Meus Favoritos
          </button>
        </section>
        <section>
          {result?.response?.map((r) => (
            <CardAtleta
              key={r.player.id}
              player={r.player}
              onAddFavorito={handleAddFavorito}
            />
          ))}
          <Favoritos favoritos={favoritos} />
        </section>
        {console.log(favoritos)}
      </main>
    </>
  )
}

export default App
