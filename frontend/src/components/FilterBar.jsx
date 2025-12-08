export default function FilterBar({ rarity, setRarity, type, setType }) {
  return (
    <div className="filter-container mb-3 d-flex gap-2">

      <select
        className="form-select w-auto"
        value={rarity}
        onChange={(e) => setRarity(e.target.value)}
      >
        <option value="">Rareté (toutes)</option>
        <option value="commun">Commune</option>
        <option value="rare">Rare</option>
        <option value="epique">Épique</option>
        <option value="legendaire">Légendaire</option>
      </select>

      <select
        className="form-select w-auto"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Type (tous)</option>
        <option value="noble">Noble</option>
        <option value="poids lourd">Poids lourd</option>
        <option value="rafale">Rafale</option>
        <option value="clan">Clan</option>
        <option value="goblin">Goblin</option>
        <option value="assassin">Assassin</option>
        <option value="visée">Visée</option>
        <option value="bagarre">Bagarre</option>
        <option value="nécromancie">Nécromancie</option>
        <option value="feu">Feu</option>
        <option value="arcane">Arcane</option>
        <option value="vendette">Vendette</option>
        <option value="ace">Ace</option>
        <option value="electro">Electro</option>
      </select>

    </div>
  );
}
