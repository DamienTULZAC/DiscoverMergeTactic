// src/pages/Cards.jsx
import { useState, useEffect } from "react";
import { fetchCardsFromApi } from "../services/api";
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    setError(null);

    fetchCardsFromApi()
      .then(arr => {
        if (!mounted) return;
        setCards(arr);
        setFilteredCards(arr);
      })
      .catch(err => {
        console.error("fetchCards error", err);
        setError(err.message ?? "Erreur lors de la récupération des cartes.");
      })
      .finally(() => {
        if (mounted) setIsLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  // Filtrage automatique à chaque changement
  useEffect(() => {
    const q = search.trim().toLowerCase();
    let result = cards.slice();

    if (q !== "") {
      result = result.filter(c => (c.name ?? "").toLowerCase().includes(q));
    }
    if (rarity) {
      result = result.filter(c => (c.rarity ?? "").toLowerCase() === rarity.toLowerCase());
    }
    if (type) {
      result = result.filter(c => (c.type ?? "").toLowerCase() === type.toLowerCase());
    }

    setFilteredCards(result);
  }, [search, rarity, type, cards]);

  return (
    <div className="page-container">
      <h1 className="page-title text-light">Cartes</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <SearchBar search={search} setSearch={setSearch} />

      <FilterBar
        rarity={rarity} setRarity={setRarity}
        type={type} setType={setType}
      />

      {isLoading && <Loader />}

      {!isLoading && !error && cards.length === 0 && (
        <div className="alert alert-info">ℹ️ Aucune carte disponible pour le moment.</div>
      )}

      {!isLoading && !error && cards.length > 0 && filteredCards.length === 0 && (
        <div className="alert alert-warning">❌ Aucune carte ne correspond à votre recherche.</div>
      )}

      {!isLoading && !error && (
        <>
          <p className="text-light mb-3">Cartes trouvées : <strong>{filteredCards.length}</strong></p>

          <div className="row g-4">
            {filteredCards.map(card => (
              <div className="col-6 col-md-4 col-lg-3" key={card.id}>
                <CardItem card={card} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
