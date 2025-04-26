document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carousel = document.querySelector('.carousel-container');
    let currentIndex = 0;
    let autoPlayInterval;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.setAttribute('aria-hidden', 'true');
        if (i === index) {
          slide.classList.add('active');
          slide.setAttribute('aria-hidden', 'false');
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    function startAutoPlay() {
      autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    });

    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    if (slides.length > 0) {
      showSlide(currentIndex);
      startAutoPlay();
    }
});