window.addEventListener('DOMContentLoaded', function () {
  const newBookSwiper = new Swiper(".book_slider", {
    slidesPerView: 5,
    spaceBetween: 60,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  const image_arr = ['./assets/image/header/header_book_01.jpg', './assets/image/header/header_book_02.jpg', './assets/image/header/header_book_03.jpg', './assets/image/header/header_book_04.jpg']
  const BOOK00 = document.querySelector('.firstVisual');
  const BOOK01 = document.querySelector('.book_img_set .itm01');
  const BOOK02 = document.querySelector('.book_img_set .itm02');
  const BOOK03 = document.querySelector('.book_img_set .itm03');
  const BOOK04 = document.querySelector('.book_img_set .itm04');
  BOOK00.style.backgroundImage = `url(${image_arr[0]})`;
  BOOK01.style.backgroundImage = `url(${image_arr[0]})`;
  BOOK02.style.backgroundImage = `url(${image_arr[1]})`;
  BOOK03.style.backgroundImage = `url(${image_arr[2]})`;
  BOOK04.style.backgroundImage = `url(${image_arr[3]})`;

  const FIG = document.querySelector('.book_img_set').children;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  const BOOK_IMG_LI = document.querySelector('.book_img_set');
  const BOOK_DESC_LI = document.querySelector('.book_desc');

  // HEADER 탭 메뉴 구현 코드
  BOOK_IMG_LI.addEventListener('click', function (e) {
    const FV = document.querySelector('.firstVisual');
    if (e.target != e.currentTarget) {
      let afterIndex = 0;
      // 클릭한 사진의 인덱스를 구하는 코드
      this.children.forEach((elm, idx) => {
        if (e.target == elm.children[0]) {
          afterIndex = idx;
        }
      })
      // BOOK_DESC 변경 이벤트
      BOOK_DESC_LI.children.forEach((elm, idx) => {
        elm.classList.remove('on');
        if (afterIndex == idx) {
          elm.classList.add('on');
        }
      });

      FV.style.backgroundImage = `url(${image_arr[afterIndex]})`;
    }

  })

});