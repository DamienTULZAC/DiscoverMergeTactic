import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Navbar() {
    //const { pathname } = useLocation();
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-primary">
            <div class="container">
                <a class="navbar-brand fw-bold text-warning" href="#">DiscoverMergeTactics</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="/">Accueil</a></li>
                    <li class="nav-item"><a class="nav-link" href="/cards">Cartes</a></li>
                    <li class="nav-item"><a class="nav-link" href="/leaders">Leaders</a></li>
                    <li class="nav-item"><a class="nav-link" href="/about">A propos</a></li>
                </ul>
                </div>
            </div>
        </nav>
    );
}