import "./style/HeroBanner.css";
import React from 'react';


export default function HeroBanner() {
    return (
      <header class="hero text-center py-5">
        <div class="container">
          <img src="../assets/background/banniere.png" alt="Merge Tactics banner" className="hero-img" />
          <h1 class="display-4 fw-bold text-warning">
            Construis ton armée, fusionne tes troupes !
          </h1>
          <p class="lead text-light">
            Découvrez les cartes et leaders du mod <strong>Merge Tactics </strong>
            inspiré de <em>Clash Royale</em>.
          </p>
          <a href="/cards" class="btn btn-lg btn-warning mt-3">Explorer les cartes</a>
        </div>
      </header>
    );
}