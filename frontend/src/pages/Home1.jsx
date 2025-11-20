import React from 'react';
import HeroBanner from '../components/HeroBanner';

export default function Home() {
    return (
        <div>

            <HeroBanner></HeroBanner>
            
            <section class="content">
                <h2 class="section-title">Pourquoi Merge Tactics ?</h2>
                <p class="section-text">
                Merge Tactics est un jeu de stratégie unique inspiré de Clash Royale, où la fusion de tes troupes est la clé de la victoire. 
                Combine, améliore et déploie des unités pour affronter des vagues d’ennemis dans un univers plein d’énergie !
                </p>
            
                <div class="card-grid">
                <div class="info-card">
                    <h3>⚔️ Des batailles épiques</h3>
                    <p>Chaque partie est une nouvelle aventure où la tactique et la fusion font la différence.</p>
                </div>
                <div class="info-card">
                    <h3>👑 Des leaders puissants</h3>
                    <p>Débloque des héros légendaires, chacun doté d’un pouvoir unique et décisif.</p>
                </div>
                <div class="info-card">
                    <h3>🧩 Des stratégies infinies</h3>
                    <p>Teste des combinaisons et crée ta propre armée imbattable !</p>
                </div>
                </div>
            </section>
        </div>
    );
}