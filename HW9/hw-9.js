const header = document.querySelector('.header'); 
const toggleButton = document.querySelector('.toggleButton');

toggleButton.addEventListener('click', function() {
    if (header.style.display === 'none') {
        header.style.display = 'block'; 
        toggleButton.textContent = 'Скрыть'; 
    } else {
        header.style.display = 'none'; 
        toggleButton.textContent = 'Показать'; 
    }
});

const text = document.querySelector('.text'); 
const colorButton = document.querySelector('.colorButton'); 

colorButton.addEventListener('click', function() {
    text.style.color = 'blue'; 
});


const changeColorButton = document.querySelector('.changeColorButton');
const changeTextButton = document.querySelector('.changeTextButton');
const header2 = document.querySelector('.header2');
const text2 = document.querySelector('.text2');

changeColorButton.addEventListener('click', function() {
    text2.style.color = 'blue'; 
});

changeTextButton.addEventListener('click', function() {
    header2.textContent = 'Привет, мир!'; 
});


const resetColorButton = document.querySelector('.resetColorButton');

resetColorButton.addEventListener('click', function() {
    text2.style.color = ''; 
});


const changeDescriptionButton = document.querySelector('.changeDescriptionButton');

changeDescriptionButton.addEventListener('click', function() {
    const descriptions = document.querySelectorAll('.description'); 
    descriptions.forEach(function(description) {
        description.textContent = 'Измененный текст'; 
    });
});


const changeParagraphsButton = document.querySelector('.changeParagraphsButton');

changeParagraphsButton.addEventListener('click', function() {
    const paragraphs = document.querySelectorAll('p.description'); 
    paragraphs.forEach(function(paragraph) {
        paragraph.textContent = 'Новый текст'; 
    });
});


const addParagraphButton = document.querySelector('.addParagraphButton');

addParagraphButton.addEventListener('click', function() {
    const newParagraph = document.createElement('p'); 
    newParagraph.className = 'description'; 
    newParagraph.textContent = 'Новый абзац с описанием.'; 
    document.body.appendChild(newParagraph); 
});


const removeParagraphButton = document.querySelector('.removeParagraphButton');

removeParagraphButton.addEventListener('click', function() {
    const paragraphs = document.querySelectorAll('p.description'); 
    if (paragraphs.length > 0) {
        const lastParagraph = paragraphs[paragraphs.length - 1]; 
        lastParagraph.remove(); 
}});

const removeFirstDescriptionButton = document.querySelector('.removeFirstDescriptionButton');

removeFirstDescriptionButton.addEventListener('click', function() {
    const firstDescription = document.querySelector('.description'); 
    if (firstDescription) {
        firstDescription.remove(); 
    }
});


const changeColorDescriptionButton = document.querySelector('.changeColorDescriptionButton');

changeColorDescriptionButton.addEventListener('click', function() {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        description.style.color = 'red'; 
    });
});
