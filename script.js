/**
 * LIGHTHOUSE BEAT MARKETPLACE — app.js
 * Vanilla JS · Component-based · Modular Architecture
 * Covers: Beat data, Audio Player, Search/Filter, Modals, Cart, Producer Cards
 */

'use strict';

/* =====================================================
   1. MOCK DATA
   ===================================================== */

const BEAT_DATA = [
  {
    id: 'b001', title: 'Midnight Protocol', producer: 'KRXMS', producerId: 'p001',
    genre: 'Trap', mood: 'Dark', bpm: 140, key: 'F# min',
    price: 39, exclusivePrice: 499, plays: 21400, rating: 4.9, sales: 87,
    badge: 'trending', tags: ['Trap','Dark','140 BPM'],
    color: '#e5632a', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 'b002', title: 'Crystal Warfare', producer: 'SxulBeats', producerId: 'p002',
    genre: 'Drill', mood: 'Aggressive', bpm: 145, key: 'G min',
    price: 49, exclusivePrice: 599, plays: 18300, rating: 4.8, sales: 62,
    badge: 'new', tags: ['Drill','Aggressive','145 BPM'],
    color: '#9b5de5', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 'b003', title: 'Ocean Drive \'95', producer: 'Wavvv', producerId: 'p003',
    genre: 'R&B', mood: 'Chill', bpm: 92, key: 'D maj',
    price: 29, exclusivePrice: 349, plays: 9870, rating: 4.7, sales: 43,
    badge: null, tags: ['R&B','Chill','92 BPM'],
    color: '#00bbf9', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 'b004', title: 'Lagos Summer', producer: 'AfroKing_', producerId: 'p004',
    genre: 'Afrobeats', mood: 'Euphoric', bpm: 108, key: 'A maj',
    price: 35, exclusivePrice: 449, plays: 34200, rating: 5.0, sales: 128,
    badge: 'trending', tags: ['Afrobeats','Euphoric','108 BPM'],
    color: '#f7c59f', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 'b005', title: 'Cipher Ready', producer: 'BOOMKAP', producerId: 'p005',
    genre: 'Boom Bap', mood: 'Inspirational', bpm: 88, key: 'E min',
    price: 25, exclusivePrice: 299, plays: 7600, rating: 4.6, sales: 31,
    badge: null, tags: ['Boom Bap','Inspirational','88 BPM'],
    color: '#22c55e', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  },
  {
    id: 'b006', title: 'Neon Dreams', producer: 'SynthLxrd', producerId: 'p006',
    genre: 'Pop', mood: 'Euphoric', bpm: 120, key: 'C maj',
    price: 0, exclusivePrice: 199, plays: 5200, rating: 4.5, sales: 22,
    badge: null, tags: ['Pop','Euphoric','120 BPM'],
    color: '#ff6b9d', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 'b007', title: 'Rainy Season', producer: 'Wavvv', producerId: 'p003',
    genre: 'Lo-Fi', mood: 'Melancholic', bpm: 75, key: 'A min',
    price: 19, exclusivePrice: 249, plays: 12800, rating: 4.8, sales: 55,
    badge: null, tags: ['Lo-Fi','Melancholic','75 BPM'],
    color: '#7ab8f5', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
  },
  {
    id: 'b008', title: 'Dark Frequencies', producer: 'KRXMS', producerId: 'p001',
    genre: 'Trap', mood: 'Dark', bpm: 138, key: 'B min',
    price: 45, exclusivePrice: 549, plays: 16700, rating: 4.9, sales: 73,
    badge: 'exclusive', tags: ['Trap','Dark','138 BPM'],
    color: '#c0392b', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },
  {
    id: 'b009', title: 'Club Pressure', producer: 'SxulBeats', producerId: 'p002',
    genre: 'House', mood: 'Euphoric', bpm: 128, key: 'G maj',
    price: 55, exclusivePrice: 650, plays: 8400, rating: 4.7, sales: 38,
    badge: 'new', tags: ['House','Euphoric','128 BPM'],
    color: '#f39c12', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
  },
  {
    id: 'b010', title: 'Calor', producer: 'AfroKing_', producerId: 'p004',
    genre: 'Reggaeton', mood: 'Romantic', bpm: 96, key: 'F maj',
    price: 39, exclusivePrice: 399, plays: 27600, rating: 4.9, sales: 101,
    badge: 'trending', tags: ['Reggaeton','Romantic','96 BPM'],
    color: '#e74c3c', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
  },
  {
    id: 'b011', title: 'Mountain Echo', producer: 'BOOMKAP', producerId: 'p005',
    genre: 'Boom Bap', mood: 'Inspirational', bpm: 94, key: 'C min',
    price: 30, exclusivePrice: 380, plays: 6900, rating: 4.6, sales: 28,
    badge: null, tags: ['Boom Bap','Inspirational','94 BPM'],
    color: '#1abc9c', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3'
  },
  {
    id: 'b012', title: 'Glitch City', producer: 'SynthLxrd', producerId: 'p006',
    genre: 'Trap', mood: 'Aggressive', bpm: 150, key: 'D min',
    price: 60, exclusivePrice: 700, plays: 11200, rating: 4.8, sales: 48,
    badge: 'exclusive', tags: ['Trap','Aggressive','150 BPM'],
    color: '#8e44ad', art: null,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3'
  }
];

