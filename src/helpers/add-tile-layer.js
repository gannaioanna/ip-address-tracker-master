import L from 'leaflet';

export function addTileLayer(map) {
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: `Challenge by Frontend Mentor. Coded by <a href="https://github.com/gannaioanna">Anna Ignateva</a>`,
  }).addTo(map);
}
