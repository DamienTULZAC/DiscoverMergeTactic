import { useState, useEffect } from "react";
import { cards as mockCards } from "../data/mockCards";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import CardItem from "../components/CardItem";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [search, setSearch] = useState("");
  const [rarity, setRarity] = useState("");
  const [type, setType] = useState("");
  const [isLoading, setLoading] = useState(true);

  // Simulation d’une requête API
  useEffect(() => {
    setLoading(true);
  
    setTimeout(() => {
      setCards(mockCards);
      setFilteredCards(mockCards);
      setLoading(false);
    }, 800);
  }, []);
  

  return (
    <div className="page-container">
      <h1 className="page-title text-light">Cartes</h1>

      {/* Barre de recherche */}
      <SearchBar></SearchBar>

      {/* Filtres */}
      <FilterBar></FilterBar>

      {/* Loader */}
    {isLoading && <Loader />}

    {/* Si le back ne renvoie rien */}
    {!isLoading && cards.length === 0 && (
    <div className="alert alert-info mt-3">
        ℹ️ Aucune carte disponible pour le moment.
    </div>
    )}

    {/* Si le filtrage donne 0 résultat */}
    {!isLoading && cards.length > 0 && filteredCards.length === 0 && (
    <div className="alert alert-warning mt-3">
        ❌ Aucune carte ne correspond à votre recherche.
    </div>
    )}


      {/* Compteur */}
      {!isLoading && (
        <p className="text-light mb-3">
          Cartes trouvées : <strong>{filteredCards.length}</strong>
        </p>
      )}

      {/* Liste des cartes */}
      <div className="row g-3">
        {!isLoading && filteredCards.map(card => (
          <div className="col-md-4" key={card.id}>
            <CardItem card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