const PRODUCER_DATA = [
  { id: 'p001', name: 'KRXMS',     genre: 'Trap / Dark',    beats: 84,  sales: 1240, rating: 4.9, followers: '12.4K', color: '#e5632a' },
  { id: 'p002', name: 'SxulBeats', genre: 'Drill / Dark',   beats: 62,  sales: 890,  rating: 4.8, followers: '8.2K',  color: '#9b5de5' },
  { id: 'p003', name: 'Wavvv',     genre: 'R&B / Lo-Fi',    beats: 107, sales: 2100, rating: 4.9, followers: '22.1K', color: '#00bbf9' },
  { id: 'p004', name: 'AfroKing_', genre: 'Afrobeats',       beats: 58,  sales: 3200, rating: 5.0, followers: '41.3K', color: '#f7c59f' },
  { id: 'p005', name: 'BOOMKAP',   genre: 'Boom Bap / Hip-Hop', beats: 93, sales: 670, rating: 4.6, followers: '5.8K',  color: '#22c55e' },
  { id: 'p006', name: 'SynthLxrd', genre: 'Pop / House',    beats: 71,  sales: 980,  rating: 4.7, followers: '9.7K',  color: '#ff6b9d' },
];

const LICENSE_OPTIONS = [
  { id: 'basic',     name: 'Basic MP3',  multiplier: 1,    desc: 'MP3 · 50K streams' },
  { id: 'premium',   name: 'Premium WAV',multiplier: 2.2,  desc: 'WAV + MP3 · 500K streams' },
  { id: 'exclusive', name: 'Exclusive',  multiplier: null, desc: 'Full rights · Unlimited', isExclusive: true },
];

const SEARCH_SUGGESTIONS = [
  'trap beats', 'drill beats 2025', 'chill r&b beats', 'afrobeats free',
  'boom bap instrumentals', 'dark trap type beat', 'reggaeton beat',
  'lo-fi hip hop beats', 'pop beats 120 bpm', 'house music instrumental'
];

/* =====================================================
   2. STATE
   ===================================================== */

const state = {
  beats: [...BEAT_DATA],
  filteredBeats: [...BEAT_DATA],
  cart: [],
  favorites: new Set(),
  followedProducers: new Set(),
  currentBeat: null,
  isPlaying: false,
  selectedLicense: 'premium',
  activeSort: 'trending',
  filters: { genre: '', mood: '', bpm: '', price: '', license: '' },
  wavesurfer: null,
  beatModalWavesurfer: null,
  searchQuery: '',
  viewMode: 'grid',
};

/* =====================================================
   3. UTILITY HELPERS
   ===================================================== */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function fmt(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return String(n);
}

function fmtTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function fmtPrice(beat, licenseId) {
  if (licenseId === 'exclusive') return `$${beat.exclusivePrice}`;
  const lic = LICENSE_OPTIONS.find(l => l.id === licenseId);
  if (!lic) return `$${beat.price}`;
  if (beat.price === 0) return 'Free';
  return `$${Math.round(beat.price * lic.multiplier)}`;
}

function generateArtPlaceholder(beat) {
  return `
    <div class="beat-art-placeholder" aria-hidden="true">
      <span class="beat-art-initial" style="color:${beat.color}">${beat.title.charAt(0)}</span>
    </div>`;
}

function debounce(fn, delay) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
}

/* =====================================================
   4. BEAT CARD RENDERER
   ===================================================== */

function renderBeatCard(beat) {
  const isFav = state.favorites.has(beat.id);
  const priceDisplay = beat.price === 0 ? 'Free' : `$${beat.price}`;

  const artHtml = beat.art
    ? `<img src="${beat.art}" alt="${beat.title} cover art" loading="lazy" />`
    : generateArtPlaceholder(beat);

  const badgeHtml = beat.badge
    ? `<div class="beat-card-badge badge-${beat.badge}">${beat.badge}</div>`
    : '';

  const tagsHtml = beat.tags.slice(0, 3).map((t, i) => {
    const cls = i === 0 ? 'tag-genre' : i === 1 ? 'tag-mood' : 'tag-bpm';
    return `<span class="tag-chip ${cls}">${t}</span>`;
  }).join('');

  const card = document.createElement('article');
  card.className = 'beat-card';
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `${beat.title} by ${beat.producer}`);
  card.setAttribute('data-beat-id', beat.id);

  card.innerHTML = `
    ${badgeHtml}
    <div class="beat-art">
      ${artHtml}
      <div class="beat-art-overlay" aria-hidden="true">
        <button class="beat-play-btn ${state.currentBeat?.id === beat.id && state.isPlaying ? 'playing' : ''}"
                aria-label="${state.currentBeat?.id === beat.id && state.isPlaying ? 'Pause' : 'Play'} ${beat.title}"
                data-play="${beat.id}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            ${state.currentBeat?.id === beat.id && state.isPlaying
              ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
              : '<path d="M8 5v14l11-7z"/>'}
          </svg>
        </button>
      </div>
    </div>
    <div class="beat-body">
      <div class="beat-title">${beat.title}</div>
      <div class="beat-producer">by <a href="#" aria-label="View ${beat.producer}'s profile">${beat.producer}</a></div>
      <div class="beat-tags">${tagsHtml}</div>
    </div>
    <div class="beat-footer">
      <span class="beat-price ${beat.price === 0 ? 'beat-price-free' : ''}">${priceDisplay}</span>
      <div class="beat-meta-row">
        <span class="beat-plays">${fmt(beat.plays)} plays</span>
        <span class="beat-rating">${beat.rating}</span>
        <button class="beat-fav-btn ${isFav ? 'active' : ''}"
                aria-label="${isFav ? 'Remove from favorites' : 'Save to favorites'}"
                aria-pressed="${isFav}"
                data-fav="${beat.id}">
          ${isFav ? '♥' : '♡'}
        </button>
      </div>
    </div>`;

  // Events
  card.addEventListener('click', e => {
    const playBtn = e.target.closest('[data-play]');
    const favBtn = e.target.closest('[data-fav]');
    if (playBtn) { e.stopPropagation(); handlePlayBeat(beat.id); }
    else if (favBtn) { e.stopPropagation(); toggleFavorite(beat.id); }
    else { openBeatModal(beat.id); }
  });

  return card;
}

