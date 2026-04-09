const beats = [
  {
    title: "Dark Trap Beat",
    genre: "Trap",
    mood: "Dark",
    bpm: 140,
    price: 29.99,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Chill R&B Groove",
    genre: "R&B",
    mood: "Chill",
    bpm: 90,
    price: 19.99,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Aggressive Hip Hop",
    genre: "Hip Hop",
    mood: "Aggressive",
    bpm: 150,
    price: 39.99,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];

const container = document.getElementById("beatContainer");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const moodFilter = document.getElementById("moodFilter");
const player = document.getElementById("audioPlayer");
const nowPlaying = document.getElementById("nowPlaying");

function renderBeats(data) {
  container.innerHTML = "";

  data.forEach(beat => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${beat.title}</h3>
      <div class="meta">${beat.genre} • ${beat.mood} • ${beat.bpm} BPM</div>
      <div class="price">$${beat.price}</div>
      <button class="play-btn">Play</button>
    `;

    card.querySelector(".play-btn").addEventListener("click", () => {
      player.src = beat.audio;
      player.play();
      nowPlaying.textContent = "Now Playing: " + beat.title;
    });

    container.appendChild(card);
  });
}

function filterBeats() {
  const search = searchInput.value.toLowerCase();
  const genre = genreFilter.value;
  const mood = moodFilter.value;

  const filtered = beats.filter(beat => {
    return (
      (!genre || beat.genre === genre) &&
      (!mood || beat.mood === mood) &&
      beat.title.toLowerCase().includes(search)
    );
  });

  renderBeats(filtered);
}

searchInput.addEventListener("input", filterBeats);
genreFilter.addEventListener("change", filterBeats);
moodFilter.addEventListener("change", filterBeats);

renderBeats(beats);
