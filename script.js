document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
  
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    setInterval(nextSlide, 7000); // Change slide every 7 seconds (7000 milliseconds)
  });