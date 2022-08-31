document.addEventListener('DOMContentLoaded', () => {
  function backgroundSlide() {
    const HEADER = document.querySelector('#header');
    const H_CON = document.querySelector('#header .container');
    const LOGO = document.querySelector('#header .container h1 img');
    const DESC = document.querySelectorAll('.program_desc');

    let idx = 1;
    let url_set = ['./assets/image/header/header_bg_01.jpg', './assets/image/header/header_bg_02.jpg',
      './assets/image/header/header_bg_03.jpg'];

    setInterval(function () {
      if (idx == 2) {
        H_CON.style.color = '#212121';
        LOGO.setAttribute('src', "./assets/image/logo/mbc-logo-b.png")
      } else {
        H_CON.style.color = '';
        LOGO.setAttribute('src', "./assets/image/logo/mbc-logo.png");
      }
      DESC.forEach((elm, index) => {
        elm.classList.remove('on');
        if (index == idx) {
          elm.classList.add('on');
        }
      })
      HEADER.style.background = `linear-gradient(to bottom, rgba(5, 18, 26, 0) 0, rgba(33, 33, 33, 1) 90%), url(${url_set[idx]})`;
      idx < 2 ? idx++ : idx = 0;

    }, 7000);
  }

  backgroundSlide();

  const BROAD_TAB = document.querySelector('.category_list');
  const CONTENTS_TAB = document.querySelectorAll('.contents_box');


  let BROAD_LIST = [...BROAD_TAB.children];

  BROAD_LIST.forEach((elm, idx) => {
    if (elm.classList.contains('on') && CONTENTS_TAB[idx].classList.contains('on')) {
      elm.classList.add('on');
      CONTENTS_TAB[idx].classList.add('on');
    }
    elm.addEventListener('click', function () {
      CONTENTS_TAB.forEach((elem) => {
        elem.classList.remove('on');
      })
      BROAD_LIST.forEach((el) => {
        el.classList.remove('on');
      })
      CONTENTS_TAB[idx].classList.add('on');
      elm.classList.add('on');
    })
  });


  const NOTICE_MENU = document.querySelector('#notice .lnb');
  const NOTICE_ML = [...NOTICE_MENU.children];

  const LIFE_CONTENTS = document.querySelectorAll('.tb_menu');

  NOTICE_ML.forEach((elm, idx) => {
    if (elm.classList.contains('on') && LIFE_CONTENTS[idx].classList.contains('on')) {
      elm.classList.add('on');
      LIFE_CONTENTS[idx].classList.add('on');
    }
    elm.addEventListener('click', function () {
      LIFE_CONTENTS.forEach((elem) => {
        elem.classList.remove('on');
      })
      NOTICE_ML.forEach((el) => {
        el.classList.remove('on');
      })
      LIFE_CONTENTS[idx].classList.add('on');
      elm.classList.add('on');
    })
  });
});
