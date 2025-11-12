import React from 'react';


export default function SearchBar({ value, onChange }) {
return (
<input
type="text"
className="search-bar"
placeholder="Rechercher une carte..."
value={value}
onChange={(e) => onChange(e.target.value)}
/>
);
}