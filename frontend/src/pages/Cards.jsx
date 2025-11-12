import React, { useState, useEffect } from 'react';
import { fetchCards } from '../services/api';
import CardItem from '../components/CardItem';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';


export default function Cards() {
    return (
        <div>
            <h2>Cartes</h2>
            <p>Voici les cartes</p>
        </div>

        // template de carte
        // <div class="card-playable">
        //     <img class="card-img" src="URL_IMAGE" alt="Nom de la carte">
        //     <div class="card-info">
        //         <h3 class="card-name">Nom de la carte</h3>
        //         <p class="card-cost">Coût : 2 É</p>
        //         <p class="card-desc">Description de l’effet / stats</p>
        //     </div>
        // </div>

    );
}