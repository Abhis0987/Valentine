let step = 0;

const days = [
  "🌹 Happy Rose Day, My Love",
  "💍 Will you be mine forever?",
  "🍫 Chocolate for you (I ate half 😋)",
  "🧸 You are my favourite teddy",
  "🤞 I promise to stay with you always",
  "🤗 A warm hug just for you",
  "❤️ Happy Valentine’s Day Madam Ji"
];

// YES click
function yesClicked() {
  document.getElementById("buttons").style.display = "none";
  document.getElementById("nextBtn").style.display = "inline-block";
  document.getElementById("title").innerText = days[0];
}

// Next message
function nextPage() {
  step++;
  if (step < days.length) {
    document.getElementById("title").innerText = days[step];
  } else {
    document.getElementById("title").innerText = "I Love You Forever ❤️";
    document.getElementById("nextBtn").style.display = "none";
  }
}

// NO button prank
function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
}

// Music play
function playMusic() {
  document.getElementById("bgMusic").play();
}

// Create floating hearts
const heartContainer = document.getElementById("heart-container");

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}, 300);
