// Supabase Configuration
const SUPABASE_URL = "https://nfcpbzwfufbotrlytden.supabase.co";
const SUPABASE_KEY = "YOUR_ANON_KEY"; // Ensure your actual anon key is placed here
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let user = null;
let cart = [];
let favorites = [];

// Mock Database (Includes streams for trending, BPM, etc.)
const beats = [
    { id: 1, title: "Midnight City", producer: "Lighthouse Pro", price: 29.99, genre: "Synthwave", bpm: 120, streams: 5000, art: "https://placehold.co/300" },
    { id: 2, title: "Deep Waters", producer: "WaveMaker", price: 34.99, genre: "Trap", bpm: 140, streams: 12000, art: "https://placehold.co/300" },
    { id: 3, title: "Golden Hour", producer: "Soul Samples", price: 49.99, genre: "Lo-Fi", bpm: 85, streams: 8000, art: "https://placehold.co/300" }
];

// --- SECURITY: 10 MINUTE INACTIVITY AUTOLOGOUT ---
let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function logout() {
        if (user) {
            alert("You have been logged out due to 10 minutes of inactivity for your security.");
            signOut();
        }
    }
    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 600000); // 10 minutes = 600000 ms
    }
};
inactivityTime();

// --- INITIALIZATION ---
window.onload = () => { renderBeats(beats); }

function renderBeats(data) {
    const grid = document.getElementById('beatGrid');
    grid.innerHTML = data.map(beat => `
        <div class="beat-card">
            <img src="${beat.art}" alt="${beat.title}">
            <h3>${beat.title}</h3>
            <p>${beat.producer} (Rating: 4.8/5 ⭐)</p>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                <span class="genre-badge">${beat.genre} | ${beat.bpm} BPM</span>
                <strong>$${beat.price}</strong>
            </div>
            <div style="margin-top: 15px; display:flex; gap:10px;">
                <button class="btn-outline" onclick="toggleFavorite(${beat.id})"><i class="fa-solid fa-heart"></i></button>
                <button class="btn-gold" onclick="openCheckout()">Buy / License</button>
            </div>
        </div>
    `).join('');
}

// --- SEARCH & FILTERING ---
function filterBeats(type) {
    let filtered = beats;
    const search = document.getElementById('searchInput')?.value.toLowerCase() || "";
    const genre = document.getElementById('genreFilter')?.value || "";
    
    if (type === 'Trending') {
        filtered = filtered.sort((a, b) => b.streams - a.streams); // Highest streams first
    } else {
        filtered = filtered.filter(b => b.title.toLowerCase().includes(search));
        if (genre) filtered = filtered.filter(b => b.genre === genre);
    }
    renderBeats(filtered);
}

// --- DASHBOARD ROUTING ---
function toggleDashboard() {
    const dash = document.getElementById('dashboard-view');
    const market = document.getElementById('marketplace-view');
    if (dash.style.display === 'none') {
        dash.style.display = 'block';
        market.style.display = 'none';
        showDashTab('settings'); // Default tab
    } else {
        dash.style.display = 'none';
        market.style.display = 'block';
    }
}

function showDashTab(tab) {
    const content = document.getElementById('dash-content-area');
    const supportHTML = `
        <h3>Support & Policies</h3>
        <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Settings</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Platform Status: Online</a></li>
        </ul>
    `;
    
    const views = {
        'favorites': `<h3>Your Favorites</h3><p>You have ${favorites.length} saved tracks.</p>`,
        'collabs': `<h3>Collaborations</h3><p>Manage your 50/50 splits and split sheets here.</p>`,
        'negotiations': `<h3>Private Chats</h3><p>All chats are end-to-end recorded for safety. Select a user to chat.</p>`,
        'support': supportHTML,
        'settings': `<h3>Security</h3><button class="btn-outline">Enable 2FA Authenticator</button>`
    };
    content.innerHTML = views[tab] || `<h3>${tab.toUpperCase()}</h3><p>Feature loading...</p>`;
}

// --- CHECKOUT & LICENSING ---
function openCheckout() {
    document.getElementById('checkout-modal').style.display = 'flex';
}

function processPayment() {
    const agreed = document.getElementById('signOff').checked;
    if (!agreed) return alert("You and the producer must agree to the licensing terms to proceed.");
    
    // Simulate Stripe Redirect
    alert("Redirecting to Stripe Secure Checkout...");
    document.getElementById('checkout-modal').style.display = 'none';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function openAuth() { document.getElementById('auth-modal').style.display = 'flex'; }
function toggleFavorite(id) { alert("Added to favorites!"); favorites.push(id); }

// Dropdown Info
function showInfo(type) {
    const infoMap = {
        tags: "Producer tags available for custom order.",
        rights: "Non-Exclusive = Stream limits. Exclusive = Full rights. See checkout for details.",
        splits: "Standard split is 50/50 publishing. Sign split sheets immediately.",
        custom: "Hire our producers for editing, mixing, or custom beat generation."
    };
    alert(infoMap[type]);
}
