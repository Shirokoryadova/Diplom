new WOW().init();

//Menu
function myFunction(x) {
  x.classList.toggle('change');
};

$(function() {
  
  //Dropdown toggle
  $('.header__burger').click(function(){
    $(this).next('.header__dropdown-list').toggle();
  });
  
  $(document).click(function(e) {
    let target = e.target;
    if ($(target).is('.header__burger')) {
      $('.header__dropdown-list').hide();
    }
  });
});

//Change work description
function changeText() {
  if ($(window).width() < 1024) {
      $('.works__description_change').text('Интернет-магазин детской одежды')
  } else {
      $('.works__description_change').text('Сайт магазина детской одежды')
  }

  if ($(window).width() < 768) {
    $('.works__description_change').text('Сайт магазина детской одежды')
  } else {
    $('.works__description_change').text('Интернет-магазин детской одежды')
  }
}

changeText()

$(window).resize(function () {
    changeText()
});


//Slider
const slider = document.querySelector('.works__swiper-container');

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  slideClass:'works__swiper-slide',
  wrapperClass:'works__swiper-wrapper',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
  breakpoints: {
    1026: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 37,
    }
  }
});

//Form
const btns = document.querySelectorAll('.btn-form');
const modals = document.querySelector('.form');
const modalOverlay = document.querySelector('.form__overlay');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('.data-path');
    modals.style.visibility = 'visible';
    modals.style.opacity = '1';
    $('body').addClass('scroll');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target == modalOverlay) {
    modals.style.visibility = 'hidden';
    modals.style.opacity = '0';
    modals.style.transition = 'opacity ease-in-out 0.4s';
    $('body').removeClass('scroll');
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
      submitHandler(form) {
        let th = $(form);

        $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: th.serialize(),
        }).done(() => {
          alert('Ваша заявка отправлена. Скоро мы свяжемся с вами!');
          setTimeout(function() {
            th.trigger('reset');
          }, 500);
        });
        return false;
      }
    });
  });
});
