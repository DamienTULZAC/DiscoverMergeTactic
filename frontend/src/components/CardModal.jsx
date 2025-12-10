import React, { useEffect, useState } from "react";
import { fetchOneCardFromApi } from "../services/api";
import "./style/CardItem.css"; // réutilise les mêmes styles

export default function CardModal({ card, onClose }) {
  // simple modal overlay
  
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await fetchOneCardFromApi(card.id);
      console.log("getOne :", data);
      setDetails(data);
    }
    load();
  }, [card]);

  if (!details) return null; // le temps du chargement

  return (
    <div className="cm-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cm-close btn-close" onClick={onClose} aria-label="Close"></button>

        <div className="cm-body">
          <div className={`cm-image card-${details.type}`}>
            <img src={"assets/img/"+details.img} alt={details.name} />
          </div>

          <div className="cm-info">
            <h2>{details.name}</h2>
            <p><strong>HP :</strong> {details.hp}</p>
            <p><strong>Dégâts :</strong> {details.damages}</p>
            <p><strong>Portée :</strong> {details.range}</p>
            <p><strong>Vitesse :</strong> {details.speed}</p>
            <p><strong>Vitesse d'attaque :</strong> {details.atqSpeed}</p>
            <p><strong>Critique :</strong> {details.critical}</p>
            <p><strong>Catégories :</strong> {details.categories[0]}, {details.categories[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
