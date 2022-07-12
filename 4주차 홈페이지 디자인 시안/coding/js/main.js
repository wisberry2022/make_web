$(function () {
  // color_set = ['#bae2ee', '#f6d1a4', '#c0022e']
  $('main .main_slider').on('Init beforeChange', function (e, s, c) {
    console.log(e, s, c);
    color_set = ['#bae2ee', '#f6d1a4', '#c0022e'];
    $('.new_product .next_box, .new_product .prev_box').css('background', color_set[(c + 1) < 3 ? c + 1 : c = 0]);
  });

  $('#header_bg_video').YTPlayer({
    videoURL: 'https://youtu.be/LjRWdVdO50Y',
    containment: '#header',
    autoPlay: true,
    showControls: false,
    playOnlyIfVisible: true,
    quality: 'highres',
    ratio: '4/3',
  });

  $('main .new_product .main_slider').slick({
    arrows: false,
    fade: true,
    speed: 2000,
  });

  $('.new_product .prev_box').on('click', function () {
    $('.main_slider').slick('slickPrev');
  });

  $('.new_product .next_box').on('click', function () {
    $('.main_slider').slick('slickNext');
  });
})

