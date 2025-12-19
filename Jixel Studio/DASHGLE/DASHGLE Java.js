const images = [
  "../images/Screenshots/DASHGLE/Collect.png",
  "../images/Screenshots/DASHGLE/Dodge.png",
  "../images/Screenshots/DASHGLE/Gameplay.png",
  "../images/Screenshots/DASHGLE/Daily Rewards.png",
  "../images/Screenshots/DASHGLE/Power Ups.png",
  "../images/Screenshots/DASHGLE/Colors.png"
];

let currentIndex = 0;

const content = document.querySelector(".game-screen img");
const backButton = document.getElementById("backButton");
const changeButton = document.getElementById("changeButton");

function changeImage(newIndex) {
  // Fade out
  content.style.opacity = 0;

  setTimeout(() => {
    currentIndex = newIndex;
    content.src = images[currentIndex];

    // Fade in
    content.style.opacity = 1;
  }, 500); // match roughly half of the transition duration
}

backButton.addEventListener("click", () => {
  let newIndex = (currentIndex - 1 + images.length) % images.length;
  changeImage(newIndex);
});

changeButton.addEventListener("click", () => {
  let newIndex = (currentIndex + 1) % images.length;
  changeImage(newIndex);
});

// Auto-change every 10 seconds
setInterval(() => {
  let newIndex = (currentIndex + 1) % images.length;
  changeImage(newIndex);
}, 10000); // 10000ms = 10 seconds
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});