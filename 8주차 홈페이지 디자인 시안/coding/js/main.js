window.addEventListener('DOMContentLoaded', function () {
  const left_swiper = new Swiper(".left_slider", {
    slidesPerView: 4,
  });

  const right_swiper = new Swiper(".right_slider", {
    slidesPerView: 1,
    loop: true,
  });
});