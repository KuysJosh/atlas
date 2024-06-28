const checkBtn = document.getElementById('checkbtn');
const nav = document.querySelector('nav');

checkBtn.addEventListener('click', () => {
  nav.classList.toggle('overlay-open');
});
