import React from "react";
import { fetchOneCardFromApi } from "../services/api";
import "./style/CardItem.css"; // réutilise les mêmes styles

export default function CardModal({ card, onClose }) {
  // simple modal overlay
  
  const data = fetchOneCardFromApi(card.id);
  console.log("getOne : ",data);
  return (
    <div className="cm-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cm-close btn-close" onClick={onClose} aria-label="Close"></button>

        <div className="cm-body">
          <div className={`cm-image card-${card.rarity}`}>
          </div>

          <div className="cm-info">
            <h2>{card.name}</h2>
            <p><strong>HP :</strong> {card.hp}</p>
            <p><strong>Dégâts :</strong> {card.damages}</p>
            <p><strong>Portée :</strong> {card.range}</p>
            <p><strong>Vitesse :</strong> {card.speed}</p>
            <p><strong>Vitesse d'attaque :</strong> {card.atqSpeed}</p>
            <p><strong>Critique :</strong> {card.critical}</p>
            <p className="cm-desc">{card.description || "Aucune description fournie."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
