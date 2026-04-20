const SUPABASE_URL = "https://nfcpbzwfufbotrlytden.supabase.co"
const SUPABASE_KEY = "sb_publishable_E5GQnvQYduf2ODhxl1Cigw_J1w_57EN"
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// Mock Data for Testing
const beats = [
    { id: 1, title: "Midnight City", producer: "Lighthouse Pro", price: "$29.99", genre: "Synthwave", art: "https://picsum.photos/id/101/300/300" },
    { id: 2, title: "Deep Waters", producer: "WaveMaker", price: "$34.99", genre: "Trap", art: "https://picsum.photos/id/102/300/300" },
    { id: 3, title: "Golden Hour", producer: "Soul Samples", price: "$49.99", genre: "Lo-Fi", art: "https://picsum.photos/id/103/300/300" },
    { id: 4, title: "Aftermath", producer: "Beat Smith", price: "$24.99", genre: "Drill", art: "https://picsum.photos/id/104/300/300" }
];

const grid = document.getElementById('beatGrid');
const mainPlayBtn = document.getElementById('main-play-btn');

// Initialize Grid
function renderBeats() {
    grid.innerHTML = beats.map(beat => `
        <div class="beat-card" onclick="loadTrack(${beat.id})">
            <div style="position: relative;">
                <img src="${beat.art}" alt="${beat.title}">
                <i class="fa-solid fa-play play-overlay"></i>
            </div>
            <h3>${beat.title}</h3>
            <p style="color: #b3b3b3;">${beat.producer}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                <span class="genre-badge">${beat.genre}</span>
                <strong>${beat.price}</strong>
            </div>
        </div>
    `).join('');
}

// Player Logic
function loadTrack(id) {
    const track = beats.find(b => b.id === id);
    document.getElementById('current-title').innerText = track.title;
    document.getElementById('current-producer').innerText = track.producer;
    document.getElementById('current-price').innerText = track.price;
    document.getElementById('current-art').src = track.art;
    
    // Toggle play icon
    mainPlayBtn.classList.remove('fa-play');
    mainPlayBtn.classList.add('fa-pause');
    
    console.log(`Loading audio for: ${track.title}`);
    drawWaveform();
}

// Simple Waveform Visualization Mockup
function drawWaveform() {
    const canvas = document.getElementById('waveform');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FFD700';
    
    for(let i = 0; i < 100; i++) {
        const height = Math.random() * 50;
        ctx.fillRect(i * 3, 25 - height/2, 2, height);
    }
}

// Event Listeners
mainPlayBtn.addEventListener('click', () => {
    mainPlayBtn.classList.toggle('fa-play');
    mainPlayBtn.classList.toggle('fa-pause');
});

renderBeats();
drawWaveform();
