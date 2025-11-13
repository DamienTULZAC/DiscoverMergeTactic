import React from 'react';


export default function LeaderItem({ leader }) {
    return (
        <div className="leader-item">
            <img class="leader-img" src={leader.image} alt={leader.name} />
            <h3>{leader.name}</h3>
            <p><strong>Bonus:</strong> {leader.bonus}</p>
            <p className="desc">{leader.effect}</p>
        </div>
    );
}