const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
                770: { slidesPerView: 2},
                1200: { slidesPerView: 3},
              },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});