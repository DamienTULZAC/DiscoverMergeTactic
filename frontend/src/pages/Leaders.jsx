import React, { useEffect, useState } from 'react';
import { fetchLeaders } from '../services/api';
import LeaderItem from '../components/LeaderItem';


export default function Leaders() {
    return (
        <div>
            <h2>Leaders</h2>
            <p>Voici les leaders</p>
        </div>

        // template leader
        // <div class="card-leader">
        // <img class="leader-img" src="URL_IMAGE_LEADER" alt="Nom du leader">
        // <div class="leader-info">
        //     <h3 class="leader-name">Nom du leader</h3>
        //     <p class="leader-ability">Capacité : +1 élixir/merge</p>
        //     <p class="leader-desc">Description plus longue du rôle du leader.</p>
        // </div>
        // </div>
    );
}