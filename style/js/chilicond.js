/*=============== SWIPER JS ===============*/
// Inisialisasi Swiper untuk baris pertama (6 produk)
let swiperCardsTop = new Swiper(".card__container:first-child .card__content", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination-top",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next-top",
    prevEl: ".swiper-button-prev-top",
  },

  breakpoints:{
    600: {
      slidesPerView: 3,
    },
    968: {
      slidesPerView: 4,
    },
  },
});

// Inisialisasi Swiper untuk baris kedua (7 produk)
let swiperCardsBottom = new Swiper(".card__container:last-child .card__content", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination-bottom",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next-bottom",
    prevEl: ".swiper-button-prev-bottom",
  },

  breakpoints:{
    600: {
      slidesPerView: 3,
    },
    968: {
      slidesPerView: 4,
    },
  },
});