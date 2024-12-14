window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.about-item');

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      element.classList.add('fade-inup');
    }
  });
});

window.addEventListener('scroll', () => {
  const elements = document.querySelector('.img-container-pro');

    const rect = elements.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      elements.classList.add('fade-inup');
    }
});

window.addEventListener('scroll', () => {
  const elements = document.querySelector('.text-pro');

    const rect = elements.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      elements.classList.add('fade-inup');
    }
});


window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.persone-item');

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      element.classList.add('fade-inup');
    }
  });
});


