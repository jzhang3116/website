const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const navItem = document.getElementsByClassName('link');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    navUL.classList.add('ul-background');
})