function renderSkeletonCards(count, container) {
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const sk = document.createElement('article');
    sk.className = 'beat-card skeleton';
    sk.setAttribute('role', 'listitem');
    sk.setAttribute('aria-hidden', 'true');
    sk.innerHTML = `
      <div class="beat-art" style="height:200px"></div>
      <div class="beat-body" style="gap:10px">
        <div class="beat-title" style="height:18px;border-radius:4px">&nbsp;</div>
        <div class="beat-producer" style="height:14px;border-radius:4px;width:60%">&nbsp;</div>
      </div>
      <div class="beat-footer" style="height:48px">&nbsp;</div>`;
    container.appendChild(sk);
  }
}

/* =====================================================
   5. PRODUCER CARD RENDERER
   ===================================================== */

function renderProducerCard(producer) {
  const isFollowing = state.followedProducers.has(producer.id);
  const card = document.createElement('article');
  card.className = 'producer-card';
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `${producer.name} — ${producer.genre} producer`);
  card.innerHTML = `
    <div class="producer-avatar" style="border-color:${producer.color}33"
         aria-hidden="true">${producer.name.charAt(0)}</div>
    <div class="producer-name">${producer.name}</div>
    <div class="producer-genre">${producer.genre}</div>
    <div class="producer-stats">
      <div class="pstat">
        <span class="pstat-num">${producer.beats}</span>
        <span class="pstat-label">Beats</span>
      </div>
      <div class="pstat">
        <span class="pstat-num">${producer.followers}</span>
        <span class="pstat-label">Followers</span>
      </div>
      <div class="pstat">
        <span class="pstat-num">${producer.rating}★</span>
        <span class="pstat-label">Rating</span>
      </div>
    </div>
    <button class="producer-follow-btn ${isFollowing ? 'following' : ''}"
            aria-pressed="${isFollowing}"
            data-follow="${producer.id}">
      ${isFollowing ? '✓ Following' : '+ Follow'}
    </button>`;

  $('[data-follow]', card)?.addEventListener('click', e => {
    e.stopPropagation();
    toggleFollow(producer.id);
  });

  return card;
}

/* =====================================================
   6. GRID POPULATION
   ===================================================== */

function populateBeatsGrid(container, beats, limit = 12) {
  container.innerHTML = '';
  const slice = beats.slice(0, limit);
  if (slice.length === 0) {
    container.innerHTML = `<p style="color:var(--clr-text-3);grid-column:1/-1;padding:var(--space-7) 0;text-align:center;">
      No beats match your filters. Try adjusting your search.</p>`;
    return;
  }
  slice.forEach(beat => container.appendChild(renderBeatCard(beat)));
}

function populateProducers() {
  const row = $('#producers-row');
  if (!row) return;
  row.innerHTML = '';
  PRODUCER_DATA.forEach(p => row.appendChild(renderProducerCard(p)));
}

/* =====================================================
   7. FILTER & SEARCH ENGINE
   ===================================================== */

function applyFilters() {
  const { genre, mood, bpm, price, license } = state.filters;
  const q = state.searchQuery.toLowerCase().trim();

  state.filteredBeats = state.beats.filter(beat => {
    if (q && !beat.title.toLowerCase().includes(q) &&
        !beat.producer.toLowerCase().includes(q) &&
        !beat.genre.toLowerCase().includes(q) &&
        !beat.mood.toLowerCase().includes(q)) return false;

    if (genre && beat.genre !== genre) return false;
    if (mood  && beat.mood !== mood)   return false;

    if (bpm) {
      const [lo, hi] = bpm.split('–').map(Number);
      if (hi ? (beat.bpm < lo || beat.bpm > hi) : beat.bpm < lo) return false;
    }

    if (price) {
      if (price === 'Free' && beat.price !== 0) return false;
      if (price === 'Under $25' && (beat.price === 0 || beat.price >= 25)) return false;
      if (price === '$25–$75'   && (beat.price < 25 || beat.price > 75)) return false;
      if (price === '$75–$200'  && (beat.price < 75 || beat.price > 200)) return false;
      if (price === '$200+'     && beat.price <= 200) return false;
    }

    if (license === 'Exclusive' && beat.badge !== 'exclusive') return false;
    if (license === 'Free'      && beat.price !== 0) return false;

    return true;
  });

  applySorting();
}

