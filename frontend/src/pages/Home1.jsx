import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Navbar from '../components/NavBar';

export default function Home1() {
    return (
        <div>
            <Navbar></Navbar>

            <HeroBanner></HeroBanner>

            <section class="py-5">
                <div class="container">
                    <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card bg-gradient-secondary text-light h-100">
                        <div class="card-body">
                            <h5 class="card-title text-warning">⚔️ Batailles Épiques</h5>
                            <p class="card-text">Affronte des vagues d’ennemis dans un gameplay tactique unique.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-gradient-secondary text-light h-100">
                        <div class="card-body">
                            <h5 class="card-title text-warning">👑 Leaders Légendaires</h5>
                            <p class="card-text">Choisis ton chef et débloque des capacités spéciales puissantes.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-gradient-secondary text-light h-100">
                        <div class="card-body">
                            <h5 class="card-title text-warning">🧩 Stratégies Infinies</h5>
                            <p class="card-text">Fusionne, améliore, et expérimente pour dominer le champ de bataille.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}