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
    );
}