// ============================================================
//  Reel&Reed — Movie & Book Tracker
//  All data persisted in localStorage under key "cinereads_v1"
// ============================================================

'use strict';

/* ---- Static catalog data ---- */
const CATALOG = [
  // MOVIES
  { id: 'm01', type: 'movie', title: 'The Shawshank Redemption', genre: 'Drama',     year: 1994, credit: 'Dir. Frank Darabont',       desc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
  { id: 'm02', type: 'movie', title: 'Inception',                genre: 'Sci-Fi',    year: 2010, credit: 'Dir. Christopher Nolan',     desc: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.' },
  { id: 'm03', type: 'movie', title: 'The Dark Knight',          genre: 'Action',    year: 2008, credit: 'Dir. Christopher Nolan',     desc: 'When the Joker wreaks havoc on Gotham, Batman must confront one of the greatest psychological and physical tests of his ability to fight injustice.' },
  { id: 'm04', type: 'movie', title: 'Interstellar',             genre: 'Sci-Fi',    year: 2014, credit: 'Dir. Christopher Nolan',     desc: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.' },
  { id: 'm05', type: 'movie', title: 'Pulp Fiction',             genre: 'Crime',     year: 1994, credit: 'Dir. Quentin Tarantino',     desc: 'The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.' },
  { id: 'm06', type: 'movie', title: 'The Godfather',            genre: 'Crime',     year: 1972, credit: 'Dir. Francis Ford Coppola',  desc: 'The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.' },
  { id: 'm07', type: 'movie', title: 'Forrest Gump',             genre: 'Drama',     year: 1994, credit: 'Dir. Robert Zemeckis',       desc: 'The presidencies of Kennedy and Johnson, Vietnam, and Watergate unfold through the perspective of an Alabama man with an IQ of 75.' },
  { id: 'm08', type: 'movie', title: 'The Matrix',               genre: 'Sci-Fi',    year: 1999, credit: 'Dir. The Wachowskis',        desc: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.' },
  { id: 'm09', type: 'movie', title: 'Spirited Away',            genre: 'Animation', year: 2001, credit: 'Dir. Hayao Miyazaki',        desc: 'During her family\'s move to the suburbs, a 10-year-old girl wanders into a world ruled by gods, witches, and spirits.' },
  { id: 'm10', type: 'movie', title: 'Parasite',                 genre: 'Thriller',  year: 2019, credit: 'Dir. Bong Joon-ho',          desc: 'Greed and class discrimination threaten the symbiotic relationship between the wealthy Park family and the destitute Kim clan.' },
  { id: 'm11', type: 'movie', title: 'Schindler\'s List',        genre: 'History',   year: 1993, credit: 'Dir. Steven Spielberg',      desc: 'In German-occupied Poland, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing Nazi brutality.' },
  { id: 'm12', type: 'movie', title: 'The Lord of the Rings',    genre: 'Fantasy',   year: 2001, credit: 'Dir. Peter Jackson',         desc: 'A meek Hobbit and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.' },
  { id: 'm13', type: 'movie', title: 'Get Out',                  genre: 'Horror',    year: 2017, credit: 'Dir. Jordan Peele',          desc: 'A young man visits his white girlfriend\'s family estate, where his uneasiness grows into a dire situation.' },
  { id: 'm14', type: 'movie', title: 'Knives Out',               genre: 'Mystery',   year: 2019, credit: 'Dir. Rian Johnson',          desc: 'A detective investigates the death of a patriarch of an eccentric, combative family, with every member a suspect.' },
  { id: 'm15', type: 'movie', title: 'Everything Everywhere All at Once', genre: 'Sci-Fi', year: 2022, credit: 'Dir. Daniels', desc: 'A middle-aged laundromat owner is swept into a multiverse adventure where she alone can save the world by exploring other universes.' },
  { id: 'm16', type: 'movie', title: 'The Notebook',             genre: 'Romance',   year: 2004, credit: 'Dir. Nick Cassavetes',       desc: 'A poor yet passionate young man falls in love with a rich young woman, but they are soon separated by their social differences.' },
  // BOOKS
  { id: 'b01', type: 'book', title: 'To Kill a Mockingbird',          genre: 'Classic',    year: 1960, credit: 'Harper Lee',          desc: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, as seen through the eyes of Scout Finch.' },
  { id: 'b02', type: 'book', title: '1984',                           genre: 'Dystopian',  year: 1949, credit: 'George Orwell',        desc: 'A dystopian tale examining the dangers of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society.' },
  { id: 'b03', type: 'book', title: 'The Great Gatsby',               genre: 'Classic',    year: 1925, credit: 'F. Scott Fitzgerald',  desc: 'The story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan, against the backdrop of the Jazz Age.' },
  { id: 'b04', type: 'book', title: 'Harry Potter & the Sorcerer\'s Stone', genre: 'Fantasy', year: 1997, credit: 'J.K. Rowling',   desc: 'A young boy discovers he is a wizard on his eleventh birthday and begins his education at Hogwarts School of Witchcraft and Wizardry.' },
  { id: 'b05', type: 'book', title: 'Dune',                           genre: 'Sci-Fi',     year: 1965, credit: 'Frank Herbert',        desc: 'Set in the far future, a young nobleman is thrust into a deadly war for control of the desert planet Arrakis, the only source of a precious resource.' },
  { id: 'b06', type: 'book', title: 'The Hobbit',                     genre: 'Fantasy',    year: 1937, credit: 'J.R.R. Tolkien',       desc: 'A homebody hobbit is swept into an epic quest to reclaim a dwarf kingdom and its treasure from the fearsome dragon Smaug.' },
  { id: 'b07', type: 'book', title: 'Pride and Prejudice',            genre: 'Romance',    year: 1813, credit: 'Jane Austen',          desc: 'Elizabeth Bennet navigates issues of manners, upbringing, morality, education, and marriage in early 19th-century English society.' },
  { id: 'b08', type: 'book', title: 'The Hunger Games',               genre: 'Dystopian',  year: 2008, credit: 'Suzanne Collins',      desc: 'In a dystopian future, teenager Katniss Everdeen volunteers to participate in a televised death match to save her younger sister.' },
  { id: 'b09', type: 'book', title: 'Sapiens',                        genre: 'Non-Fiction',year: 2011, credit: 'Yuval Noah Harari',    desc: 'A brief history of humankind, exploring how Homo sapiens came to rule the world and what the future might hold for our species.' },
  { id: 'b10', type: 'book', title: 'The Alchemist',                  genre: 'Classic',    year: 1988, credit: 'Paulo Coelho',         desc: 'A magical story about Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure hidden near the Egyptian pyramids.' },
  { id: 'b11', type: 'book', title: 'Atomic Habits',                  genre: 'Self-Help',  year: 2018, credit: 'James Clear',          desc: 'A revolutionary guide to making good habits, breaking bad ones, and getting 1% better every day through tiny changes.' },
  { id: 'b12', type: 'book', title: 'Gone Girl',                      genre: 'Thriller',   year: 2012, credit: 'Gillian Flynn',        desc: 'On the day of their fifth wedding anniversary, Amy Dunne disappears, and her husband Nick becomes the prime suspect in her death.' },
  { id: 'b13', type: 'book', title: 'The Martian',                    genre: 'Sci-Fi',     year: 2011, credit: 'Andy Weir',            desc: 'Astronaut Mark Watney is stranded alone on Mars and must use ingenuity and botany to survive and signal for rescue.' },
  { id: 'b14', type: 'book', title: 'It',                             genre: 'Horror',     year: 1986, credit: 'Stephen King',         desc: 'A group of children in Derry, Maine are terrorized by a shapeshifting entity that exploits their deepest fears, most often appearing as Pennywise the Clown.' },
  { id: 'b15', type: 'book', title: 'The Girl with the Dragon Tattoo',genre: 'Mystery',    year: 2005, credit: 'Stieg Larsson',        desc: 'Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate the disappearance of a woman from a wealthy Swedish family.' },
  { id: 'b16', type: 'book', title: 'Brave New World',                genre: 'Dystopian',  year: 1932, credit: 'Aldous Huxley',        desc: 'A futuristic society where human beings are manufactured and conditioned to serve a rigid social hierarchy, and one man dares to question it.' },
];

/* ---- Genre visual config ---- */
const GENRE_CONFIG = {
  'Action':      { gradient: 'linear-gradient(135deg,#ff6b35,#f7c948)', emoji: '💥' },
  'Sci-Fi':      { gradient: 'linear-gradient(135deg,#4facfe,#00d2ff)', emoji: '🚀' },
  'Drama':       { gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', emoji: '🎭' },
  'Crime':       { gradient: 'linear-gradient(135deg,#434343,#1a1a2e)', emoji: '🕵️' },
  'Fantasy':     { gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)', emoji: '✨' },
  'Thriller':    { gradient: 'linear-gradient(135deg,#f093fb,#f5576c)', emoji: '😱' },
  'Animation':   { gradient: 'linear-gradient(135deg,#fccb90,#d57eeb)', emoji: '🎨' },
  'History':     { gradient: 'linear-gradient(135deg,#d4a373,#8b6914)', emoji: '📜' },
  'Classic':     { gradient: 'linear-gradient(135deg,#c9a84c,#886633)', emoji: '📖' },
  'Dystopian':   { gradient: 'linear-gradient(135deg,#2c3e50,#e74c3c)', emoji: '⚡' },
  'Romance':     { gradient: 'linear-gradient(135deg,#ff9a9e,#fecfef)', emoji: '💕' },
  'Non-Fiction': { gradient: 'linear-gradient(135deg,#667eea,#764ba2)', emoji: '🌍' },
  'Self-Help':   { gradient: 'linear-gradient(135deg,#11998e,#38ef7d)', emoji: '💡' },
  'Horror':      { gradient: 'linear-gradient(135deg,#1a0a0a,#cc2200)', emoji: '👻' },
  'Mystery':     { gradient: 'linear-gradient(135deg,#2d3561,#c05c7e)', emoji: '🔮' },
};

const RATING_LABELS = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Great', 5: 'Excellent' };
const STORAGE_KEY   = 'cinereads_v1';
const CUSTOM_KEY    = 'cinereads_custom_v1';

/* ---- App state ---- */
let state = {
  currentPage: 'browse',   // 'browse' | 'mylist'
  currentTab:  'movies',
  search:      '',
  genreFilter: 'all',
  statusFilter:'all',
  sortFilter:  'default',
  openItemId:  null,
  hoverRating: 0,
};

/* ---- User data (persisted) ---- */
// Shape: { [id]: { favorite, completed, rating, review, addedAt } }
let userData = {};

/* ---- Custom items (persisted) ---- */
let customItems = [];

/* ======================================================
   STORAGE
====================================================== */
function loadUserData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    userData = raw ? JSON.parse(raw) : {};
  } catch {
    userData = {};
  }
}

function saveUserData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  } catch {
    console.warn('Reel&Reed: localStorage write failed.');
  }
}

function loadCustomItems() {
  try {
    const raw = localStorage.getItem(CUSTOM_KEY);
    customItems = raw ? JSON.parse(raw) : [];
  } catch {
    customItems = [];
  }
}

function saveCustomItems() {
  try {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(customItems));
  } catch {
    console.warn('Reel&Reed: localStorage write failed (custom items).');
  }
}

function getAllItems() {
  return [...CATALOG, ...customItems];
}

function getItem(id) {
  return userData[id] || { favorite: false, completed: false, rating: 0, review: '' };
}

function setItem(id, patch) {
  const existing = getItem(id);
  userData[id] = {
    ...existing,
    ...patch,
    addedAt: existing.addedAt || Date.now(),
  };
  saveUserData();
}

/* ======================================================
   FILTERING & SORTING
====================================================== */
function getVisibleItems() {
  const tab    = state.currentTab;
  const search = state.search.toLowerCase().trim();

  let items = getAllItems().filter(c => c.type === (tab === 'movies' ? 'movie' : 'book'));

  // Search
  if (search) {
    items = items.filter(c =>
      c.title.toLowerCase().includes(search) ||
      c.credit.toLowerCase().includes(search) ||
      c.genre.toLowerCase().includes(search)
    );
  }

  // Genre
  if (state.genreFilter !== 'all') {
    items = items.filter(c => c.genre === state.genreFilter);
  }

  // Status
  switch (state.statusFilter) {
    case 'favorites':  items = items.filter(c => getItem(c.id).favorite);   break;
    case 'completed':  items = items.filter(c => getItem(c.id).completed);  break;
    case 'pending':    items = items.filter(c => !getItem(c.id).completed); break;
    case 'rated':      items = items.filter(c => getItem(c.id).rating > 0); break;
  }

  // Sort
  switch (state.sortFilter) {
    case 'recent':
      items.sort((a, b) => (getItem(b.id).addedAt || 0) - (getItem(a.id).addedAt || 0));
      break;
    case 'rating':
      items.sort((a, b) => (getItem(b.id).rating || 0) - (getItem(a.id).rating || 0));
      break;
    case 'title':
      items.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'year-desc':
      items.sort((a, b) => b.year - a.year);
      break;
    case 'year-asc':
      items.sort((a, b) => a.year - b.year);
      break;
  }

  return items;
}

/* ======================================================
   GENRE FILTER POPULATION
====================================================== */
function populateGenreFilter() {
  const tab    = state.currentTab;
  const genres = [...new Set(
    CATALOG
      .filter(c => c.type === (tab === 'movies' ? 'movie' : 'book'))
      .map(c => c.genre)
  )].sort();

  const sel = document.getElementById('genreFilter');
  sel.innerHTML = '<option value="all">All Genres</option>';
  genres.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g;
    opt.textContent = g;
    if (g === state.genreFilter) opt.selected = true;
    sel.appendChild(opt);
  });
}

