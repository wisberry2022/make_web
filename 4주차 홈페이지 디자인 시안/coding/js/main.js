$(function () {
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
  });

  $('.new_product .prev_box').on('click', function () {
    $('.main_slider').slick('slickPrev');
  });

  $('.new_product .next_box').on('click', function () {
    $('.main_slider').slick('slickNext');
  });
})

