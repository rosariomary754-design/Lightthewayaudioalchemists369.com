const SUPABASE_URL = "https://nfcpbzwfufbotrlytden.supabase.co"
const SUPABASE_KEY = "sb_publishable_E5GQnvQYduf2ODhxl1Cigw_J1w_57EN"
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let user = null;
let cart = [];
let isSignUpMode = false;
let currentConversationId = null;

// AUTHENTICATION & MFA
async function handleAuth() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (isSignUpMode) {
        const { data, error } = await _supabase.auth.signUp({ email, password });
        if (error) alert(error.message);
        else alert("Verification email sent!");
    } else {
        const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
        if (error) alert(error.message);
        else {
            user = data.user;
            initSession();
        }
    }
}

async function initSession() {
    const { data } = await _supabase.auth.getUser();
    if (data.user) {
        user = data.user;
        document.getElementById('auth-modal').style.display = 'none';
        document.getElementById('auth-btn').style.display = 'none';
        document.getElementById('user-profile-nav').style.display = 'flex';
        document.getElementById('display-name').innerText = user.email;
        loadCart();
        subscribeToMessages();
    }
}

// MARKETPLACE LOGIC
async function fetchBeats() {
    const { data, error } = await _supabase.from('beats').select('*');
    if (data) renderBeats(data);
}

function renderBeats(beats) {
    const grid = document.getElementById('beatGrid');
    grid.innerHTML = beats.map(beat => `
        <div class="beat-card" onclick="loadTrack('${beat.id}')">
            <img src="${beat.art_url}" alt="${beat.title}">
            <h3>${beat.title}</h3>
            <p>${beat.genre}</p>
            <button class="btn-outline" onclick="startNegotiation('${beat.producer_id}')">Chat with Producer</button>
        </div>
    `).join('');
}

// CART & PURCHASING
async function loadCart() {
    const { data } = await _supabase.from('profiles').select('cart').eq('id', user.id).single();
    cart = data?.cart || [];
    document.getElementById('cart-count').innerText = cart.length;
}

async function addToCart(beatId) {
    if(!user) return openAuth();
    cart.push(beatId);
    await _supabase.from('profiles').update({ cart }).eq('id', user.id);
    document.getElementById('cart-count').innerText = cart.length;
}

// REAL-TIME CHAT & COLLAB
async function startNegotiation(producerId) {
    if(!user) return openAuth();
    toggleChat();
    // Logic to find or create conversation between user and producer
    const { data } = await _supabase.from('conversations').select('id').or(`participant_a.eq.${user.id},participant_b.eq.${user.id}`);
    currentConversationId = data[0]?.id;
    loadMessages();
}

function subscribeToMessages() {
    _supabase.channel('room1')
    .on('postgres_changes', { event: 'INSERT', table: 'messages' }, payload => {
        const msgList = document.getElementById('chat-messages');
        msgList.innerHTML += `<div><b>${payload.new.sender_id === user.id ? 'You' : 'Seller'}:</b> ${payload.new.content}</div>`;
    }).subscribe();
}

async function sendMsg() {
    const content = document.getElementById('msg-input').value;
    await _supabase.from('messages').insert([{ conversation_id: currentConversationId, sender_id: user.id, content }]);
    document.getElementById('msg-input').value = '';
}

// DROPDOWN SERVICES
function showInfo(type) {
    const infoMap = {
        tags: "Producer tags ensure your brand is protected. We offer custom vocal tags for $50.",
        rights: "All beats include non-exclusive rights unless exclusive is negotiated in chat.",
        splits: "Standard marketplace split is 50/50 publishing between producer and artist."
    };
    alert(infoMap[type]);
}

window.onload = () => { fetchBeats(); initSession(); };