/* ======================================================
   STATS BAR
====================================================== */
function renderStats() {
  const tab   = state.currentTab;
  const items = getAllItems().filter(c => c.type === (tab === 'movies' ? 'movie' : 'book'));
  const total     = items.length;
  const completed = items.filter(c => getItem(c.id).completed).length;
  const favorites = items.filter(c => getItem(c.id).favorite).length;
  const rated     = items.filter(c => getItem(c.id).rating > 0).length;
  const label     = tab === 'movies' ? 'Watched' : 'Read';

  document.getElementById('statsBar').innerHTML = `
    <div class="stat-chip">Total: <strong>${total}</strong></div>
    <div class="stat-chip">${label}: <strong>${completed}</strong></div>
    <div class="stat-chip">Favorites: <strong>${favorites}</strong></div>
    <div class="stat-chip">Rated: <strong>${rated}</strong></div>
  `;
}

/* ======================================================
   CARD RENDERING
====================================================== */
function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= rating ? 'star-filled' : 'star-empty'}">&#9733;</span>`;
  }
  return html;
}

function buildCard(item) {
  const ud       = getItem(item.id);
  const cfg      = GENRE_CONFIG[item.genre] || { gradient: 'linear-gradient(135deg,#333,#555)', emoji: '🎬' };
  const label    = item.type === 'movie' ? 'Watched' : 'Read';

  const card = document.createElement('div');
  card.className    = item.custom ? 'card custom' : 'card';
  card.dataset.id   = item.id;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', item.title);

  card.innerHTML = `
    <div class="card-cover" style="background:${cfg.gradient}">
      <div class="card-cover-overlay"></div>
      <span class="card-genre-badge">${item.genre}</span>
      <button class="card-fav-btn ${ud.favorite ? 'active' : ''}" data-fav="${item.id}" aria-label="Toggle favorite" title="Favorite">
        ${ud.favorite ? '&#10084;' : '&#9825;'}
      </button>
      <span class="card-complete-badge ${ud.completed ? 'visible' : ''}">&#10003; ${label}</span>
      ${item.custom ? '<span class="card-custom-dot">Custom</span>' : ''}
      <span style="position:relative;z-index:1;font-size:52px">${cfg.emoji}</span>
    </div>
    <div class="card-body">
      <div class="card-title">${escHtml(item.title)}</div>
      <div class="card-meta">
        <span>${item.year}</span>
        <span class="card-meta-dot"></span>
        <span>${escHtml(item.credit)}</span>
      </div>
    </div>
    <div class="card-footer">
      <div class="card-stars">${renderStars(ud.rating)}</div>
      ${ud.rating ? `<span class="card-rating-num">${ud.rating}/5</span>` : '<span class="card-rating-num" style="color:var(--text3)">No rating</span>'}
    </div>
  `;

  // Open modal on card click (but not fav button)
  card.addEventListener('click', e => {
    if (e.target.closest('[data-fav]')) return;
    openModal(item.id);
  });
  card.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('[data-fav]')) {
      e.preventDefault();
      openModal(item.id);
    }
  });

  // Fav button (inline on card)
  card.querySelector('[data-fav]').addEventListener('click', e => {
    e.stopPropagation();
    toggleFavorite(item.id);
  });

  return card;
}

