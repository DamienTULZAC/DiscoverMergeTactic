// src/pages/Cards.jsx
import { useState, useEffect } from "react";
import { fetchCardsFromApi } from "../services/api";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import CardItem from "../components/CardItem";
import "../components/style/Banniere.css";

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
      result = result.filter(c => (c.type ?? "").toLowerCase() === rarity.toLowerCase());
    }
    if (type) {
      result = result.filter(c => ( ((c.raw.categories[0]  ?? "").toLowerCase() === type.toLowerCase()) || ((c.raw.categories[1]  ?? "").toLowerCase() === type.toLowerCase())) );
      console.log(result);
    }

    setFilteredCards(result);
  }, [search, rarity, type, cards]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      
      <div class="" style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        width:'67%', 
        height: '100%'}}>
        
        <div>
          <h1 className="page-title text-light">Cartes</h1>
        {error && <div className="alert alert-danger">{error}</div>}
          
          <div
            id="filterBar"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              gap: "10px",
              padding: "6px",
              background: "linear-gradient(135deg, #3b246b, #6a4fb6)",
              borderRadius: "8px",
              height: "60px",
              border: "3px solid #4bb4ff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              marginBottom: "15px",
              width: '95%'}}>
            <SearchBar search={search} setSearch={setSearch} />

            <FilterBar
              rarity={rarity} setRarity={setRarity}
              type={type} setType={setType}
            />
          </div>
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
                <div className="col-6 col-md-4 col-lg-2" key={card.id}>
                    <CardItem card={card} />
                </div>
              ))}
            </div>

          </>
        )}
        </div>
        
      </div>
      
    </div>
  );
}
