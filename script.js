/**
 * Lighthouse Beats - Core Frontend Logic
 */

// Mock Database of Beats
const beats = [
    { id: 1, title: "Lighthouse Glow", producer: "GoldLine Beats", price: "$29.99", bpm: 140, art: "https://picsum.photos/id/1/400/400" },
    { id: 2, title: "Midnight Sea", producer: "Wave Master", price: "$34.99", bpm: 95, art: "https://picsum.photos/id/2/400/400" },
    { id: 3, title: "Golden Shores", producer: "Producer X", price: "$49.99", bpm: 128, art: "https://picsum.photos/id/3/400/400" },
    { id: 4, title: "Beacon Light", producer: "The Captain", price: "$24.99", bpm: 160, art: "https://picsum.photos/id/4/400/400" }
];

const grid = document.getElementById('beat-grid');
const playerTitle = document.getElementById('player-title');
const playerProducer = document.getElementById('player-producer');
const playerArt = document.getElementById('player-art');
const playerPrice = document.getElementById('player-price');
const masterPlay = document.getElementById('master-play');

/**
 * Render Marketplace Beats
 */
function initMarketplace() {
    grid.innerHTML = beats.map(beat => `
        <div class="beat-card" onclick="selectTrack(${beat.id})">
            <div class="card-img">
                <img src="${beat.art}" alt="${beat.title}">
                <div class="play-overlay">
                    <i class="fa fa-play"></i>
                </div>
            </div>
            <div style="padding: 15px;">
                <h3 style="font-size: 1.1rem;">${beat.title}</h3>
                <p style="color: #A1A1AA; font-size: 0.9rem;">${beat.producer}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                    <span style="color: #D4AF37; font-weight: bold;">${beat.price}</span>
                    <span style="font-size: 0.8rem; border: 1px solid #333; padding: 2px 6px;">${beat.bpm} BPM</span>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Handle Track Selection and Player Updates
 */
window.selectTrack = function(id) {
    const track = beats.find(b => b.id === id);
    if (!track) return;

    // Update UI
    playerTitle.innerText = track.title;
    playerProducer.innerText = track.producer;
    playerPrice.innerText = track.price;
    playerArt.src = track.art;

    // Simulation of Audio Playback
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
    console.log(`Now playing: ${track.title} by ${track.producer}`);
    
    // In a real app, this would trigger WaveSurfer.load(track.url)
    simulateWaveform();
};

/**
 * Mock Waveform Visualization
 */
function simulateWaveform() {
    const container = document.querySelector('.wave-mock');
    container.innerHTML = ''; // Clear
    for(let i = 0; i < 60; i++) {
        const bar = document.createElement('div');
        const h = Math.random() * 30 + 5;
        bar.style.cssText = `
            width: 3px; 
            height: ${h}px; 
            background: #D4AF37; 
            margin: 0 1px;
            display: inline-block;
            border-radius: 2px;
        `;
        container.appendChild(bar);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initMarketplace();
    simulateWaveform();
});
