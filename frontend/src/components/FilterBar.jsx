export default function FilterBar({ rarity, setRarity, type, setType }) {
  const selectStyle = {
    height: "100%",
    padding: "0 12px",
    background: "transparent",
    color: "white",
    border: "transparent",
    borderLeft: '2px solid #4bb4ff',
    boxShadow: "none",
  };

  return (
    <div style={{ display: "flex", gap: "10px", height: "100%" }}>
      <select
        style={selectStyle}
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
        style={selectStyle}
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
