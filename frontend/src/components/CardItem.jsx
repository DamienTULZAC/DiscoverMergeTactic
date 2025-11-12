import React from 'react';


export default function CardItem({ card }) {
return (
<div className="card-item">
<img src={card.image} alt={card.name} />
<h3>{card.name}</h3>
<p><strong>Rareté:</strong> {card.rarity}</p>
<p><strong>Type:</strong> {card.type}</p>
<p><strong>Coût:</strong> {card.cost}</p>
<p className="desc">{card.description}</p>
</div>
);
}