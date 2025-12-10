import React, { useRef, useState } from "react";
import LeaderModal from "./LeaderModal";
import "./style/LeaderItem.css";

export default function LeaderItem({ leader }) {
  const leaderRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleMouseMove(e) {
    const el = leaderRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 14;
    const rotateX = (0.5 - py) * 10;

    setTiltStyle({
      transform: `perspective(900px) translateZ(12px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
      transition: `transform 0.06s linear`
    });
  }

  function handleMouseLeave() {
    setTiltStyle({
      transform: "perspective(900px) translateZ(0) rotateX(0) rotateY(0) scale(1)",
      transition: "transform 0.35s cubic-bezier(.2,.9,.2,1)"
    });
  }

  return (
    <>
      <div
        ref={leaderRef}
        className={`cr-leader leader-${leader.rarity || "common"} cr-leader-tilt`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsModalOpen(true)}
        style={tiltStyle}
        role="button"
      >
        <div className="cr-leader-inner">
          <div className="cr-leader-image">
            <img src={"/assets/img/"+leader.img} alt={leader.name} />
          </div>

          <div className="cr-leader-details">
            <h4>{leader.name}</h4>
          </div>

          <div className="cr-leader-halo" aria-hidden="true" />
        </div>
      </div>

      {isModalOpen && (
        <LeaderModal leader={leader} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
