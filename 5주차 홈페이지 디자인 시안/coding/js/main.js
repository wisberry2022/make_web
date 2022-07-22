$(function () {
  var onSticky = function (hideObject, stickyObject, changeBgObject, className, time) {
    $(hideObject).addClass('hide');
    setTimeout(function (e) {
      $(stickyObject).addClass('sticky');
      $(changeBgObject).addClass(className);
    }, time)
  }

  var onSticky_img = function (hideObject, stickyObject, aftershowObject, changeBgObject, className, time) {
    $(hideObject).addClass('hide');
    setTimeout(function (e) {
      $(stickyObject).addClass('sticky');
      $(aftershowObject).addClass('after_show');
      $(changeBgObject).addClass(className);
    }, time)
  }


  $('#header .main_slider').slick({
    arrows: false,
    dots: true,
  });

  $(window).scroll(function () {
    const TEMP = document.querySelector('.temp_box');
    TEMP.innerHTML = $(this).scrollTop();
  });

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

  $(window).scroll(function () {
    if ($(this).scrollTop() > $('main .brand_intro').offset().top) {
      $('.scroll_up').addClass('opac');
    }
    if ($(this).scrollTop() < $('main .brand_intro').offset().top) {
      $('.scroll_up').removeClass('opac');
    }
  });

  $('.scroll_up').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 2000);
  })

})