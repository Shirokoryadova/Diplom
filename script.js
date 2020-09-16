const slider = document.querySelector('.works__swiper-container');

let mySwiper = new Swiper(slider, {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  slideClass:'works__swiper-slide',
  wrapperClass:'works__swiper-wrapper',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const btns = document.querySelectorAll('.btn');
const modals = document.querySelector('.form');
const modalOverlay = document.querySelector('.form__overlay');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('.data-path');
    modals.style.visibility = 'visible';
    modals.style.opacity = '1';
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target == modalOverlay) {
    modals.style.visibility = 'hidden';
    modals.style.opacity = '0';
    modals.style.transition = 'all ease-in-out 0.4s';
  }
});

$(document).ready(function(){
  $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-9999"});

  $('form').each(function () {
    $(this).validate({
      errorPlacement(error, element) {
        return true;
      },
      focusInvalid: false,
      rules: {
        Телефон: {
          required: true,
        },
        Имя: {
          required: true,
        },
        Почта: {
          required: true,
        }
      },
    })
  })
});