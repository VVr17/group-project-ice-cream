// core version + navigation, pagination modules:
  import Swiper, { Navigation } from 'swiper';


const modalSwiper = document.querySelector('.mySwiper1');

const swiper = new Swiper(modalSwiper, {
  modules: [Navigation],

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
