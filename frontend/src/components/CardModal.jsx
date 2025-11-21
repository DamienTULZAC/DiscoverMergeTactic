import React from "react";
import "./style/CardItem.css"; // réutilise les mêmes styles

export default function CardModal({ card, onClose }) {
  // simple modal overlay
  return (
    <div className="cm-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cm-close btn-close" onClick={onClose} aria-label="Close"></button>

        <div className="cm-body">
          <div className={`cm-image card-${card.rarity}`}>
            <img src={card.image} alt={card.name} />
          </div>

          <div className="cm-info">
            <h2>{card.name}</h2>
            <p><strong>Type :</strong> {card.type}</p>
            <p><strong>Rareté :</strong> {card.rarity}</p>
            <p className="cm-desc">{card.description || "Aucune description fournie."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
