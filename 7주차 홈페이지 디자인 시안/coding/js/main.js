$(function () {
  $('header .main_slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });

  // $('.product .slide_box .left_slider').slick({
  //   arrows: false,
  //   slidesToShow: 1,
  // });

  $('.product .slide_box .right_slider').slick({
    arrows: false,
    slidesToShow: 4,
  });

  $('header .main_slider').on('afterChange', function (e, s, c) {
    $('.main_visual .desc_list .desc_box').eq(c).toggleClass('on').siblings().removeClass('on');
  });

  $('.product .right_slider').on('afterChange', function (e, s, c) {
    $('.product .left_slider>.prd_desc').eq(c).toggleClass('on').siblings().removeClass('on');
  });
})