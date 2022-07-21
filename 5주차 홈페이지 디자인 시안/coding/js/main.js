$(function () {
  $('#header .main_slider').slick({
    arrows: false,
    dots: true,
  });

  console.log($('main .brand_intro').offset().top);
  console.log($('main .sims').offset());
  console.log($('main .btf').offset());
  console.log($('main .fifa').offset());

  $(window).scroll(function() {
    const TEMP = document.querySelector('.temp_box');
    TEMP.innerHTML = $(this).scrollTop();
  })

  var onSticky = function(hideObject, stickyObject, changeBgObject, className, time) {
    $(hideObject).addClass('hide');
    setTimeout(function(e) {
      $(stickyObject).addClass('sticky');
      $(changeBgObject).addClass(className);
    }, time)
  }

  var onSticky_img = function(hideObject, stickyObject, aftershowObject, changeBgObject, className, time) {
    $(hideObject).addClass('hide');
    setTimeout(function(e) {
      $(stickyObject).addClass('sticky');
      $(aftershowObject).addClass('after_show');
      $(changeBgObject).addClass(className);
    }, time)
  }

  var unSticky = function(hideObject, stickyObject, changeBgObject, className, time) {
    $(hideObject).removeClass('hide');
    setTimeout(function(e) {
      $(stickyObject).removeClass('sticky');
      $(changeBgObject).removeClass(className);
      
    }, time)
  }

  var bgSet = ['../assets/image/section/game_intro/background.jpg', '../assets/image/section/game_intro/battlefield/battlefield_section_Bg.jpg', '../assets/image/section/game_intro/fifa/fifa_big_bg.jpg'];

  $(window).scroll(function () {
    if ($(this).scrollTop() > 450) {
      $('.brand_intro .img_box').addClass('show');
      if ($(this).scrollTop() > 1600) {
        onSticky('main .sims .inner', 'main .btf', 'main .sims', 'changeBackground', 500);
      }
      if ($(this).scrollTop() > 2800) {
        onSticky_img('main .btf .inner', 'main .fifa', 'main .fifa .intro_img_01', 'main .sims', 'doubleChange', 500);
        console.log(cnt);
      }
    }
  })

  
})