function applySorting() {
  const sorted = [...state.filteredBeats];
  switch (state.activeSort) {
    case 'new':       sorted.sort((a, b) => b.id.localeCompare(a.id)); break;
    case 'top-rated': sorted.sort((a, b) => b.rating - a.rating); break;
    case 'price-low': sorted.sort((a, b) => a.price - b.price); break;
    case 'exclusive': sorted.sort((a, b) => (a.badge === 'exclusive' ? -1 : 1)); break;
    default:          sorted.sort((a, b) => b.plays - a.plays); break; // trending
  }
  state.filteredBeats = sorted;
  refreshGrids();
}

function refreshGrids() {
  const grid1 = $('#beats-grid');
  const grid2 = $('#marketplace-grid');
  const count = $('#results-count');
  if (grid1) populateBeatsGrid(grid1, state.filteredBeats, 6);
  if (grid2) populateBeatsGrid(grid2, state.filteredBeats, 12);
  if (count) count.textContent = `Showing ${Math.min(12, state.filteredBeats.length)} of ${state.filteredBeats.length} beats`;
}

/* =====================================================
   8. AUDIO PLAYER
   ===================================================== */

function initGlobalPlayer(beat) {
  const player = $('#global-player');
  if (!player) return;
  player.hidden = false;

  $('#player-title').textContent  = beat.title;
  $('#player-producer').textContent = beat.producer;
  $('#player-bpm').textContent    = `${beat.bpm} BPM`;
  $('#player-key').textContent    = beat.key;

  const thumbImg = $('#player-thumb-img');
  thumbImg.src = beat.art || '';
  thumbImg.alt = beat.art ? `${beat.title} cover` : '';
  if (!beat.art) {
    $('#global-player .player-thumb').innerHTML = `
      <div style="width:48px;height:48px;display:flex;align-items:center;justify-content:center;
                  background:${beat.color}22;border-radius:var(--radius-sm)">
        <span style="font-family:var(--font-display);color:${beat.color};font-size:1.2rem">
          ${beat.title.charAt(0)}
        </span>
      </div>`;
  }

  // Destroy previous wavesurfer
  if (state.wavesurfer) {
    state.wavesurfer.destroy();
    state.wavesurfer = null;
  }

  const waveContainer = $('#waveform-container');
  waveContainer.innerHTML = '';

  if (typeof WaveSurfer !== 'undefined') {
    state.wavesurfer = WaveSurfer.create({
      container: waveContainer,
      waveColor: 'rgba(255,255,255,0.15)',
      progressColor: 'rgba(245,166,35,0.8)',
      cursorColor: 'var(--clr-accent)',
      height: 32,
      barWidth: 2,
      barRadius: 2,
      barGap: 1,
      normalize: true,
      interact: true,
      backend: 'WebAudio',
    });

    state.wavesurfer.load(beat.audio);

    state.wavesurfer.on('ready', () => {
      const dur = state.wavesurfer.getDuration();
      $('#player-duration').textContent = fmtTime(dur);
      if (state.isPlaying) state.wavesurfer.play();
    });

    state.wavesurfer.on('audioprocess', () => {
      const cur = state.wavesurfer.getCurrentTime();
      $('#player-current').textContent = fmtTime(cur);
      const total = state.wavesurfer.getDuration();
      waveContainer.setAttribute('aria-valuenow', Math.round((cur / total) * 100));
    });

    state.wavesurfer.on('finish', () => setPlayState(false));
    state.wavesurfer.on('error', err => console.warn('WaveSurfer error:', err));
  }

  updatePlayButton();
}

function handlePlayBeat(beatId) {
  const beat = BEAT_DATA.find(b => b.id === beatId);
  if (!beat) return;

  if (state.currentBeat?.id === beatId) {
    togglePlayback();
    return;
  }

  state.currentBeat = beat;
  state.isPlaying = true;
  initGlobalPlayer(beat);
  updateBeatCards();
}

function togglePlayback() {
  if (!state.wavesurfer) return;
  state.isPlaying = !state.isPlaying;
  state.isPlaying ? state.wavesurfer.play() : state.wavesurfer.pause();
  setPlayState(state.isPlaying);
  updateBeatCards();
}

function setPlayState(playing) {
  state.isPlaying = playing;
  updatePlayButton();
  updateBeatCards();
}

function updatePlayButton() {
  const playIcon  = $('#icon-play');
  const pauseIcon = $('#icon-pause');
  if (playIcon)  playIcon.hidden  = state.isPlaying;
  if (pauseIcon) pauseIcon.hidden = !state.isPlaying;
  const btn = $('#btn-play');
  if (btn) btn.setAttribute('aria-label', state.isPlaying ? 'Pause' : 'Play');
}

function updateBeatCards() {
  $$('.beat-play-btn').forEach(btn => {
    const id = btn.getAttribute('data-play');
    const isActive = state.currentBeat?.id === id && state.isPlaying;
    btn.classList.toggle('playing', isActive);
    btn.setAttribute('aria-label', isActive ? 'Pause' : 'Play');
    btn.innerHTML = isActive
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  });
}

/* =====================================================
   9. FAVORITES
   ===================================================== */

function toggleFavorite(beatId) {
  if (state.favorites.has(beatId)) {
    state.favorites.delete(beatId);
  } else {
    state.favorites.add(beatId);
  }
  // Update all fav buttons for this beat
  $$(`[data-fav="${beatId}"]`).forEach(btn => {
    const active = state.favorites.has(beatId);
    btn.classList.toggle('active', active);
    btn.textContent = active ? '♥' : '♡';
    btn.setAttribute('aria-pressed', active);
    btn.setAttribute('aria-label', active ? 'Remove from favorites' : 'Save to favorites');
  });
}

