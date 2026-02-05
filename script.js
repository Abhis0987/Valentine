let step = 0;

const scenes = [
  { text: "🌹 Happy Rose Day, Baacha", emojis: ["🌹","❤️"], bg: "linear-gradient(135deg,#ff9a9e,#fad0c4)" },
  { text: "💍 Will you be mine forever?", emojis: ["💍","🥰"], bg: "linear-gradient(135deg,#fbc2eb,#a6c1ee)" },
  { text: "🍫 Chocolate Day for my sweet Baacha", emojis: ["🍫","😋"], bg: "linear-gradient(135deg,#d1913c,#ffd194)" },
  { text: "😘 A kiss full of love", emojis: ["😘","💋"], bg: "linear-gradient(135deg,#ff758c,#ff7eb3)" },
  { text: "❤️ Happy Valentine’s Day Baacha ❤️", emojis: ["❤️","💖","💘"], bg: "linear-gradient(135deg,#ff416c,#ff4b2b)", fireworks: true, letter: true },
  { text: "💍 Will you marry me, Baacha?", proposal: true }
];

function yesClicked() {
  document.getElementById("buttons").style.display = "none";
  document.getElementById("nextBtn").style.display = "inline-block";
  updateScene();
}

function nextPage() {
  step++;
  updateScene();
}

function updateScene() {
  const scene = scenes[step];
  document.getElementById("title").innerText = scene.text || "";
  document.body.style.background = scene.bg || document.body.style.background;

  if (scene.emojis) burstEmojis(scene.emojis);
  if (scene.fireworks) startFireworks();
  if (scene.letter) showLetter();
  if (scene.proposal) showProposal();
}

function burstEmojis(emojis) {
  for (let i = 0; i < 10; i++) {
    const e = document.createElement("div");
    e.className = "emoji";
    e.innerText = emojis[Math.floor(Math.random()*emojis.length)];
    e.style.left = Math.random()*100+"vw";
    e.style.top = Math.random()*80+"vh";
    document.body.appendChild(e);
    setTimeout(()=>e.remove(),1200);
  }
}

function startFireworks() {
  setInterval(() => {
    const f = document.createElement("div");
    f.className = "fire";
    f.innerText = "🎆";
    f.style.left = Math.random()*100+"vw";
    f.style.top = Math.random()*80+"vh";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),1500);
  }, 300);
}

function showLetter() {
  setTimeout(()=> {
    document.getElementById("letterPopup").style.display = "flex";
  }, 1200);
}

function closeLetter() {
  document.getElementById("letterPopup").style.display = "none";
}

function showProposal() {
  document.getElementById("buttons").innerHTML = `
    <button onclick="alert('She said YES 💖😭')">YES 💍</button>
    <button id="noBtn" onmouseover="moveNo()">NO 😈</button>
  `;
  document.getElementById("buttons").style.display = "block";
  document.getElementById("nextBtn").style.display = "none";
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.top = Math.random()*80+"%";
  btn.style.left = Math.random()*80+"%";
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

/* Floating hearts */
setInterval(()=>{
  const h=document.createElement("div");
  h.className="heart";
  h.innerText="❤️";
  h.style.left=Math.random()*100+"vw";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),8000);
},400);
