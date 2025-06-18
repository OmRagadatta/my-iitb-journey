// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});

// interractive info
function revealMemory() {
  const memories = [
    "Late night walks are always the best 🌌",
    "Late night working with a lab group named Five phones 🎪",
    "Learning how to create music 🎛️",
    "Solving NYT games for hours with friends ☕",
    "That Unity VR demo that finally worked after 3 crashes 😅",
    "Playing VR games in the workplace 😁"
  ];
  const memory = memories[Math.floor(Math.random() * memories.length)];
  document.getElementById("memory").innerText = memory;
}

// Quotes
const quoteBox = document.getElementById("quote-box");
const quotes = [
  "Just keep going, no matter how tough it gets.",
  "You were born to be real, not perfect.",
  "In the darkest night, even the stars shine brighter.",
  "Walk your path, even if you walk alone.",
  "Even all the scars from your mistakes make up your constellation",
  "Decide for yourself what it means to be happy ",
  "Your journey is your own masterpiece."
];
let quoteIndex = 0;
function rotateQuotes() {
  quoteBox.innerHTML = `<p>"${quotes[quoteIndex]}"</p>`;
  quoteIndex = (quoteIndex + 1) % quotes.length;
}
setInterval(rotateQuotes, 4000);

// Slideshow
let slideIndex = 1;
function showSlides(n) {
  let slides = document.querySelectorAll(".slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  slides.forEach(s => s.style.display = "none");
  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

window.onload = () => {
  rotateQuotes();
  showSlides(slideIndex);
};
