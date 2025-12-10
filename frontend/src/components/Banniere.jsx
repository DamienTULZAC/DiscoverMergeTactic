import React, { useEffect, useState } from 'react';
import './style/Banniere.css';

const Banniere = ({ children }) => {
  const [unroll, setUnroll] = useState(false);

  useEffect(() => {
    // Déclenche l'animation après un court délai pour que ce soit fluide
    setTimeout(() => {
      setUnroll(true);
    }, 100);
  }, []);

  return (
    <div className="parchemin-wrapper">
      
      {/* Le corps de la bannière. On enlève le SVG en bas. */}
      <div className={`parchemin-body simple-banner ${unroll ? 'unrolled' : ''}`}>
        
        {/* Contenu de la page (Texte, cartes...) */}
        <div className={`parchemin-content ${unroll ? 'visible' : ''}`}>
          {children}
        </div>
        
        {/* Le bas du SVG a été retiré ici ! */}
        
      </div>

    </div>
  );
};

export default Banniere;