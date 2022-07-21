$(function () {
  $('#header .main_slider').slick({
    arrows: false,
    dots: true,
  });

  $(window).scroll(function () {
    const TEMP = document.querySelector('.temp_box');
    TEMP.innerHTML = $(this).scrollTop();
    if ($(this).scrollTop() > 450) {
      console.log($(this).scrollTop());
      $('.brand_intro .img_box').addClass('show');
      if ($(this).scrollTop() > 1600) {
        $('main .sims .inner').addClass('hide');
        setTimeout(function (e) {
          $('main .btf').addClass('sticky');
          $('main .sims').addClass('changeBackground');
        }, 500);
      }
      if ($(this).scrollTop() > 2800) {
        $('main .btf .inner').addClass('hide');
        setTimeout(function (e) {
          $('main .fifa').addClass('sticky');
          $('main .fifa .intro_img_01').addClass('after_show');
          $('main .sims').addClass('doubleChange');

        }, 500);
      }
    }
  })
})