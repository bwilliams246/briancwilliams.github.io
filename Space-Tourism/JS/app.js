/* ------- Destination HTML Page Logic------- */

/* Variables */
const navbarItems = document.getElementsByClassName('body-nav-item')
const moon = document.getElementsByClassName('moon-img')[0]
const mars = document.getElementsByClassName('mars-img')[0]
const europa = document.getElementsByClassName('europa-img')[0]
const titan = document.getElementsByClassName('titan-img')[0]

const moonInfo = document.getElementsByClassName('moon-container')[0]
const marsInfo = document.getElementsByClassName('mars-container')[0]
const europaInfo = document.getElementsByClassName('europa-container')[0]
const titanInfo = document.getElementsByClassName('titan-container')[0]

/* Event Listeners */
for (title of navbarItems) {
    title.addEventListener('click' , (e) => {
        if (e.target.innerHTML == 'MOON') {
            console.log('moon displayed')
            displayMoon()
            displayMoonInfo()
        }

        else if (e.target.innerHTML == 'MARS') {
            console.log('mars diplayed')
            displayMars()
            displayMarsInfo()
        }

        else if (e.target.innerHTML == 'EUROPA') {
            console.log('europa displayed')
            displayEuropa()
            displayEuropaInfo()
        }

        else if (e.target.innerHTML == 'TITAN') {
            console.log('titan displayed')
            displayTitan()
            displayTitanInfo()
        }
        /* This Click Event Displays The Correct Image */
    })
}

/* Functions */
function displayMoon() {
    moon.classList.remove('hide')
    mars.classList.add('hide')
    europa.classList.add('hide')
    titan.classList.add('hide')

    for (item of navbarItems) {
        item.classList.remove('current-img')

        if (item.innerHTML == 'MOON') {
            item.classList.add('current-img')
        }
    }
}

function displayMars() {
    mars.classList.remove('hide')
    moon.classList.add('hide')
    europa.classList.add('hide')
    titan.classList.add('hide')

    for (item of navbarItems) {
        item.classList.remove('current-img')

        if (item.innerHTML == 'MARS') {
            item.classList.add('current-img')
        }
    }

    
}

function displayEuropa() {
    europa.classList.remove('hide')
    moon.classList.add('hide')
    mars.classList.add('hide')
    titan.classList.add('hide')

    for (item of navbarItems) {
        item.classList.remove('current-img')

        if (item.innerHTML == 'EUROPA') {
            item.classList.add('current-img')
        }
    }

    
}

function displayTitan() {
    titan.classList.remove('hide')
    moon.classList.add('hide')
    mars.classList.add('hide')
    europa.classList.add('hide')

    for (item of navbarItems) {
        item.classList.remove('current-img')

        if (item.innerHTML == 'TITAN') {
            item.classList.add('current-img')
        }
    }
}

/* These Functions Display The Correct Description And Header */
function displayMoonInfo() {
    moonInfo.classList.remove('hide')
    marsInfo.classList.add('hide')
    europaInfo.classList.add('hide')
    titanInfo.classList.add('hide')
}

function displayMarsInfo() {
    marsInfo.classList.remove('hide')
    moonInfo.classList.add('hide')
    europaInfo.classList.add('hide')
    titanInfo.classList.add('hide')
}

function displayEuropaInfo() {
    europaInfo.classList.remove('hide')
    moonInfo.classList.add('hide')
    marsInfo.classList.add('hide')
    titanInfo.classList.add('hide')
}

function displayTitanInfo() {
    titanInfo.classList.remove('hide')
    moonInfo.classList.add('hide')
    marsInfo.classList.add('hide')
    europaInfo.classList.add('hide')
}



/* ------- Crew HTML Page Logic ------- */

/* Variables */
const allCircles = document.getElementsByClassName('circle')
const allCrewMembers = document.getElementsByClassName('img')
const allInfo = document.getElementsByClassName('info-container')

/* Event Listeners */
for (circle of allCircles) {
    circle.addEventListener('click' , (e) => {
        let selector = e.target.classList[0]

        if (selector == 'selector-one') {
            console.log('first crew member')
            displayCrewInfo(e , 0 , 4)
        }

        else if (selector == 'selector-two') {
            console.log('second crew member')
            displayCrewInfo(e , 1 , 5)
        }

        else if (selector == 'selector-three') {
            console.log('third crew member')
            displayCrewInfo(e , 2 , 6)
        }

        else if (selector == 'selector-four') {
            console.log('fourth crew member')
            displayCrewInfo(e , 3 , 7)
        }
    })
}

/* Functions */
function displayCrewInfo (e , firstArrayIndex , secondArrayIndex) {
    if (e.target == allCircles[firstArrayIndex] || e.target === allCircles[secondArrayIndex]) {
        for (circle of allCircles) {
            circle.classList.remove('current-person')
        }

        for (crewMember of allCrewMembers) {
            crewMember.classList.add('hide')
        }

        for (info of allInfo) {
            info.classList.add('hide')
        }

        allCircles[firstArrayIndex].classList.add('current-person')
        allCircles[secondArrayIndex].classList.add('current-person')
        allCrewMembers[firstArrayIndex].classList.remove('hide')
        allCrewMembers[secondArrayIndex].classList.remove('hide')
        allInfo[firstArrayIndex].classList.remove('hide')
        allInfo[secondArrayIndex].classList.remove('hide')
    }
}



/* ------- Tech HTML Page Logic ------- */

/* Variables */
const allTechCircles = document.getElementsByClassName('nav-circle')
const allTechImages = document.getElementsByClassName('tech-img')

/* Click Listeners */
for (circle of allTechCircles) {
    circle.addEventListener('click' , function (e) {
        if (e.target.innerHTML == '1') {
            if (e.target === allTechCircles[3]) {
                currentCircle(3)
                displayContent(3)
            }

            else {
                currentCircle(0)
                displayContent(0)
            }
        }

        else if (e.target.innerHTML == '2') {
            if (e.target === allTechCircles[4]) {
                currentCircle(4)
                displayContent(4)
            }
            

            else {
                currentCircle(1)
                displayContent(1)
            }
        }

        else if (e.target.innerHTML == '3') {
            if (e.target === allTechCircles[5]) {
                currentCircle(5)
                displayContent(5)
            }
            
            else {
                currentCircle(2)
                displayContent(2)
            }
        }
    })
}

/* Functions */
function displayContent(contentIndexNumber) {
    let allContainers = document.getElementsByClassName('info-container')
    let currentContainer = document.getElementsByClassName('info-container')[contentIndexNumber]
    let currentImg = document.getElementsByClassName('tech-img')[contentIndexNumber]

    for (box of allContainers) {
        box.classList.add('hide')
    }

    for (img of allTechImages) {
        img.classList.add('hide')
    }

    currentContainer.classList.remove('hide')
    currentImg.classList.remove('hide')
}

function currentCircle(contentIndexNumber) {
    for (circle of allTechCircles) {
        circle.classList.remove('current-circle')
    }

    document.getElementsByClassName('nav-circle')[contentIndexNumber].classList.add('current-circle')
}



/* ------- Navbar Mobile Logic ------- */

/* Variables */
const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
const openedMenu = document.getElementsByClassName('opened-menu')[0]
const xBtn = document.getElementsByClassName('x-btn')[0]

/* Click Listeners */
hamburgerMenu.addEventListener('click' , function() {
    openedMenu.classList.remove('hide')
    hamburgerMenu.classList.add('hide')
})

xBtn.addEventListener('click' , () => {
    hamburgerMenu.classList.remove('hide')
    openedMenu.classList.add('hide')
})