document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".about__button")
  const loginForm = document.querySelector(".loginForm")
  const slider = document.querySelector(".gifsSlider");
  const track = slider.querySelector(".gifSlider__cards");
  const cards = track.children;
  const cardCount = cards.length;

  let isDragging = false;
  let startX;
  let scrollStart;
  let lastInteraction = Date.now();
  const cardWidth = 673 + 37; 


  for (let i = 0; i < cardCount; i++) {
    const clone = cards[i].cloneNode(true);
    track.appendChild(clone);
  }

  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    scrollStart = slider.scrollLeft;
    slider.style.cursor = "grabbing";
    lastInteraction = Date.now();
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    slider.style.cursor = "grab";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dx = e.pageX - startX;
    slider.scrollLeft = scrollStart - dx;
    lastInteraction = Date.now();
  });

  function autoScroll() {
    const now = Date.now();
    if (now - lastInteraction > 3000) {
      slider.scrollLeft += cardWidth;


      if (slider.scrollLeft >= cardWidth * cardCount) {
        slider.scrollLeft = 0;
      }
    }
  }

  button.addEventListener('click', () => {
    loginForm.scrollIntoView({ behavior: 'smooth' });
  })
  setInterval(autoScroll, 3000);
});