function renderGrid() {
  const grid       = document.getElementById('itemGrid');
  const emptyState = document.getElementById('emptyState');
  const items      = getVisibleItems();

  grid.innerHTML = '';

  if (items.length === 0) {
    grid.style.display = 'none';
    emptyState.classList.add('visible');
  } else {
    grid.style.display = '';
    emptyState.classList.remove('visible');
    const frag = document.createDocumentFragment();
    items.forEach(item => frag.appendChild(buildCard(item)));
    grid.appendChild(frag);
  }

  renderStats();
  if (state.currentPage === 'mylist') renderMyList();
}

/* ======================================================
   MODAL
====================================================== */
function openModal(id) {
  const item = getAllItems().find(c => c.id === id);
  if (!item) return;
  state.openItemId = id;

  const ud  = getItem(id);
  const cfg = GENRE_CONFIG[item.genre] || { gradient: 'linear-gradient(135deg,#333,#555)', emoji: '🎬' };
  const completedLabel = item.type === 'movie' ? 'Mark as Watched' : 'Mark as Read';
  const doneLabel      = item.type === 'movie' ? 'Watched'         : 'Read';

  document.getElementById('modalCover').style.background = cfg.gradient;
  document.getElementById('modalCoverIcon').textContent  = cfg.emoji;
  document.getElementById('modalGenreBadge').textContent = item.genre;
  document.getElementById('modalTitle').textContent      = item.title;
  document.getElementById('modalMeta').textContent       = `${item.year}  •  ${item.credit}`;
  document.getElementById('modalDesc').textContent       = item.desc;
  document.getElementById('reviewText').value            = ud.review || '';

  // Complete button
  const btnComplete = document.getElementById('modalComplete');
  btnComplete.textContent = ud.completed ? `✓ ${doneLabel}` : completedLabel;
  btnComplete.classList.toggle('active', ud.completed);

  // Favorite button
  const btnFav = document.getElementById('modalFavorite');
  btnFav.textContent = ud.favorite ? '♥ Favorited' : '♡ Add Favorite';
  btnFav.classList.toggle('active', ud.favorite);

  // Stars
  renderModalStars(ud.rating);
  document.getElementById('ratingLabel').textContent = ud.rating
    ? `${RATING_LABELS[ud.rating]} (${ud.rating}/5)`
    : 'Not rated yet';

  // Custom item controls
  const isCustom = !!item.custom;
  document.getElementById('modalCustomBadge').style.display = isCustom ? 'inline-block' : 'none';
  document.getElementById('modalDelete').style.display      = isCustom ? '' : 'none';

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  state.openItemId = null;
}

