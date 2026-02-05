let step = 0;

const scenes = [
  { text: "🌹 Happy Rose Day, Baacha", emojis: ["🌹","❤️"] },
  { text: "💍 Will you be mine forever?", emojis: ["💍","🥰"] },
  { text: "🍫 Chocolate Day for my sweet Baacha", emojis: ["🍫","😋"] },
  { text: "😘 A kiss full of love", emojis: ["😘","💋"] },
  { text: "❤️ Happy Valentine’s Day Baacha ❤️", emojis: ["❤️","💖","💘"], fireworks: true, letter: true },
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
  const s = scenes[step];
  document.getElementById("title").innerText = s.text || "";

  if (s.emojis) burstEmojis(s.emojis);
  if (s.fireworks) startFireworks();
  if (s.letter) showLetter();
  if (s.proposal) showProposal();
}

function burstEmojis(arr) {
  for (let i = 0; i < 10; i++) {
    const e = document.createElement("div");
    e.className = "emoji";
    e.innerText = arr[Math.floor(Math.random()*arr.length)];
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
  setTimeout(()=>{
    document.getElementById("letterPopup").style.display="flex";
  }, 1200);
}

function closeLetter() {
  document.getElementById("letterPopup").style.display="none";
}

function showProposal() {
  document.getElementById("buttons").innerHTML = `
    <button onclick="finalYes()">YES 💍</button>
    <button id="noBtn" onmouseover="moveNo()">NO 😈</button>
  `;
  document.getElementById("buttons").style.display="block";
  document.getElementById("nextBtn").style.display="none";
}

function finalYes() {
  document.body.style.background = "linear-gradient(135deg,#ff0844,#ffb199)";
  document.getElementById("buttons").style.display="none";

  document.getElementById("title").innerHTML = `
    💖 She said YES 💖<br><br>
    <span style="font-size:16px">
      From today till forever,<br>
      my heart is yours, Baacha 💍<br><br>
      I promise love, respect,<br>
      and a lifetime of happiness ❤️
    </span>
  `;

  setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.innerText=["❤️","💖","💍","💘"][Math.floor(Math.random()*4)];
    h.style.left=Math.random()*100+"vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),8000);
  },200);
}

function moveNo() {
  const btn=document.getElementById("noBtn");
  btn.style.position="absolute";
  btn.style.top=Math.random()*80+"%";
  btn.style.left=Math.random()*80+"%";
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

/* Floating hearts always */
setInterval(()=>{
  const h=document.createElement("div");
  h.className="heart";
  h.innerText="❤️";
  h.style.left=Math.random()*100+"vw";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),8000);
},500);
