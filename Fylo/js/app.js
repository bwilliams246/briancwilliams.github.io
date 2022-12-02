let allSections = [...document.getElementsByClassName('section')];
let options = {
    rootMargin: "-5%",
    threshold: 1
};

const displaySections =  entries => {
    entries.forEach (entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hide');
            entry.target.classList.add('visible');
        };
    });
};

let observer = new IntersectionObserver(displaySections , options);
allSections.forEach( section => {
    observer.observe(section);
});