function renderModalStars(activeRating, hoverRating = 0) {
  const stars = document.querySelectorAll('#modalStars .star');
  const show  = hoverRating || activeRating;
  stars.forEach(s => {
    const val = parseInt(s.dataset.value);
    s.classList.toggle('active',  val <= activeRating && !hoverRating);
    s.classList.toggle('hovered', val <= hoverRating);
  });
}

/* ======================================================
   ACTIONS
====================================================== */
function toggleFavorite(id) {
  const ud = getItem(id);
  setItem(id, { favorite: !ud.favorite });
  const msg = !ud.favorite ? 'Added to favorites ♥' : 'Removed from favorites';
  showToast(msg);
  renderGrid();
  if (state.openItemId === id) {
    const btnFav = document.getElementById('modalFavorite');
    const newState = getItem(id).favorite;
    btnFav.textContent = newState ? '♥ Favorited' : '♡ Add Favorite';
    btnFav.classList.toggle('active', newState);
  }
}

function toggleComplete(id) {
  const item = getAllItems().find(c => c.id === id);
  const ud   = getItem(id);
  setItem(id, { completed: !ud.completed });
  const verb = item.type === 'movie' ? 'watched' : 'read';
  const msg  = !ud.completed ? `Marked as ${verb} ✓` : `Unmarked as ${verb}`;
  showToast(msg);
  renderGrid();
  if (state.openItemId === id) {
    const newState     = getItem(id).completed;
    const doneLabel    = item.type === 'movie' ? 'Watched' : 'Read';
    const pendingLabel = item.type === 'movie' ? 'Mark as Watched' : 'Mark as Read';
    const btn          = document.getElementById('modalComplete');
    btn.textContent    = newState ? `✓ ${doneLabel}` : pendingLabel;
    btn.classList.toggle('active', newState);
  }
}

