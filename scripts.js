// Игра 1: Угадай число
function startGuessingGame() {
    let randomNumber; 
    let attempts = 0; 
    const hintElement = document.createElement('p'); 
    const guessInput = document.createElement('input'); 
    const guessButton = document.createElement('button'); 

    guessInput.type = 'number';
    guessInput.placeholder = 'Введите ваше число';
    guessButton.textContent = 'Угадать';

    const gameTextContainer = document.querySelector('.mini-games__gamecard-textonly');
    gameTextContainer.appendChild(guessInput);
    gameTextContainer.appendChild(guessButton);
    gameTextContainer.appendChild(hintElement);
    
    const playButton = document.querySelector('.mini-games__gamebutton');
    playButton.style.display = 'none'; 
    hintElement.textContent = ''; 
    attempts = 0; 
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    console.log(`Сгенерированное число: ${randomNumber}`); 

    guessButton.addEventListener('click', () => {
        const guess = parseInt(guessInput.value); 
        attempts++;

        if (guess === randomNumber) {
            hintElement.textContent = `Поздравляем! Вы угадали число за ${attempts} попыток!`;
            guessButton.disabled = true; 
        } else if (guess < randomNumber) {
            hintElement.textContent = 'Ваше число слишком мало. Попробуйте еще раз!';
        } else {
            hintElement.textContent = 'Ваше число слишком велико. Попробуйте еще раз!';
        }

        guessInput.value = ''; 
    });
}

// Игра 2: Простая арифметика

function startArithmeticGame() {

    const numberOfQuestions = 5;
    let score = 0;

    for (let i = 0; i < numberOfQuestions; i++) {
        
        const num1 = Math.floor(Math.random() * 10) + 1; 
        const num2 = Math.floor(Math.random() * 10) + 1; 
        const operation = getRandomOperation();

        const question = `${num1} ${operation} ${num2}`;
        const userAnswer = prompt(`Решите задачу: ${question}`);

        const correctAnswer = eval(question);

        if (parseInt(userAnswer) === correctAnswer) {
            alert("Верно!");
            score++;
        } else {
            alert(`Неверно! Правильный ответ: ${correctAnswer}`);
        }
    }

    alert(`Игра окончена! Ваш результат: ${score} из ${numberOfQuestions}`);
}

function getRandomOperation() {
    const operations = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
}


//Игра 3 Переверни текст//

function showInput() {
 
    const inputContainer = document.querySelector('.inputContainer');
    inputContainer.style.display = 'block';
}

function reverseText() {
   
    const userInput = document.querySelector('.userInput').value;
    
    const reversedText = userInput.split('').reverse().join('');
    
    const resultElement = document.querySelector('.result');
    resultElement.innerText = `Перевернутый текст: ${reversedText}`;
}

//Игра 4 Викторина//

function startQuiz() {
    
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0; 

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        
        let questionText = question.question + "\n" + question.options.join("\n") + "\nВаш ответ (введите номер варианта):";
        
        const userAnswer = prompt(questionText);

        if (parseInt(userAnswer) === question.correctAnswer) {
            score++; 
        }
    }

    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}

//Игра 5 Камень, ножницы, бумага//

function playGame() {

    const choices = ["камень", "ножницы", "бумага"];
    
    let userChoice = prompt("Выберите: 1 - камень, 2 - ножницы, 3 - бумага").trim().toLowerCase();

    if (userChoice === "1") {
        userChoice = "камень";
    } else if (userChoice === "2") {
        userChoice = "ножницы";
    } else if (userChoice === "3") {
        userChoice = "бумага";
    }

    if (!choices.includes(userChoice)) {
        alert("Некорректный выбор. Пожалуйста, выберите 1, 2 или 3, или введите камень, ножницы или бумага.");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}\n${result}`);
}


//Игра 6 Генератор случайных цветов//