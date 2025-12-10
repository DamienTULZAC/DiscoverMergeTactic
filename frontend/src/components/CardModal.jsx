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
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
              <h2>{details.name}</h2>
            </div>
            <div className="cr-stats-container">
              <div className="cr-stat">
                <span className="cr-label">HP</span>
                <span className="cr-value">{details.hp}</span>
              </div>

              <div className="cr-stat">
                <span className="cr-label">Dégâts</span>
                <span className="cr-value">{details.damages}</span>
              </div>

              <div className="cr-stat">
                <span className="cr-label">Portée</span>
                <span className="cr-value">{details.range}</span>
              </div>

              <div className="cr-stat">
                <span className="cr-label">Vitesse</span>
                <span className="cr-value">{details.speed}</span>
              </div>

              <div className="cr-stat">
                <span className="cr-label">Vit. Attaque</span>
                <span className="cr-value">{details.atqSpeed}</span>
              </div>

              <div className="cr-stat">
                <span className="cr-label">Critique</span>
                <span className="cr-value">{details.critical}</span>
              </div>

              <div className="cr-stat-full">
                <span className="cr-label">Catégories</span>
                <span className="cr-value">
                  {details.categories[0]}, {details.categories[1]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
