export const initSwiper = function () {
  const swiperTrainers = new Swiper ('.trainers__items', {
    navigation: {
      nextEl: '.trainers__swiper-button--next',
      prevEl: '.trainers__swiper-button--prev',
    },

    slideToClickedSlide: true,
    autoHeight: true,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  const swiperComment = new Swiper('.comment__items', {
    navigation: {
      nextEl: '.comment__swiper-button-next',
      prevEl: '.comment__swiper-button-prev',
    },

    slideToClickedSlide: true,
    autoHeight: true,
    slidesPerView: 1,
  });
};
