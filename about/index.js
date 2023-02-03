const subtitles = document.querySelectorAll(`.card-subtitle`);

texts = [
    'Team Leader, Sustainable Cities App, App Page, Page Design, Carousel Designs',
    'Home Page Content, Navigation Bar Design',
    'About Us Page Content',
    'Health Page Content',
    'Poster Creation',
    'Energy Page Content'
]

let subtitleIndex = 0;
for (const subtitle of subtitles) {
    const createWord = (text, index) => {
        const word = document.createElement(`span`);
    
        word.innerHTML = `${text} `;
    
        word.classList.add(`card-subtitle-word`);
    
        word.style.transitionDelay = `${index * 40}ms`;
    
        return word;
    }
    
    const addWord = (text, index) => subtitle.appendChild(createWord(text, index));
    
    const createSubtitle = text => text.split(` `).map(addWord);

    createSubtitle(texts[subtitleIndex]);
    subtitleIndex++;
}

const cards = document.querySelectorAll('.card');

activeCardIndex = 0;
cards[0].style.display = 'block';

const refresh = () => {
    if (activeCardIndex < 0) {
        activeCardIndex = cards.length - 1;
    }
    if (activeCardIndex > cards.length - 1) {
        activeCardIndex = 0;
    }
    for (const card of cards) {
        card.style.display = 'none';
    }
    cards[activeCardIndex].style.display = 'block';
    cards[activeCardIndex].style.left = 0;
}

let hoveredcard;
let mouseOver = false;
let mouseDown = false
let mouseX = 0;

for (const card of cards) {
    card.addEventListener('mouseover', () => {
        hoveredcard = card;
        mouseOver = true;
    });
    card.addEventListener('mouseleave', () => {
        mouseOver = false;
    });
}

window.onmousedown = e => {
    mouseDown = true
    mouseX = e.clientX;
}

window.onmousemove = e => {
    if (mouseDown) {
        let distance = e.clientX - mouseX;
        if (distance < 100 && distance > -100) {
            hoveredcard.style.left = distance;
        }
    }
}

window.onmouseup = e => {
    let distance = e.clientX - mouseX;
    if (distance > 50) {
        activeCardIndex--;
        refresh();
    } else if (distance < -50) {
        activeCardIndex++;
        refresh();
    } else {
        hoveredcard.style.left = 0;
    }
    mouseDown = false
}