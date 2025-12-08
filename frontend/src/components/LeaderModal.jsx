import React from "react";
import "./style/LeaderItem.css";

export default function LeaderModal({ leader, onClose }) {
  return (
    <div className="cm-overlay" onClick={onClose}>
      <div className="cm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cm-close btn-close" onClick={onClose} />

        <div className="cm-body">
          <div className={`cm-image leader-${leader.rarity || "common"}`}>
            <img src={leader.image} alt={leader.name} />
          </div>

          <div className="cm-info">
            <h2>{leader.name}</h2>

            <p>
              <strong>Bonus :</strong> {leader.bonus_name}
            </p>
            <p>
              <strong>Effet :</strong> {leader.bonus_effect}
            </p>
            <p>
              <strong>PV :</strong> {leader.hp}
            </p>
            <p>
              <strong>Date de sortie :</strong> {leader.releaseDate}
            </p>

            <p className="cm-desc">{leader.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
