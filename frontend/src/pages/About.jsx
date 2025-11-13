import React from 'react';


export default function About() {
    return (
        <div>
            <section className="about">
                <h2 class="section-title">A propos</h2>
                <p class="section-text">
                    DiscoverMergeTactics est un projet créé pour présenter les cartes et leaders du mod Merge Tactics du jeu Clash Royale. 
                    Toutes les images et données appartiennent à leurs créateurs respectifs.
                </p>
            </section>

            <section class="objectif">
                <h2 class="section-title">Notre objectif</h2>
                <p class="section-text">
                    Ce site a pour but de répertorier toutes les cartes, unités et leaders du mod Merge Tactics,
                    afin d’aider les joueurs à comprendre les mécaniques du jeu et à améliorer leurs stratégies.
                </p>
            </section>

            <section class="team">
                <h2 class="section-title">L'équipe</h2>
                <p class="section-text">
                    Projet réalisé par <strong>Damien TULZAC et Hugo SALAÜN</strong> en 2025 dans le cadre d'une UE 
                    au sein de l'Univérsité de Bretagne Occidentale à Brest.
                </p>
            </section>
        </div>
    );
}