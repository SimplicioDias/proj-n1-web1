import { useState } from "react"
import "./App.css"
import SearchPlayer from "./components/searchPlayer.jsx"

function App() {
  const [player, setPlayer] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

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
      const result = await response.text()
      console.log(result)
      setPlayer(result)
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
        <section>
          <SearchPlayer onSearch={handleSearch} />
        </section>
        <section>
          <div></div>
        </section>
      </main>
    </>
  )
}

export default App
