import "./style/CardItem.css";
import React from 'react';

export default function CardItem({ card }) {
    return (
      <div className="card-template">
        <img src={card.image} alt={card.name} />
  
        <h4 className={`rarity-${card.rarity}`}>
          {card.name}
        </h4>
  
        <p>Type : {card.type}</p>
        <p>Niveau : {card.level}</p>
        <p>Rareté : {card.rarity}</p>
      </div>
    );
  }
  