function setRating(id, rating) {
  const ud = getItem(id);
  // Clicking same rating clears it
  const newRating = ud.rating === rating ? 0 : rating;
  setItem(id, { rating: newRating });
  renderModalStars(newRating);
  document.getElementById('ratingLabel').textContent = newRating
    ? `${RATING_LABELS[newRating]} (${newRating}/5)`
    : 'Not rated yet';
  showToast(newRating ? `Rated ${newRating}/5 — ${RATING_LABELS[newRating]}` : 'Rating cleared');
  renderGrid();
}

function saveReview(id) {
  const text = document.getElementById('reviewText').value.trim();
  setItem(id, { review: text });
  showToast(text ? 'Review saved!' : 'Review cleared');
}

/* ======================================================
   TOAST
====================================================== */
let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* ======================================================
   CUSTOM ITEMS — ADD & DELETE
====================================================== */
function deleteCustomItem(id) {
  customItems = customItems.filter(c => c.id !== id);
  saveCustomItems();
  delete userData[id];
  saveUserData();
  closeModal();
  renderGrid();
  if (state.currentPage === 'mylist') renderMyList();
  showToast('Custom title removed');
}

function openAddModal() {
  // Reset fields
  document.getElementById('addTitle').value  = '';
  document.getElementById('addYear').value   = '';
  document.getElementById('addCredit').value = '';
  document.getElementById('addDesc').value   = '';
  document.getElementById('addFormError').textContent = '';
  document.getElementById('addGenre').value  = '';
  // Reset type toggle to movie
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.type-btn[data-type="movie"]').classList.add('active');
  updateCreditLabel('movie');

  document.getElementById('addModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('addTitle').focus(), 80);
}

function closeAddModal() {
  document.getElementById('addModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function updateCreditLabel(type) {
  const isMovie = type === 'movie';
  document.getElementById('addCreditLabel').innerHTML =
    `${isMovie ? 'Director' : 'Author'} <span class="required">*</span>`;
  document.getElementById('addCredit').placeholder =
    isMovie ? 'e.g. Christopher Nolan' : 'e.g. Stephen King';
}

function populateAddGenreSelect() {
  const sel = document.getElementById('addGenre');
  sel.innerHTML = '<option value="">Select a genre&hellip;</option>';
  Object.keys(GENRE_CONFIG).sort().forEach(g => {
    const opt = document.createElement('option');
    opt.value       = g;
    opt.textContent = g;
    sel.appendChild(opt);
  });
}

function submitAddForm(e) {
  e.preventDefault();
  const errorEl = document.getElementById('addFormError');

  const type   = document.querySelector('.type-btn.active').dataset.type;
  const title  = document.getElementById('addTitle').value.trim();
  const genre  = document.getElementById('addGenre').value;
  const yearRaw= document.getElementById('addYear').value.trim();
  const credit = document.getElementById('addCredit').value.trim();
  const desc   = document.getElementById('addDesc').value.trim();

  if (!title)  { errorEl.textContent = 'Title is required.'; return; }
  if (!genre)  { errorEl.textContent = 'Please select a genre.'; return; }
  const year = parseInt(yearRaw);
  if (!yearRaw || isNaN(year) || year < 1800 || year > 2099) {
    errorEl.textContent = 'Enter a valid year between 1800 and 2099.';
    return;
  }
  if (!credit) {
    errorEl.textContent = `${type === 'movie' ? 'Director' : 'Author'} is required.`;
    return;
  }
  errorEl.textContent = '';

  const newItem = {
    id:     'cu_' + Date.now(),
    type,
    title,
    genre,
    year,
    credit: type === 'movie' ? `Dir. ${credit}` : credit,
    desc:   desc || 'No description provided.',
    custom: true,
  };

  customItems.push(newItem);
  saveCustomItems();

  // Stamp addedAt so "Recently Added" sort works immediately
  setItem(newItem.id, { addedAt: Date.now() });

  closeAddModal();
  showToast(`"${title}" added to your collection!`);

  // Navigate to the right browse tab
  const targetTab = type === 'movie' ? 'movies' : 'books';
  const tabBtn = document.querySelector(`.tab-btn[data-tab="${targetTab}"]`);
  if (state.currentPage === 'mylist' || state.currentTab !== targetTab) {
    tabBtn.click();
  } else {
    renderGrid();
  }
}

/* ======================================================
   PAGE VISIBILITY
====================================================== */
function showPage(page) {
  state.currentPage = page;
  const isMyList = page === 'mylist';
  document.getElementById('filtersSection').style.display = isMyList ? 'none' : '';
  document.getElementById('statsSection').style.display   = isMyList ? 'none' : '';
  document.getElementById('browseMain').style.display     = isMyList ? 'none' : '';
  document.getElementById('myListPage').style.display     = isMyList ? '' : 'none';
  if (isMyList) renderMyList();
}

/* ======================================================
   MY LIST PAGE
====================================================== */
function renderMyList() {
  const all    = getAllItems();
  const movies = all.filter(c => c.type === 'movie');
  const books  = all.filter(c => c.type === 'book');

  // --- Computed stats ---
  const favMovies     = movies.filter(c => getItem(c.id).favorite);
  const favBooks      = books.filter(c => getItem(c.id).favorite);
  const totalFavs     = favMovies.length + favBooks.length;

  const watchedMovies = movies.filter(c => getItem(c.id).completed);
  const readBooks     = books.filter(c => getItem(c.id).completed);

  const ratedAll      = all.filter(c => getItem(c.id).rating > 0);
  const ratedMovies   = movies.filter(c => getItem(c.id).rating > 0);
  const ratedBooks    = books.filter(c => getItem(c.id).rating > 0);

  const avgOf = arr => arr.length
    ? (arr.reduce((s, c) => s + getItem(c.id).rating, 0) / arr.length).toFixed(1)
    : null;

  const avgAll   = avgOf(ratedAll);
  const avgMovie = avgOf(ratedMovies);
  const avgBook  = avgOf(ratedBooks);

  const reviewedItems = all.filter(c => getItem(c.id).review && getItem(c.id).review.trim());
  const ratedOrReviewed = [...new Map(
    [...ratedAll, ...reviewedItems].map(c => [c.id, c])
  ).values()];

  const page = document.getElementById('myListPage');

  page.innerHTML = `
    <div class="mylist-inner">
      <div class="mylist-header">
        <h2>My List</h2>
        <p>Your personal tracking dashboard</p>
      </div>

      <div class="mylist-hero">
        <div class="mylist-stat-card card-blue">
          <div class="mysc-icon">&#127916;&#128218;</div>
          <div class="mysc-num">${all.length}</div>
          <div class="mysc-label">Total Titles</div>
          <div class="mysc-sub">${movies.length} movies &amp; ${books.length} books</div>
        </div>
        <div class="mylist-stat-card card-gold">
          <div class="mysc-icon">&#9733;</div>
          <div class="mysc-num">${avgAll !== null ? avgAll : '&mdash;'}</div>
          <div class="mysc-label">Avg. Rating</div>
          <div class="mysc-sub">${ratedAll.length} title${ratedAll.length !== 1 ? 's' : ''} rated</div>
        </div>
        <div class="mylist-stat-card card-red">
          <div class="mysc-icon">&#10084;</div>
          <div class="mysc-num">${totalFavs}</div>
          <div class="mysc-label">Favorites</div>
          <div class="mysc-sub">${favMovies.length} movies &amp; ${favBooks.length} books</div>
        </div>
      </div>

      <div class="mylist-breakdown">
        <div class="breakdown-card">
          <div class="breakdown-label">&#127916; Movies</div>
          <div class="breakdown-rows">
            <div class="brow"><span>Total</span><strong>${movies.length}</strong></div>
            <div class="brow"><span>Watched</span><strong>${watchedMovies.length}</strong></div>
            <div class="brow"><span>Favorites</span><strong>${favMovies.length}</strong></div>
            <div class="brow"><span>Avg Rating</span><strong>${avgMovie !== null ? avgMovie + ' &#9733;' : '&mdash;'}</strong></div>
          </div>
          <div class="breakdown-bar-wrap">
            <div class="breakdown-bar" style="width:${movies.length ? Math.round(watchedMovies.length / movies.length * 100) : 0}%"></div>
          </div>
          <div class="breakdown-bar-label">${watchedMovies.length} / ${movies.length} watched</div>
        </div>
        <div class="breakdown-card">
          <div class="breakdown-label">&#128218; Books</div>
          <div class="breakdown-rows">
            <div class="brow"><span>Total</span><strong>${books.length}</strong></div>
            <div class="brow"><span>Read</span><strong>${readBooks.length}</strong></div>
            <div class="brow"><span>Favorites</span><strong>${favBooks.length}</strong></div>
            <div class="brow"><span>Avg Rating</span><strong>${avgBook !== null ? avgBook + ' &#9733;' : '&mdash;'}</strong></div>
          </div>
          <div class="breakdown-bar-wrap">
            <div class="breakdown-bar" style="width:${books.length ? Math.round(readBooks.length / books.length * 100) : 0}%"></div>
          </div>
          <div class="breakdown-bar-label">${readBooks.length} / ${books.length} read</div>
        </div>
      </div>

      ${renderMyListSection('&#10084; Favorites', [...favMovies, ...favBooks], 'No favorites yet &mdash; heart some titles!')}
      ${renderMyListSection('&#10003; Watched &amp; Read', [...watchedMovies, ...readBooks], 'Nothing marked as watched or read yet.')}
      ${renderMyListSection('&#9733; Ratings &amp; Reviews', ratedOrReviewed, 'No ratings or reviews yet &mdash; rate some titles!')}
    </div>
  `;

  // Event delegation: clicking a row opens the modal
  page.querySelectorAll('.mylist-row').forEach(row => {
    row.addEventListener('click', () => openModal(row.dataset.id));
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(row.dataset.id); }
    });
  });
}