/* =====================================================
   10. FOLLOW PRODUCERS
   ===================================================== */

function toggleFollow(producerId) {
  if (state.followedProducers.has(producerId)) {
    state.followedProducers.delete(producerId);
  } else {
    state.followedProducers.add(producerId);
  }
  $$(`[data-follow="${producerId}"]`).forEach(btn => {
    const following = state.followedProducers.has(producerId);
    btn.classList.toggle('following', following);
    btn.setAttribute('aria-pressed', following);
    btn.textContent = following ? '✓ Following' : '+ Follow';
  });
}

/* =====================================================
   11. CART
   ===================================================== */

function addToCart(beat, licenseId) {
  const existing = state.cart.findIndex(i => i.beatId === beat.id && i.license === licenseId);
  if (existing > -1) {
    showToast('Already in cart', 'info');
    return;
  }
  const lic = LICENSE_OPTIONS.find(l => l.id === licenseId);
  const price = licenseId === 'exclusive' ? beat.exclusivePrice : Math.round(beat.price * lic.multiplier);
  state.cart.push({ beatId: beat.id, title: beat.title, producer: beat.producer, license: licenseId, licenseName: lic.name, price, color: beat.color });
  renderCart();
  showToast(`"${beat.title}" added to cart ✓`, 'success');
}

function removeFromCart(beatId, licenseId) {
  state.cart = state.cart.filter(i => !(i.beatId === beatId && i.license === licenseId));
  renderCart();
}

function renderCart() {
  const itemsEl  = $('#cart-items');
  const emptyEl  = $('#cart-empty');
  const footerEl = $('#cart-footer');
  const badge    = $('#cart-badge');
  const count    = state.cart.length;

  badge.hidden = count === 0;
  badge.textContent = count;
  if (count > 0) badge.removeAttribute('hidden');

  if (count === 0) {
    if (emptyEl)  emptyEl.hidden = false;
    if (footerEl) footerEl.hidden = true;
    if (itemsEl)  itemsEl.innerHTML = '';
    if (emptyEl)  itemsEl.appendChild(emptyEl);
    return;
  }

  if (emptyEl)  emptyEl.hidden = true;
  if (footerEl) footerEl.hidden = false;
  if (itemsEl) {
    itemsEl.innerHTML = '';
    state.cart.forEach(item => {
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.setAttribute('role', 'listitem');
      el.innerHTML = `
        <div class="cart-item-art"
             style="background:${item.color}22;display:flex;align-items:center;justify-content:center;
                    font-family:var(--font-display);color:${item.color};font-size:1.1rem">
          ${item.title.charAt(0)}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-license">${item.licenseName} · ${item.producer}</div>
        </div>
        <div class="cart-item-price">${item.price === 0 ? 'Free' : `$${item.price}`}</div>
        <button class="cart-item-remove" aria-label="Remove ${item.title} from cart"
                data-remove="${item.beatId}" data-lic="${item.license}">✕</button>`;
      el.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.beatId, item.license));
      itemsEl.appendChild(el);
    });
  }

  const subtotal = state.cart.reduce((sum, i) => sum + i.price, 0);
  const sub = $('#cart-subtotal');
  if (sub) sub.textContent = subtotal === 0 ? 'Free' : `$${subtotal}`;
}

/* =====================================================
   12. BEAT MODAL
   ===================================================== */

function openBeatModal(beatId) {
  const beat = BEAT_DATA.find(b => b.id === beatId);
  if (!beat) return;

  const modal = $('#modal-beat');
  modal.hidden = false;
  document.body.style.overflow = 'hidden';

  // Populate header
  $('#beat-modal-title').textContent = beat.title;
  $('#beat-modal-producer').textContent = `by ${beat.producer}`;
  const img = $('#beat-modal-img');
  if (beat.art) {
    img.src = beat.art;
    img.alt = `${beat.title} cover`;
  } else {
    img.parentElement.innerHTML = `
      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;
                  background:${beat.color}22;border-radius:var(--radius-lg)">
        <span style="font-family:var(--font-display);font-size:3rem;color:${beat.color}">${beat.title.charAt(0)}</span>
      </div>`;
  }

  // Tags
  const tagsEl = $('#beat-modal-tags');
  tagsEl.innerHTML = beat.tags.map((t, i) => {
    const cls = i === 0 ? 'tag-genre' : i === 1 ? 'tag-mood' : 'tag-bpm';
    return `<span class="tag-chip ${cls}">${t}</span>`;
  }).join('');
  tagsEl.innerHTML += `<span class="tag-chip tag-key">${beat.key}</span>`;

  // Stats
  $('#bm-plays').textContent  = `${fmt(beat.plays)} plays`;
  $('#bm-rating').textContent = `${beat.rating} ★`;
  $('#bm-sales').textContent  = `${beat.sales} sales`;

  // Mini waveform
  const waveEl = $('#beat-waveform');
  waveEl.innerHTML = '';
  if (state.beatModalWavesurfer) { state.beatModalWavesurfer.destroy(); state.beatModalWavesurfer = null; }
  if (typeof WaveSurfer !== 'undefined') {
    state.beatModalWavesurfer = WaveSurfer.create({
      container: waveEl,
      waveColor: 'rgba(255,255,255,0.12)',
      progressColor: 'rgba(245,166,35,0.7)',
      cursorColor: 'var(--clr-accent)',
      height: 56, barWidth: 2, barRadius: 2, barGap: 1, normalize: true,
    });
    state.beatModalWavesurfer.load(beat.audio);
  }

  // Play btn in modal
  const bmp = $('#beat-modal-play');
  if (bmp) {
    bmp.onclick = () => handlePlayBeat(beat.id);
  }

  // License options
  state.selectedLicense = 'premium';
  renderLicenseOptions(beat);

  // Fav btn
  const fav = $('#beat-modal-fav');
  const isFav = state.favorites.has(beat.id);
  fav.textContent = isFav ? '♥ Saved' : '♡ Save';
  fav.setAttribute('aria-label', isFav ? 'Remove from favorites' : 'Save to favorites');
  fav.onclick = () => {
    toggleFavorite(beat.id);
    const nowFav = state.favorites.has(beat.id);
    fav.textContent = nowFav ? '♥ Saved' : '♡ Save';
  };

  // Purchase btn
  const purchaseBtn = $('#beat-modal-purchase');
  updatePurchaseBtn(beat);
  purchaseBtn.onclick = () => {
    addToCart(beat, state.selectedLicense);
    closeModal('modal-beat');
    openCart();
  };

  // Trap focus
  trapFocus(modal);
}

