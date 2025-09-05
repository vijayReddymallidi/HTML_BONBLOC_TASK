let index = 0;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");

document.querySelector(".next").onclick = () => {
  index++;
  if (index >= slides.length) index = 0; // loop back to first
  track.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector(".prev").onclick = () => {
  index--;
  if (index < 0) index = slides.length - 1; // go to last
  track.style.transform = `translateX(-${index * 100}%)`;
};
