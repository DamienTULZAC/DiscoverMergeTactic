import React, { useEffect, useState } from 'react';
import { fetchLeaders } from '../services/api';
import LeaderItem from '../components/LeaderItem';


export default function Leaders() {
    return (
        <div>
            <h2>Leaders</h2>
            <p>Voici les leaders</p>
        </div>
    );
}