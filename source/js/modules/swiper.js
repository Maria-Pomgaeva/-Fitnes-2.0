<<<<<<< HEAD
// import swiper JS
export const initSwiper = function () {
  const swiperTrainers = new Swiper('.trainers__item', {
=======
export const initSwiper = function () {
  const swiperTrainers = new Swiper('.trainers__items', {
>>>>>>> d31ba32f509c1c698cdfc35ae86e23bc66a08f52
    navigation: {
      nextEl: '.trainers__swiper-btn-next',
      prevEl: '.trainers__swiper-btn-prev',
    },
  });

<<<<<<< HEAD
  const swiperComment = new Swiper('.comment__item', {
=======
  const swiperComment = new Swiper('.comment__items', {
>>>>>>> d31ba32f509c1c698cdfc35ae86e23bc66a08f52
    navigation: {
      nextEl: '.comment__swiper-btn-next',
      prevEl: '.comment__swiper-btn-prev',
    },
  });
};
