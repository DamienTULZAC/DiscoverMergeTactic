import React from 'react';
import Banniere from '../components/Banniere';
import HeroBanner from '../components/HeroBanner';

export default function Home1() {
    return (
        <div>
            <HeroBanner />

            <section className="py-5">

                {/* Box gauche */}
                <div className="container my-5 d-flex justify-content-start">
                    <div
                        className="mt-box p-4 shadow-lg rounded text-light"
                        style={{ maxWidth: "600px" }}
                    >
                        <h2 className="mt-title">⚔️ Batailles Épiques</h2>
                        <p className="mt-text">
                            Affronte des vagues d’ennemis dans un gameplay tactique unique.
                        </p>
                    </div>
                </div>

                {/* Box droite */}
                <div className="container my-5 d-flex justify-content-end">
                    <div
                        className="mt-box p-4 shadow-lg rounded text-light"
                        style={{ maxWidth: "600px" }}
                    >
                        <h2 className="mt-title">👑 Leaders Légendaires</h2>
                        <p className="mt-text">
                            Choisis ton chef et débloque des capacités spéciales puissantes.
                        </p>
                    </div>
                </div>

                {/* Box centrée */}
                <div className="container my-5 d-flex justify-content-center">
                    <div
                        className="mt-box p-4 shadow-lg rounded text-light"
                        style={{ maxWidth: "600px" }}
                    >
                        <h2 className="mt-title">🧩 Stratégies Infinies</h2>
                        <p className="mt-text">
                            Fusionne, améliore, et expérimente pour dominer le champ de bataille.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
}
