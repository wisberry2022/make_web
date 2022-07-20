$(function () {
  $('#header .main_slider').slick({
    arrows: false,
    dots: true,
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 450) {
      $('.brand_intro .img_box').addClass('show');
      if ($(this).scrollTop() > 1600) {
        $('main .sims .inner').addClass('hide');
        setTimeout(function (e) {
          $('main .btf').addClass('sticky');
          $('main .sims').addClass('changeBackground');
        }, 500);
      }
    }
  })
})