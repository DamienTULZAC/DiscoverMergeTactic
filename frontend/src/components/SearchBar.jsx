export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="form-control my-3"
      placeholder="Rechercher une carte..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
