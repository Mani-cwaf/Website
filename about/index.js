const subtitles = document.querySelectorAll(`.card-subtitle`);

texts = [
    'Team Leader, Sustainable Cities App, CSS Designer & Home Page Designer',
    'Home Page Content, Health Page Content',
    'About Us Page Content',
    'Health Content',
    'Poster Creation',
    'Energy Creation'
]

let subtitleIndex = 0;
for (const subtitle of subtitles) {
    const createWord = (text, index) => {
        const word = document.createElement(`span`);
    
        word.innerHTML = `${text} `;
    
        word.classList.add(`card-subtitle-word`);
    
        word.style.transitionDelay = `${index * 50}ms`;
    
        return word;
    }
    
    const addWord = (text, index) => subtitle.appendChild(createWord(text, index));
    
    const createSubtitle = text => text.split(` `).map(addWord);

    createSubtitle(texts[subtitleIndex]);
    subtitleIndex++;
}

const cards = document.querySelectorAll('.card');

activeCardIndex = 0;

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
    cards[activeCardIndex].style.display = 'block'
}

document.querySelector('.next').addEventListener('click', () => {
    activeCardIndex++;
    refresh();
});
document.querySelector('.prev').addEventListener('click', () => {
    activeCardIndex--;
    refresh();
});