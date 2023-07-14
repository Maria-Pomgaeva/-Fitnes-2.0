// import swiper JS
export const initSwiper = function () {
  const swiperTrainers = new Swiper('.trainers__item', {
    navigation: {
      nextEl: '.trainers__swiper-btn-next',
      prevEl: '.trainers__swiper-btn-prev',
    },
  });

  const swiperComment = new Swiper('.comment__item', {
    navigation: {
      nextEl: '.comment__swiper-btn-next',
      prevEl: '.comment__swiper-btn-prev',
    },
  });
};
