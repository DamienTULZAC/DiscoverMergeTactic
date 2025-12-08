import React, { useRef, useState } from "react";
import CardModal from "./CardModal";
import "./style/CardItem.css";

export default function CardItem({ card }) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 3D tilt: calcul simple sur mousemove
  function handleMouseMove(e) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * 14; // +/- degrees
    const rotateX = (0.5 - py) * 10;
    const translateZ = 12;
    setTiltStyle({
      transform: `perspective(900px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
      transition: `transform 0.06s linear`
    });
  }

  function handleMouseLeave() {
    // smooth reset
    setTiltStyle({
      transform: "perspective(900px) translateZ(0px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.35s cubic-bezier(.2,.9,.2,1)"
    });
  }

  return (
    <>
      <div
        ref={cardRef}
        className={`cr-card card-${card.type} cr-card-tilt`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsModalOpen(true)}
        style={tiltStyle}
        role="button"
        aria-label={`Voir détails ${card.name}`}
      >
        <div className="cr-card-inner">
          <div className="cr-card-image">
            <img src={"/assets/img/archerqueen.webp"} alt={card.name} />
          </div>

          {/* overlay details visible on hover */}
          <div className="cr-card-details">
            <h4>{card.name}</h4>
          </div>

          {/* halo element */}
          <div className="cr-card-halo" aria-hidden="true" />
        </div>
      </div>

      {/* Modal detailed view */}
      {isModalOpen && (
        <CardModal card={card} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