function renderMyListSection(title, items, emptyMsg) {
  if (items.length === 0) {
    return `
      <section class="mylist-section">
        <h3 class="mylist-section-title">${title}</h3>
        <div class="mylist-empty">${emptyMsg}</div>
      </section>`;
  }

  const rows = items.map(item => {
    const ud  = getItem(item.id);
    const cfg = GENRE_CONFIG[item.genre] || { gradient: 'linear-gradient(135deg,#333,#555)', emoji: '🎬' };
    const stars = [1,2,3,4,5].map(i =>
      `<span class="${i <= ud.rating ? 'star-filled' : 'star-empty'}">&#9733;</span>`
    ).join('');
    const reviewSnippet = ud.review
      ? `<div class="mrow-review">&ldquo;${escHtml(ud.review.slice(0, 90))}${ud.review.length > 90 ? '&hellip;' : ''}&rdquo;</div>`
      : '';
    const badge = ud.completed
      ? `<span class="mrow-badge">${item.type === 'movie' ? 'Watched' : 'Read'}</span>`
      : '';
    return `
      <div class="mylist-row" data-id="${item.id}" role="button" tabindex="0" aria-label="${escHtml(item.title)}">
        <div class="mrow-cover" style="background:${cfg.gradient}">${cfg.emoji}</div>
        <div class="mrow-info">
          <div class="mrow-title">${escHtml(item.title)}</div>
          <div class="mrow-meta">${item.type === 'movie' ? '&#127916;' : '&#128218;'} ${item.year} &bull; ${escHtml(item.credit)}</div>
          ${reviewSnippet}
        </div>
        <div class="mrow-right">
          ${ud.rating ? `<div class="mrow-stars">${stars}</div>` : ''}
          ${badge}
        </div>
      </div>`;
  }).join('');

  return `
    <section class="mylist-section">
      <h3 class="mylist-section-title">${title} <span class="section-count">${items.length}</span></h3>
      <div class="mylist-rows">${rows}</div>
    </section>`;
}

