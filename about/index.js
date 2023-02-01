const subtitles = document.querySelectorAll(`.card-subtitle`);

texts = [
    'Team Leader, Sustainable Cities App, CSS Designer & Home Page Designer',
    'Home Page Content, Health Page Content',
    'About Us Page Content',
    'Energy Page Content',
    'Poster Creation',
    'Poster Creation'
]

let index = 0;
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

    createSubtitle(texts[index]);
    index++;
}