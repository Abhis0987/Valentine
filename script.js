let step = 0;

const days = [
  "🌹 Happy Rose Day, My Love",
  "💍 Will you be mine forever?",
  "🍫 Chocolate for you (I ate half 😋)",
  "🧸 You are my favourite teddy",
  "🤞 I promise to annoy you forever",
  "🤗 A tight hug for you",
  "❤️ Happy Valentine’s Day Madam Ji"
];

function yesClicked() {
  document.getElementById("buttons").style.display = "none";
  document.getElementById("nextBtn").style.display = "inline-block";
  document.getElementById("title").innerText = days[0];
}

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
