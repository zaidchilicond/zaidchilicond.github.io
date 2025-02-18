/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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

const cards = document.querySelectorAll('.card__article');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const img = card.querySelector('.card__img');
    img.style.transform = 'scale(1.2)';
  });
  
  card.addEventListener('mouseleave', () => {
    const img = card.querySelector('.card__img');
    img.style.transform = 'scale(1)';
  });
});