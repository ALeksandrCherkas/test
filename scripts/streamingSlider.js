document.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.querySelector(".streaming__slider-wrapper");
    const slider = document.querySelector(".streaming__slider");
    const cardWidth = 435 + 24; 
    let isDragging = false;
    let startX;
    let scrollStart;
    let lastInteraction = Date.now();
  

    const originalCards = Array.from(slider.children);
    const cardCount = originalCards.length;
  
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      slider.appendChild(clone);
    });
  
    sliderWrapper.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX;
      scrollStart = sliderWrapper.scrollLeft;
      sliderWrapper.style.cursor = "grabbing";
      lastInteraction = Date.now();
    });
  
    window.addEventListener("mouseup", () => {
      isDragging = false;
      sliderWrapper.style.cursor = "grab";
    });
  
    sliderWrapper.addEventListener("mouseleave", () => {
      isDragging = false;
      sliderWrapper.style.cursor = "grab";
    });
  
    sliderWrapper.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const dx = e.pageX - startX;
      sliderWrapper.scrollLeft = scrollStart - dx;
      lastInteraction = Date.now();
    });
  
    function autoScrollStep() {
      if (!isDragging && Date.now() - lastInteraction > 3000) {

        const targetScroll = sliderWrapper.scrollLeft + cardWidth;
  

        if (targetScroll >= cardWidth * cardCount) {
          sliderWrapper.scrollLeft = 0;
        } else {
          sliderWrapper.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
          });
        }
      }
    }

    setInterval(autoScrollStep, 3000);
  });
  