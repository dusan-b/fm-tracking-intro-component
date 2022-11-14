const body = document.querySelector('body');
const toggleButton = document.querySelector('.menu-btn');
const buttonLabel = document.querySelector('.menu-btn__label');

toggleButton.addEventListener('click', function () {
  if (body.classList.contains('is-active')) {
    body.classList.remove('is-active');
    this.setAttribute('aria-expanded', 'false');
    buttonLabel.innerHTML = 'Open menu';
  } else {
    body.classList.add('is-active');
    this.setAttribute('aria-expanded', 'true');
    buttonLabel.innerHTML = 'Close menu';
  }
});