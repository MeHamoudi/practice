const btn = document.querySelector('.js-btn');
const circle = document.querySelector('.js-circle');

const professional = document.querySelector('.professional-price');
const basic = document.querySelector('.basic-price');
const master = document.querySelector('.master-price');

btn.addEventListener('click', () => {
  if (!circle.classList.contains('right')) {
    circle.classList.add('right');
    basic.textContent = 19.99;
    professional.textContent = 24.99;
    master.textContent = 39.99;
  } else {
    circle.classList.remove('right');
    basic.textContent = 199.99;
    professional.textContent = 249.99;
    master.textContent = 399.99;
  }
})