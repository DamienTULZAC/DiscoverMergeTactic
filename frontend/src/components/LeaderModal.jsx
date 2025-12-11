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
    <div className="lm-overlay" onClick={onClose}>
      <div className="lm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="lm-close btn-close" onClick={onClose} />

        <div className="lm-body">
          <div className={`lm-image leader-${leader.rarity || "common"}`}>
            <img src={"assets/img/"+details.img} alt={details.name} />
          </div>

          <div className="lm-info">
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
              <h2>{details.name}</h2>
            </div>

            <div className="cr-stats-container">
              <div className="cr-stat-full">
                <span className="lm-label-full">{details.bonus_name}</span>
                <span className="lm-value-full">{details.bonus_effect}</span>
              </div>
              <div className="lm-stat">
                <span className="lm-label">pv</span>
                <span className="lm-value">{details.hp}</span>
              </div>
              <div className="lm-stat">
                <span className="lm-label">sortie</span>
                <span className="lm-value">{details.releaseDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
