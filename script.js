// 1. SUPABASE CONFIGURATION
// Replace these with your actual keys from the Supabase Dashboard Settings
const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const grid = document.getElementById('beatGrid');
const mainPlayBtn = document.getElementById('main-play-btn');
let currentBeats = []; // Will hold data from DB

// 2. FETCH DATA FROM SUPABASE
async function fetchBeatsFromDB() {
    const { data, error } = await supabase
        .from('beats')
        .select('*');

    if (error) {
        console.error('Error fetching beats:', error);
        return;
    }

    currentBeats = data;
    renderBeats(currentBeats);
}

// 3. RENDER GRID
function renderBeats(beatsToRender) {
    grid.innerHTML = beatsToRender.map(beat => `
        <div class="beat-card" onclick="loadTrack(${beat.id})">
            <div style="position: relative;">
                <img src="${beat.art}" alt="${beat.title}">
                <i class="fa-solid fa-play play-overlay"></i>
            </div>
            <h3>${beat.title}</h3>
            <p style="color: #94a3b8;">${beat.producer}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                <span class="genre-badge">${beat.genre}</span>
                <strong>${beat.price}</strong>
            </div>
        </div>
    `).join('');
}

// 4. PLAYER LOGIC
function loadTrack(id) {
    const track = currentBeats.find(b => b.id === id);
    if (!track) return;

    document.getElementById('current-title').innerText = track.title;
    document.getElementById('current-producer').innerText = track.producer;
    document.getElementById('current-price').innerText = track.price;
    document.getElementById('current-art').src = track.art;
    
    mainPlayBtn.classList.remove('fa-play');
    mainPlayBtn.classList.add('fa-pause');
    
    console.log(`Now streaming: ${track.title}`);
    drawWaveform();
}

function drawWaveform() {
    const canvas = document.getElementById('waveform');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#c5a059'; // Gold wave
    
    for(let i = 0; i < 100; i++) {
        const height = Math.random() * 50;
        ctx.fillRect(i * 3, 25 - height/2, 2, height);
    }
}

mainPlayBtn.addEventListener('click', () => {
    mainPlayBtn.classList.toggle('fa-play');
    mainPlayBtn.classList.toggle('fa-pause');
});

// INITIALIZE APP
fetchBeatsFromDB();
drawWaveform();
