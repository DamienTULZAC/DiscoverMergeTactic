import React from 'react';


export default function About() {
    return (
        <div>

            <section className="py-5">

                <div className="container my-5 d-flex justify-content-start">
                    <div
                        className="mt-box p-4 shadow-lg rounded text-light"
                        style={{ maxWidth: "600px" }}
                    >
                        <h2 className="mt-title">A propos</h2>
                        <p className="mt-text">
                            DiscoverMergeTactics est un projet créé pour présenter les cartes et leaders du mod Merge Tactics du jeu Clash Royale. 
                            Toutes les images et données appartiennent à leurs créateurs respectifs.
                        </p>
                    </div>
                </div>

                <div className="container my-5 d-flex justify-content-end">
                    <div
                        className="mt-box p-4 shadow-lg rounded text-light"
                        style={{ maxWidth: "600px" }}
                    >
                        <h2 className="mt-title">Notre objectif</h2>
                        <p className="mt-text">
                            Ce site a pour but de répertorier toutes les cartes, unités et leaders du mod Merge Tactics,
                            afin d’aider les joueurs à comprendre les mécaniques du jeu et à améliorer leurs stratégies.
                        </p>
                    </div>
                </div>

                <div className="container my-5 d-flex justify-content-start">
                    <div
                        className="mt-box p-4 shadow-lg rounded text-light"
                        style={{ maxWidth: "600px" }}
                    >
                        <h2 className="mt-title">L'équipe</h2>
                        <p className="mt-text">
                            Projet réalisé par <strong>Damien TULZAC et Hugo SALAÜN</strong> en 2025 dans le cadre d'une UE 
                            au sein de l'Univérsité de Bretagne Occidentale à Brest.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
}