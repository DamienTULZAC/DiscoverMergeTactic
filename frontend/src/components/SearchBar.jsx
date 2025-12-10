export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Rechercher une carte..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        flex: 1,
        minWidth: "200px",
        height: "100%",
        padding: "0 12px",

        /* Fusion dans le background */
        background: "transparent",
        color: "white",

        /* Style clean */
        border: "transparent",
        borderRadius: "6px",

        /* Effacer l'aspect Bootstrap */
        boxShadow: "none"
      }}
    />
  );
}