function renderLicenseOptions(beat) {
  const container = $('#license-options');
  container.innerHTML = '';
  LICENSE_OPTIONS.forEach(lic => {
    const price = lic.isExclusive ? `$${beat.exclusivePrice}` : (beat.price === 0 ? 'Free' : `$${Math.round(beat.price * lic.multiplier)}`);
    const el = document.createElement('div');
    el.className = `license-option${state.selectedLicense === lic.id ? ' selected' : ''}`;
    el.setAttribute('role', 'radio');
    el.setAttribute('aria-checked', state.selectedLicense === lic.id);
    el.setAttribute('tabindex', '0');
    el.innerHTML = `
      <div class="lic-name">${lic.name}</div>
      <div class="lic-price">${price}</div>
      <div class="lic-desc">${lic.desc}</div>`;
    el.addEventListener('click', () => {
      state.selectedLicense = lic.id;
      renderLicenseOptions(beat);
      updatePurchaseBtn(beat);
    });
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); } });
    container.appendChild(el);
  });
}

function updatePurchaseBtn(beat) {
  const btn = $('#beat-modal-purchase');
  const priceEl = $('#beat-modal-price');
  if (!btn || !priceEl) return;
  const price = fmtPrice(beat, state.selectedLicense);
  priceEl.textContent = price;
}

/* =====================================================
   13. AUTH MODAL
   ===================================================== */

function openAuthModal(tab = 'login') {
  const modal = $('#modal-auth');
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  switchAuthTab(tab);
  trapFocus(modal);
}

function switchAuthTab(tab) {
  $$('.auth-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.authTab === tab);
    t.setAttribute('aria-selected', t.dataset.authTab === tab);
  });
  const loginPanel  = $('#auth-login');
  const signupPanel = $('#auth-signup');
  if (loginPanel)  loginPanel.hidden  = tab !== 'login';
  if (signupPanel) signupPanel.hidden = tab !== 'signup';
}

/* =====================================================
   14. MODAL HELPERS
   ===================================================== */

function closeModal(id) {
  const modal = $(`#${id}`);
  if (modal) {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (id === 'modal-beat' && state.beatModalWavesurfer) {
      state.beatModalWavesurfer.pause();
    }
  }
}

function trapFocus(el) {
  const focusable = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', el);
  if (!focusable.length) return;
  focusable[0].focus();
  el.addEventListener('keydown', function handler(e) {
    if (e.key !== 'Tab') return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
      e.preventDefault();
      (e.shiftKey ? last : first).focus();
    }
    if (el.hidden) el.removeEventListener('keydown', handler);
  });
}

/* =====================================================
   15. CART DRAWER
   ===================================================== */

function openCart() {
  const drawer = $('#cart-drawer');
  drawer.hidden = false;
  document.body.style.overflow = 'hidden';
  trapFocus(drawer);
}

function closeCart() {
  const drawer = $('#cart-drawer');
  drawer.hidden = true;
  document.body.style.overflow = '';
}

/* =====================================================
   16. TOAST NOTIFICATIONS
   ===================================================== */

let toastContainer = null;
function getToastContainer() {
  if (toastContainer) return toastContainer;
  toastContainer = document.createElement('div');
  toastContainer.id = 'toast-container';
  Object.assign(toastContainer.style, {
    position: 'fixed', bottom: '100px', left: '50%', transform: 'translateX(-50%)',
    zIndex: '9999', display: 'flex', flexDirection: 'column', gap: '8px',
    alignItems: 'center', pointerEvents: 'none',
  });
  toastContainer.setAttribute('role', 'status');
  toastContainer.setAttribute('aria-live', 'polite');
  toastContainer.setAttribute('aria-atomic', 'false');
  document.body.appendChild(toastContainer);
  return toastContainer;
}

