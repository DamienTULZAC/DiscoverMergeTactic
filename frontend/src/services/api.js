// src/services/api.js
const API_BASE = "http://localhost:7654";

export async function fetchCardsFromApi() {
  const url = `${API_BASE}/api/cards`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }
  const data = await res.json();

  // data peut être :
  // 1) un tableau : [ {...}, {...} ]
  // 2) un objet mapping : { knight: {..}, archer: {..} }
  // 3) { cards: [...] } ou { cardsTab: { ... } }
  let mapping = null;
  if (Array.isArray(data)) {
    // déjà un tableau -> renvoyer tel quel (normaliser id/name)
    return data.map((item, idx) => normalizeCard(item, idx));
  }

  // si enveloppé
  if (data.cards && Array.isArray(data.cards)) {
    return data.cards.map((item, idx) => normalizeCard(item, idx));
  }
  if (data.cardsTab && typeof data.cardsTab === "object") {
    mapping = data.cardsTab;
  }

  // si data est directement un objet mapping
  if (!mapping && typeof data === "object" && !Array.isArray(data)) {
    // si toutes les valeurs sont des objets et les clés ne sont pas des index => mapping
    const valuesAreObjects = Object.values(data).every(v => typeof v === "object");
    if (valuesAreObjects) mapping = data;
  }

  if (mapping) {
    return Object.entries(mapping).map(([key, obj]) => {
      // ajouter id / name à partir de la clé si besoin
      return normalizeCard({ id: key, name: humanizeKey(key), ...obj });
    });
  }

  // défaut : renvoyer vide
  return [];
}

/** utilitaires de normalisation */
function humanizeKey(key) {
  // "knight" -> "Knight", "archer_woman" -> "Archer Woman"
  return key
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function normalizeCard(item, fallbackId) {
  // si item contient déjà id/name, on garde, sinon on génère
  const id = item.id ?? item.key ?? `card-${fallbackId}`;
  const name = item.name ?? humanizeKey(id);
  // ajoute des champs par défaut si manquent
  return {
    id,
    name,
    hp: item.hp ?? item.health ?? null,
    damages: item.damages ?? item.damage ?? null,
    range: item.range ?? null,
    type: item.type ?? item.t ?? "unknown",
    rarity: item.rarity ?? item.r ?? "common",
    level: item.level ?? 1,
    description: item.description ?? "",
    image: item.image ?? `/assets/cards/${id}.png`, // convention possible
    raw: item
  };
}




















export async function fetchLeadersFromApi() {
  const url = `${API_BASE}/api/rulers`;
  const res = await fetch(url);

  if (!res.ok) throw new Error("Leaders API error");

  const data = await res.json();

  return Object.entries(data).map(([key, obj]) => ({
    id: key,
    name: obj.name,
    bonus_name: obj.bonus_name,
    bonus_effect: obj.bonus_effect,
    description: obj.description,
    hp: obj.hp,
    rarity: obj.rarity || "common",
    releaseDate: obj.releaseDate,
    image: obj.image || `/assets/leaders/${key}.png`
  }));
}

