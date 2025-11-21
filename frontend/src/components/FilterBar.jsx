export default function FilterBar({ rarity, setRarity, type, setType }) {
  return (
    <div className="filter-container mb-3 d-flex gap-2">

      <select
        className="form-select w-auto"
        value={rarity}
        onChange={(e) => setRarity(e.target.value)}
      >
        <option value="">Rareté (toutes)</option>
        <option value="common">Commune</option>
        <option value="rare">Rare</option>
        <option value="epic">Épique</option>
        <option value="legendary">Légendaire</option>
      </select>

      <select
        className="form-select w-auto"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Type (tous)</option>
        <option value="melee">Mêlée</option>
        <option value="distance">Distance</option>
        <option value="magic">Magique</option>
      </select>

    </div>
  );
}