function showToast(msg, type = 'info') {
  const container = getToastContainer();
  const toast = document.createElement('div');
  const colors = { success: 'var(--clr-success)', info: 'var(--clr-teal)', error: 'var(--clr-danger)' };
  Object.assign(toast.style, {
    background: 'var(--clr-surface-2)',
    border: `1px solid ${colors[type] || colors.info}`,
    borderRadius: '999px',
    padding: '10px 20px',
    fontSize: '0.85rem',
    color: 'var(--clr-text)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    animation: 'toastIn 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards',
    whiteSpace: 'nowrap',
  });
  toast.textContent = msg;
  if (!document.querySelector('#toast-keyframes')) {
    const style = document.createElement('style');
    style.id = 'toast-keyframes';
    style.textContent = `
      @keyframes toastIn { from { opacity:0; transform:translateY(12px) scale(0.92); } to { opacity:1; transform:translateY(0) scale(1); } }
      @keyframes toastOut { from { opacity:1; transform:translateY(0) scale(1); } to { opacity:0; transform:translateY(-8px) scale(0.92); } }
    `;
    document.head.appendChild(style);
  }
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.25s ease forwards';
    setTimeout(() => toast.remove(), 260);
  }, 2800);
}

/* =====================================================
   17. SEARCH UI
   ===================================================== */

function setupSearch() {
  const input = $('#search-input');
  const suggestions = $('#search-suggestions');
  if (!input || !suggestions) return;

  const doSearch = debounce(q => {
    state.searchQuery = q;
    applyFilters();
    showSuggestions(q);
  }, 280);

  input.addEventListener('input', e => doSearch(e.target.value));
  input.addEventListener('focus', () => { if (input.value) showSuggestions(input.value); });
  input.addEventListener('blur', () => setTimeout(() => { suggestions.hidden = true; }, 160));
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { suggestions.hidden = true; input.blur(); }
  });
}

function showSuggestions(q) {
  const suggestions = $('#search-suggestions');
  if (!suggestions) return;
  if (!q.trim()) { suggestions.hidden = true; return; }
  const matches = SEARCH_SUGGESTIONS
    .filter(s => s.includes(q.toLowerCase()))
    .concat(
      BEAT_DATA.filter(b => b.title.toLowerCase().includes(q.toLowerCase())).map(b => b.title)
    ).slice(0, 7);

  if (!matches.length) { suggestions.hidden = true; return; }
  suggestions.hidden = false;
  suggestions.innerHTML = matches.map((s, i) =>
    `<div class="suggestion-item" role="option" tabindex="-1" id="sug-${i}">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
      ${s}
    </div>`
  ).join('');

  $$('.suggestion-item', suggestions).forEach(item => {
    item.addEventListener('mousedown', () => {
      const input = $('#search-input');
      input.value = item.textContent.trim();
      state.searchQuery = input.value;
      applyFilters();
      suggestions.hidden = true;
    });
  });
}

/* =====================================================
   18. FILTER CONTROLS
   ===================================================== */

function setupFilters() {
  const filterMap = {
    '#filter-genre':   'genre',
    '#filter-mood':    'mood',
    '#filter-bpm':     'bpm',
    '#filter-price':   'price',
    '#filter-license': 'license',
  };

  Object.entries(filterMap).forEach(([sel, key]) => {
    const el = $(sel);
    if (!el) return;
    el.addEventListener('change', () => {
      state.filters[key] = el.value;
      applyFilters();
    });
  });

  const resetBtn = $('#filter-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      Object.keys(state.filters).forEach(k => state.filters[k] = '');
      $$('.filter-select').forEach(s => s.value = '');
      state.searchQuery = '';
      const input = $('#search-input');
      if (input) input.value = '';
      applyFilters();
      showToast('Filters cleared', 'info');
    });
  }

  $$('.sort-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.sort-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.activeSort = tab.dataset.sort;
      applySorting();
    });
  });

  // Mood cards
  $$('.mood-card').forEach(card => {
    card.addEventListener('click', () => {
      const mood = card.dataset.mood;
      state.filters.mood = mood;
      const moodSelect = $('#filter-mood');
      if (moodSelect) moodSelect.value = mood;
      applyFilters();
      const marketplaceSection = $('#section-marketplace');
      if (marketplaceSection) marketplaceSection.scrollIntoView({ behavior: 'smooth' });
      showToast(`Showing ${mood} beats`, 'info');
    });
  });
}

/* =====================================================
   19. VIEW TOGGLE (Grid / List)
   ===================================================== */

function setupViewToggles() {
  const btnGrid = $('#view-grid');
  const btnList = $('#view-list');
  if (!btnGrid || !btnList) return;

  btnGrid.addEventListener('click', () => setView('grid'));
  btnList.addEventListener('click', () => setView('list'));
}

function setView(mode) {
  state.viewMode = mode;
  const grid = $('#marketplace-grid');
  if (grid) grid.classList.toggle('list-view', mode === 'list');
  $$('.view-btn').forEach(b => {
    const isActive = b.id === `view-${mode}`;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', isActive);
  });
}

/* =====================================================
   20. MOBILE NAV
   ===================================================== */

