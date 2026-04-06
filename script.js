// Initialize Icons
lucide.createIcons();

// Mock Data - Representing a "Scalable" JSON structure
const beats = [
    { id: 1, title: "Midnight Fog", producer: "WaveMaker", genre: "Trap", bpm: 142, price: 29.99, art: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400" },
    { id: 2, title: "Lighthouse Echo", producer: "BeaconBeats", genre: "Lo-Fi", bpm: 90, price: 49.99, art: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400" },
    { id: 3, title: "Horizon", producer: "Skyline", genre: "Pop", bpm: 110, price: 199.99, art: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400" }
];

const beatGrid = document.getElementById('beat-grid');

// Render Beats
function renderBeats(data) {
    beatGrid.innerHTML = data.map(beat => `
        <div class="beat-card">
            <img src="${beat.art}" alt="${beat.title}" class="beat-art">
            <div class="beat-content">
                <h3>${beat.title}</h3>
                <p style="color: var(--text-dim)">${beat.producer}</p>
                <div style="margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">
                    <span>${beat.genre} • ${beat.bpm} BPM</span>
                    <button class="btn-primary" onclick="playTrack(${beat.id})">
                        Play
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Audio Player Logic
function playTrack(id) {
    const track = beats.find(b => b.id === id);
    document.getElementById('now-playing-title').innerText = track.title;
    document.getElementById('now-playing-producer').innerText = track.producer;
    document.getElementById('now-playing-img').src = track.art;
    
    // Simulate Waveform Movement
    const progress = document.getElementById('wave-progress');
    progress.style.width = "0%";
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) clearInterval(interval);
        width += 0.5;
        progress.style.width = width + "%";
    }, 100);

    console.log(`Playing: ${track.title} by ${track.producer}`);
}

// Search Functionality
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = beats.filter(b => 
        b.title.toLowerCase().includes(query) || 
        b.genre.toLowerCase().includes(query) ||
        b.producer.toLowerCase().includes(query)
    );
    renderBeats(filtered);
});

// Initial Load
renderBeats(beats);
