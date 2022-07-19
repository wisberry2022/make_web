$(function () {
  $('#header .main_slider').slick({
    arrows: false,
    dots: true,
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 450) {
      $('.brand_intro .img_box').addClass('show');
    }
  })
})