function setupMobileNav() {
  const toggle = $('#nav-toggle');
  const menu   = $('#mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = !menu.hidden;
    menu.hidden = open;
    toggle.classList.toggle('open', !open);
    toggle.setAttribute('aria-expanded', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  });

  $$('#mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.hidden = true;
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* =====================================================
   21. GLOBAL PLAYER CONTROLS
   ===================================================== */

function setupPlayerControls() {
  const btnPlay = $('#btn-play');
  const btnPrev = $('#btn-prev');
  const btnNext = $('#btn-next');
  const btnMute = $('#btn-mute');
  const volSlider = $('#volume-slider');

  btnPlay?.addEventListener('click', togglePlayback);

  btnPrev?.addEventListener('click', () => {
    const idx = state.filteredBeats.findIndex(b => b.id === state.currentBeat?.id);
    const prev = state.filteredBeats[idx - 1];
    if (prev) handlePlayBeat(prev.id);
  });

  btnNext?.addEventListener('click', () => {
    const idx = state.filteredBeats.findIndex(b => b.id === state.currentBeat?.id);
    const next = state.filteredBeats[idx + 1];
    if (next) handlePlayBeat(next.id);
  });

  btnMute?.addEventListener('click', () => {
    if (state.wavesurfer) state.wavesurfer.setMuted(!state.wavesurfer.getMuted?.());
  });

  volSlider?.addEventListener('input', () => {
    const vol = volSlider.value / 100;
    if (state.wavesurfer) state.wavesurfer.setVolume(vol);
    // Update gradient
    volSlider.style.background = `linear-gradient(to right, var(--clr-accent) 0%, var(--clr-accent) ${volSlider.value}%, var(--clr-surface-2) ${volSlider.value}%)`;
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
    if (e.key === ' ' && state.currentBeat) { e.preventDefault(); togglePlayback(); }
    if (e.key === 'Escape') {
      closeModal('modal-auth');
      closeModal('modal-beat');
      closeCart();
    }
  });
}

/* =====================================================
   22. EVENT DELEGATION & MISC
   ===================================================== */

function setupGlobalEvents() {
  // Auth modal triggers
  $('#btn-login')?.addEventListener('click', () => openAuthModal('login'));
  $('#btn-signup')?.addEventListener('click', () => openAuthModal('signup'));
  $('#hero-browse-btn')?.addEventListener('click', () => {
    $('#section-marketplace')?.scrollIntoView({ behavior: 'smooth' });
  });
  $('#hero-sell-btn')?.addEventListener('click', () => openAuthModal('signup'));
  $('#btn-producer-signup')?.addEventListener('click', () => openAuthModal('signup'));

  // Auth tabs
  $$('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => switchAuthTab(tab.dataset.authTab));
  });

  // Account type selector
  $$('.account-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.account-type-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    });
  });

  // Modal close buttons
  $$('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
  });

  // Close modals on overlay click
  $$('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // Cart
  $('#cart-fab')?.addEventListener('click', openCart);
  $('#cart-backdrop')?.addEventListener('click', closeCart);
  $('[data-close-cart]')?.addEventListener('click', closeCart);
  $('#btn-checkout')?.addEventListener('click', () => {
    if (state.cart.length === 0) { showToast('Your cart is empty', 'error'); return; }
    showToast('Redirecting to secure checkout… (demo)', 'info');
  });

  // Load more
  $('#btn-load-more')?.addEventListener('click', () => {
    const grid = $('#marketplace-grid');
    const current = $$('.beat-card:not(.skeleton)', grid).length;
    const next = state.filteredBeats.slice(current, current + 6);
    next.forEach(beat => grid.appendChild(renderBeatCard(beat)));
    if (current + 6 >= state.filteredBeats.length) {
      $('#btn-load-more').disabled = true;
      $('#btn-load-more').textContent = 'All beats loaded';
    }
  });

  // Player buy btn
  $('#player-buy-btn')?.addEventListener('click', () => {
    if (state.currentBeat) openBeatModal(state.currentBeat.id);
  });

  // Hero scroll cue
  const heroBadge = $('.hero-badge');
  if (heroBadge) {
    heroBadge.addEventListener('click', () => {
      $('#section-trending')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

/* =====================================================
   23. INTERSECTION OBSERVER — lazy card animations
   ===================================================== */

function setupScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  $$('.beat-card, .producer-card, .mood-card, .pricing-card, .service-card').forEach((el, i) => {
    el.style.cssText += `opacity:0;transform:translateY(20px);transition:opacity 0.5s ease ${i * 50}ms,transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 50}ms;`;
    obs.observe(el);
    el.addEventListener('transitionstart', () => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, { once: true });
  });

  const obsReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obsReveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  $$('.beat-card, .producer-card, .mood-card, .pricing-card, .service-card').forEach(el => obsReveal.observe(el));
}

/* =====================================================
   24. INIT
   ===================================================== */

function init() {
  // Render initial grids
  const grid1 = $('#beats-grid');
  const grid2 = $('#marketplace-grid');
  if (grid1) {
    renderSkeletonCards(6, grid1);
    setTimeout(() => populateBeatsGrid(grid1, state.filteredBeats, 6), 600);
  }
  if (grid2) {
    renderSkeletonCards(12, grid2);
    setTimeout(() => populateBeatsGrid(grid2, state.filteredBeats, 12), 800);
  }

  populateProducers();
  renderCart();

  // Setup all interactions
  setupSearch();
  setupFilters();
  setupViewToggles();
  setupMobileNav();
  setupPlayerControls();
  setupGlobalEvents();

  // Delayed scroll animations after paint
  requestAnimationFrame(() => setTimeout(setupScrollAnimations, 1000));

  // Update results count
  const count = $('#results-count');
  if (count) count.textContent = `Showing 12 of ${state.beats.length} beats`;

  console.log('%c🏮 LIGHTHOUSE BEAT MARKETPLACE', 'color:#f5a623;font-size:1.4rem;font-weight:bold;font-family:monospace');
  console.log('%c v1.0 · Loaded successfully', 'color:#9999aa;font-size:0.8rem');
}

// Boot on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