/* ======================================================
   UTILITY
====================================================== */
function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ======================================================
   INIT & EVENT WIRING
====================================================== */
function init() {
  loadUserData();
  loadCustomItems();
  populateAddGenreSelect();
  populateGenreFilter();
  renderGrid();

  /* --- Tab buttons --- */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (btn.dataset.tab === 'mylist') {
        showPage('mylist');
        return;
      }

      showPage('browse');
      if (btn.dataset.tab === state.currentTab) return;
      state.currentTab  = btn.dataset.tab;
      state.genreFilter = 'all';
      state.search      = '';
      state.statusFilter= 'all';
      state.sortFilter  = 'default';
      document.getElementById('searchInput').value = '';
      document.getElementById('statusFilter').value= 'all';
      document.getElementById('sortFilter').value  = 'default';
      populateGenreFilter();
      renderGrid();
    });
  });

  /* --- Search --- */
  document.getElementById('searchInput').addEventListener('input', e => {
    state.search = e.target.value;
    renderGrid();
  });

  /* --- Genre filter --- */
  document.getElementById('genreFilter').addEventListener('change', e => {
    state.genreFilter = e.target.value;
    renderGrid();
  });

  /* --- Status filter --- */
  document.getElementById('statusFilter').addEventListener('change', e => {
    state.statusFilter = e.target.value;
    renderGrid();
  });

  /* --- Sort --- */
  document.getElementById('sortFilter').addEventListener('change', e => {
    state.sortFilter = e.target.value;
    renderGrid();
  });

  /* --- Clear filters (empty state button) --- */
  document.getElementById('clearFilters').addEventListener('click', () => {
    state.search       = '';
    state.genreFilter  = 'all';
    state.statusFilter = 'all';
    state.sortFilter   = 'default';
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = 'all';
    document.getElementById('statusFilter').value= 'all';
    document.getElementById('sortFilter').value  = 'default';
    renderGrid();
  });

  /* --- Modal close button --- */
  document.getElementById('modalClose').addEventListener('click', closeModal);

  /* --- Modal overlay background click --- */
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });

  /* --- Escape key --- */
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.getElementById('addModalOverlay').classList.contains('open')) {
      closeAddModal();
    } else if (state.openItemId) {
      closeModal();
    }
  });

  /* --- Modal: Complete button --- */
  document.getElementById('modalComplete').addEventListener('click', () => {
    if (state.openItemId) toggleComplete(state.openItemId);
  });

  /* --- Modal: Favorite button --- */
  document.getElementById('modalFavorite').addEventListener('click', () => {
    if (state.openItemId) toggleFavorite(state.openItemId);
  });

  /* --- Modal: Delete button (custom items only) --- */
  document.getElementById('modalDelete').addEventListener('click', () => {
    if (state.openItemId) deleteCustomItem(state.openItemId);
  });

  /* --- FAB --- */
  document.getElementById('fabAdd').addEventListener('click', openAddModal);

  /* --- Add modal: close button & overlay click --- */
  document.getElementById('addModalClose').addEventListener('click', closeAddModal);
  document.getElementById('addModalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('addModalOverlay')) closeAddModal();
  });

  /* --- Add modal: type toggle --- */
  document.querySelectorAll('.type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateCreditLabel(btn.dataset.type);
    });
  });

  /* --- Add modal: form submit --- */
  document.getElementById('addForm').addEventListener('submit', submitAddForm);

  /* --- Modal: Star rating --- */
  const stars = document.querySelectorAll('#modalStars .star');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      if (state.openItemId) setRating(state.openItemId, parseInt(star.dataset.value));
    });
    star.addEventListener('mouseenter', () => {
      const val = parseInt(star.dataset.value);
      renderModalStars(getItem(state.openItemId || '').rating, val);
    });
    star.addEventListener('mouseleave', () => {
      renderModalStars(getItem(state.openItemId || '').rating, 0);
    });
  });

  /* --- Modal: Save review --- */
  document.getElementById('btnSaveReview').addEventListener('click', () => {
    if (state.openItemId) saveReview(state.openItemId);
  });

  /* --- Save review on Ctrl+Enter inside textarea --- */
  document.getElementById('reviewText').addEventListener('keydown', e => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (state.openItemId) saveReview(state.openItemId);
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
