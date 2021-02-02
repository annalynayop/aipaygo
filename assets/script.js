const header = document.querySelector('header');
const navList = document.querySelector('.nav__list');
const toggler = document.querySelector('.btn__toggler');
const heroSection = document.querySelector('.hero__section');

let topOfNav = header.offsetTop;
const heroSectionHeight = heroSection.offsetHeight;


function toggleMenu() {
    navList.classList.toggle('nav__list--show');
}

function fixNav() {
    if (window.scrollY >= topOfNav) {
      document.body.classList.add('header--fixed');
    } else {
      document.body.classList.remove('header--fixed');
    }
}

window.addEventListener('scroll', fixNav);
toggler.addEventListener('click', toggleMenu);