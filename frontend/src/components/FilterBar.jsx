import React from 'react';


export default function FilterBar({ filters, onChange }) {
return (
<div className="filter-bar">
<select value={filters.rarity} onChange={(e) => onChange({ ...filters, rarity: e.target.value })}>
<option value="">Toutes raretés</option>
<option value="Commune">Commune</option>
<option value="Rare">Rare</option>
<option value="Épique">Épique</option>
<option value="Légendaire">Légendaire</option>
</select>
<select value={filters.type} onChange={(e) => onChange({ ...filters, type: e.target.value })}>
<option value="">Tous types</option>
<option value="Sol">Sol</option>
<option value="Air">Air</option>
<option value="Soutien">Soutien</option>
</select>
</div>
);
}