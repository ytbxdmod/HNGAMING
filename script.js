
const sampleGames = [
  { id: 'elden-ring', title: 'Elden Ring', genre: 'Action RPG', price: 990000, cover: 'assets/images/eldenring.jpg' },
  { id: 'hades-2', title: 'Hades II', genre: 'Roguelike', price: 450000, cover: 'assets/images/hades2.jpg' },
  { id: 'helldivers-2', title: 'Helldivers 2', genre: 'Co-op Shooter', price: 790000, cover: 'assets/images/helldivers2.jpg' },
  { id: 'stardew', title: 'Stardew Valley', genre: 'Simulation', price: 165000, cover: 'assets/images/stardew.jpg' },
  { id: 'witcher3', title: 'The Witcher 3', genre: 'RPG', price: 250000, cover: 'assets/images/witcher3.jpg' },
  { id: 'forza', title: 'Forza Horizon 5', genre: 'Racing', price: 690000, cover: 'assets/images/forza5.jpg' },
  { id: 'minecraft', title: 'Minecraft', genre: 'Sandbox', price: 529000, cover: 'assets/images/minecraft.jpg' },
  { id: 'valorant', title: 'Valorant', genre: 'FPS', price: 0, cover: 'assets/images/valorant.jpg' },
];

function formatCurrencyVND(value) {
  if (!Number.isFinite(value)) return '';
  if (value === 0) return 'Miễn phí';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(value);
}

function createGameCard(game) {
  const card = document.createElement('article');
  card.className = 'card';
  const thumb = document.createElement('div');
  thumb.className = 'card-thumb';
  thumb.style.backgroundImage = `url("${game.cover}")`;
  const body = document.createElement('div');
  body.className = 'card-body';
  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = game.title;
  const meta = document.createElement('div');
  meta.className = 'card-meta';
  const genre = document.createElement('span');
  genre.textContent = game.genre;
  const price = document.createElement('span');
  price.className = 'price';
  price.textContent = formatCurrencyVND(game.price);
  meta.append(genre, price);
  body.append(title, meta);
  card.append(thumb, body);
  return card;
}

function renderGames(games) {
  const grid = document.getElementById('game-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const fragment = document.createDocumentFragment();
  games.forEach(game => fragment.appendChild(createGameCard(game)));
  grid.appendChild(fragment);
}

function setupSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const filtered = sampleGames.filter(g => g.title.toLowerCase().includes(q) || g.genre.toLowerCase().includes(q));
    renderGames(filtered);
  });
}

function setupNavToggle() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
  });
}

function setYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', () => {
  renderGames(sampleGames);
  setupSearch();
  setupNavToggle();
  setYear();
});

