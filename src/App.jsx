import { useState, useEffect } from "react";
import "./App.css";
import SearchPlayer from "./components/SearchPlayer/SearchPlayer.jsx";
import Favoritos from "./components/CardFavoritos/Favoritos.jsx";
import CardAtleta from "./components/CardAtleta/CardAtleta.jsx";

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  
  return (
    <div className="error-message">
      {error.message === "Nenhum jogador encontrado" 
        ? "Não encontramos nenhum jogador com esse nome. Tente novamente."
        : "Ocorreu um erro ao buscar os jogadores. Por favor, tente mais tarde."}
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const [favoritos, setFavoritos] = useState([]);
  const [showFavoritos, setShowFavoritos] = useState(false);

  // Carrega favoritos do localStorage ao iniciar
  useEffect(() => {
    const savedFavoritos = localStorage.getItem('favoritos');
    if (savedFavoritos) {
      setFavoritos(JSON.parse(savedFavoritos));
    }
  }, []);

  const handleAddFavorito = (player) => {
    setFavoritos((prev) => {
      const alreadyExists = prev.some(fav => fav.id === player.id);
      
      if (alreadyExists) {
        alert('Este jogador já está nos seus favoritos!');
        return prev;
      }
      
      const newFavoritos = [...prev, player];
      localStorage.setItem('favoritos', JSON.stringify(newFavoritos));
      return newFavoritos;
    });
  };

  const handleRemoveFavorito = (playerId) => {
    setFavoritos((prev) => {
      const newFavoritos = prev.filter(player => player.id !== playerId);
      localStorage.setItem('favoritos', JSON.stringify(newFavoritos));
      return newFavoritos;
    });
  };

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "980805025emsh0b625f38045dff8p19cbacjsndd4c87d912e2",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
  };

  const handleSearch = async (namePlayer) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        `https://api-football-v1.p.rapidapi.com/v3/players/profiles?search=${namePlayer}`,
        options
      );

      if (!response.ok) {
        throw new Error("Nenhum jogador encontrado");
      }
      const result = await response.json();
      setResult(result);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

return (
  <div className="main-container">
    <div className="header-section">
      <h1 className="title">Pesquisa de Atletas</h1>
      <div className="search-section">
        <SearchPlayer onSearch={handleSearch} />
        <button 
          onClick={() => setShowFavoritos(!showFavoritos)}
          className="favoritos-button"
        >
          {showFavoritos ? "Voltar para Pesquisa" : "⭐ Ver Favoritos"}
        </button>
      </div>
    </div>
    
    <ErrorMessage error={error} />
    
    {isLoading && <LoadingSpinner />}
    
    <div className="content-section">
      {!isLoading && !showFavoritos && result?.response?.map((r) => (
        <CardAtleta
          key={r.player.id}
          player={r.player}
          onAddFavorito={handleAddFavorito}
        />
      ))}
      
      {showFavoritos && (
        <Favoritos 
          favoritos={favoritos} 
          onRemoveFavorito={handleRemoveFavorito}
        />
      )}
    </div>
  </div>
);
}

export default App;