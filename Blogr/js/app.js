/* DESKTOP LOGIC */
    /* GLOBAL VARIABLES */
const navOptions = [...document.getElementsByClassName('sub-container')];
const navInfo = [...document.getElementsByClassName('extra-nav-info')];

    /* EVENT LISTENERS */
navOptions.forEach((link , i) => link.addEventListener('click' , e => {
    navInfo[i].classList.toggle('hide');
}));

    /* FUNCTIONS */

/* MOBILE LOGIC */
const hamburgerBtn = document.getElementsByClassName('hamburger-menu')[0]
const mobileMenu = document.getElementsByClassName('mobile-menu-container')[0];
const mobileNavLinks = [...document.getElementsByClassName('mobile-sub-container')];
const additionalNavInfo = [...document.getElementsByClassName('mobile-extra-nav-info')];
let mobileLinkText = [];

hamburgerBtn.addEventListener('click' , e => mobileMenu.classList.toggle('hide-mobile'));
mobileNavLinks.forEach( (link , i) => {
    mobileLinkText.push(link.childNodes[1]);
    link.childNodes[1].addEventListener('click' , e => {
        additionalNavInfo[i].classList.toggle('hide-extra-info');
    })
});