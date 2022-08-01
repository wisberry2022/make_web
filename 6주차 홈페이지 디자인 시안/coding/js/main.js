$(function () {
  var PlayingYTP = function (playObj, src, containElem) {
    $(playObj).YTPlayer({
      videoURL: src,
      containment: containElem,
      autoPlay: true,
      mute: false,
      ratio: '4/3',
      showControls: false,
      remember_last_time: false,
      loop: true,
    });
  }

  $('.main_visual').on('Init beforeChange', function (e, s, c) {
    var YTPArr = ['#bg_video', '#bg_video_02', '#bg_video_03'];
    console.log(c);
    $(YTPArr[c ? c : 0]).YTPPause();
  })

  $('.main_visual').on('afterChange', function (e, s, c) {
    var YTPArr = ['#bg_video', '#bg_video_02', '#bg_video_03'];
    console.log(c);
    // if (!c) { return 0; }
    $(YTPArr[c ? c : 0]).YTPPlay();
  })


  PlayingYTP('#bg_video', 'https://youtu.be/nDGv_jtZM0A', '.player01');
  PlayingYTP('#bg_video_02', 'https://youtu.be/GLkc8jtZGoU', '.player02');
  PlayingYTP('#bg_video_03', 'https://youtu.be/MdkFmOfRmNo', '.player03');






  $('.main_visual').slick({
    arrows: false,
    dots: true,
  });

  $('.icon_menu .xi-search').on('click', function () {
    $('.gnb .search_box').toggleClass('on');
  })
})