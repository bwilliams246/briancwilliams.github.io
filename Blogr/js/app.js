/* DESKTOP LOGIC */
const navOptions = [...document.getElementsByClassName('sub-container')];
const navInfo = [...document.getElementsByClassName('extra-nav-info')];
const columnSections = [...document.getElementsByClassName('two-columns')];

navOptions.forEach((link , i) => link.addEventListener('click' , e => {
    navInfo[i].classList.toggle('hide');
}));

/* MOBILE LOGIC */
const hamburgerBtn = document.getElementsByClassName('hamburger-menu')[0]
const mobileMenu = document.getElementsByClassName('mobile-menu-container')[0];
const mobileNavLinks = [...document.getElementsByClassName('mobile-sub-container')];
const additionalNavInfo = [...document.getElementsByClassName('mobile-extra-nav-info')];

/* Opens / displays the mobile menu on click */
hamburgerBtn.addEventListener('click' , e => mobileMenu.classList.toggle('hide-mobile'));

/* Loops through each link container, adds a click listener to the 
   <p> child node, and displays the additional navbar links
*/
mobileNavLinks.forEach( (link , i) => link.childNodes[1].addEventListener('click' , e => {
        additionalNavInfo[i].classList.toggle('hide-extra-info');
    })
);

/* ANIMATIONS SECTION */
const showText = textArr => {
    textArr.forEach( elem => {
        if (elem.isIntersecting) {
            elem.target.classList.add('visible');
        }
        else elem.target.classList.remove('visible');
    });
};

let options = {
    rootMargin: '-5%',
    threshold: .1
};

let observer = new IntersectionObserver(showText , options);

console.log(columnSections);
columnSections.forEach( section => {
    observer.observe(section);
});