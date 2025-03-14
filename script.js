const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slides.clientWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.children.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});
