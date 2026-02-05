let step = 0;

const scenes = [
  { text: "🌹 Happy Rose Day, My Love", emojis: ["🌹","💐","❤️"], bg: "linear-gradient(135deg,#ff9a9e,#fad0c4)" },
  { text: "💍 Will you be mine forever?", emojis: ["💍","🥰","❤️"], bg: "linear-gradient(135deg,#fbc2eb,#a6c1ee)" },
  { text: "🍫 Chocolate for you (I ate half 😋)", emojis: ["🍫","😋","❤️"], bg: "linear-gradient(135deg,#d1913c,#ffd194)" },
  { text: "🧸 You are my favourite teddy", emojis: ["🧸","💕","❤️"], bg: "linear-gradient(135deg,#fbc8d4,#9795f0)" },
  { text: "😘 A sweet kiss just for you", emojis: ["😘","💋","❤️"], bg: "linear-gradient(135deg,#ff758c,#ff7eb3)" },
  { text: "🤗 A warm hug for you", emojis: ["🤗","💞","❤️"], bg: "linear-gradient(135deg,#a18cd1,#fbc2eb)" },
  { text: "❤️ Happy Valentine’s Day Madam Ji", emojis: ["❤️","💖","💘"], bg: "linear-gradient(135deg,#ff416c,#ff4b2b)" }
];

function yesClicked() {
  document.getElementById("buttons").style.display = "none";
  document.getElementById("nextBtn").style.display = "inline-block";
  updateScene();
}

function nextPage() {
  step++;
  if (step < scenes.length) {
    updateScene();
  } else {
    document.getElementById("title").innerText = "I Love You Forever ❤️";
    document.getElementById("nextBtn").style.display = "none";
    burstEmojis(["💖","💘","❤️","🥰"]);
  }
}

function updateScene() {
  const scene = scenes[step];
  document.getElementById("title").innerText = scene.text;
  document.body.style.background = scene.bg;
  burstEmojis(scene.emojis);
}

function burstEmojis(emojis) {
  const container = document.getElementById("emoji-container");
  for (let i = 0; i < 12; i++) {
    const e = document.createElement("div");
    e.className = "emoji";
    e.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    e.style.left = Math.random() * 100 + "vw";
    e.style.top = Math.random() * 80 + "vh";
    container.appendChild(e);
    setTimeout(() => e.remove(), 1200);
  }
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

// Floating hearts continuously
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.getElementById("heart-container").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 400);
