// Swiper
var swiper = new Swiper(".Swiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 24,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 3
    },
    640: {
      slidesPerView: 4
    },
    920: {
      slidesPerView: 5
    }
  }
});
var swiper2 = new Swiper(".Swiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
var swiper = new Swiper(".Swiper3", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 24,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 3
    },
    640: {
      slidesPerView: 4
    },
    920: {
      slidesPerView: 5
    }
  }
});
var swiper4 = new Swiper(".Swiper4", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Switcher
const office = document.getElementById('office');
office.addEventListener('click', () => {
  const box1 = document.getElementsByClassName('Swiper1')[0];
  box1.style.display = 'none';
  const box2 = document.getElementsByClassName('Swiper2')[0];
  box2.style.display = 'none';
  const box3 = document.getElementsByClassName('Swiper3')[0];
  box3.style.display = 'block';
  const box4 = document.getElementsByClassName('Swiper4')[0];
  box4.style.display = 'block';
  client.classList.remove('active');
  office.classList.add('active');
});

const client = document.getElementById('client');
client.addEventListener('click', () => {
  const box1 = document.getElementsByClassName('Swiper1')[0];
  box1.style.display = 'block';
  const box2 = document.getElementsByClassName('Swiper2')[0];
  box2.style.display = 'block';
  const box3 = document.getElementsByClassName('Swiper3')[0];
  box3.style.display = 'none';
  const box4 = document.getElementsByClassName('Swiper4')[0];
  box4.style.display = 'none';
  office.classList.remove('active');
  client.classList.add('active');
});

