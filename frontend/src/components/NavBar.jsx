import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Navbar() {
    //const { pathname } = useLocation();
    return (
        <header class="navbar">
            <div class="logo">
                <img src="assets/logo.png" alt="Logo Merge Tactics" />
                <span>Merge Tactics</span>
            </div>
            <nav class="nav-links">
                <a href="/">Home</a>
                <a href="/cards">Cards</a>
                <a href="/leaders">Leaders</a>
                <a href="/about">About</a>
            </nav>
        </header>
    );
}