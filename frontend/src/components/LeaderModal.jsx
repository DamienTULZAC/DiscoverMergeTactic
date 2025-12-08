import React, { useEffect, useState } from "react";
import { fetchOneLeaderFromApi } from "../services/api";
import "./style/LeaderItem.css";

export default function LeaderModal({ leader, onClose }) {

  const [details, setDetails] = useState(null);
  
    useEffect(() => {
      async function load() {
        const data = await fetchOneLeaderFromApi(leader.id);
        console.log("getOne :", data);
        setDetails(data);
      }
      load();
    }, [leader]);
  
    if (!details) return null; // le temps du chargement

  return (
    <div className="cm-overlay" onClick={onClose}>
      <div className="cm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cm-close btn-close" onClick={onClose} />

        <div className="cm-body">
          <div className={`cm-image leader-${leader.rarity || "common"}`}>
            <img src={details.image} alt={details.name} />
          </div>

          <div className="cm-info">
            <h2>{details.name}</h2>

            <p>
              <strong>Bonus :</strong> {details.bonus_name}
            </p>
            <p>
              <strong>Effet :</strong> {details.bonus_effect}
            </p>
            <p>
              <strong>PV :</strong> {details.hp}
            </p>
            <p>
              <strong>Date de sortie :</strong> {details.releaseDate}
            </p>

            <p className="cm-desc">{details.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
