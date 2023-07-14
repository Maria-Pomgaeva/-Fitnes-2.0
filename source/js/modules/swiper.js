// import swiper JS
import Swiper, {Navigation} from 'swiper';

export const initSwiper = function () {
  const swiperTrainers = new Swiper('.trainers__items', {
    modules: [Navigation],
    navigation: {
      nextEl: '.trainers__swiper-btn-next',
      prevEl: '.trainers__swiper-btn-prev',
    },
  });

  const swiperComment = new Swiper('.comment__items', {
    modules: [Navigation],
    navigation: {
      nextEl: '.comment__swiper-btn-next',
      prevEl: '.comment__swiper-btn-prev',
    },
  });
};
