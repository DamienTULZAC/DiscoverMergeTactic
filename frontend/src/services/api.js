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
  return data.map((item, idx) => normalizeCard(item, idx));
}

export async function fetchOneCardFromApi(id) {
  const url = `${API_BASE}/api/cards/`+id;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data;
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
    img: item.img ?? `/assets/cards/${id}.png`, // convention possible
    raw: item
  };
}




















export async function fetchLeadersFromApi() {
  const url = `${API_BASE}/api/rulers`;
  const res = await fetch(url);

  if (!res.ok) throw new Error("Leaders API error");

  const data = await res.json();

  return Object.entries(data).map(([key, obj]) => ({
    id: obj.id,
    name: obj.name,
    bonus_name: obj.bonus_name,
    bonus_effect: obj.bonus_effect,
    description: obj.description,
    hp: obj.hp,
    rarity: obj.rarity || "common",
    releaseDate: obj.releaseDate,
    img: obj.img || `/assets/leaders/${key}.png`
  }));
}


export async function fetchOneLeaderFromApi(id) {
  const url = `${API_BASE}/api/rulers/`+id;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data;
}

