  // core version + navigation, pagination modules:
  import Swiper, { Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/swiper.min.css';

const customerReviewSwiper = document.querySelector('.mySwiper');

const swiper = new Swiper(customerReviewSwiper, {
  modules: [Pagination],

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

});
