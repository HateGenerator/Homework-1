// Игра 1 //
document.addEventListener('DOMContentLoaded', () => {
    let randomNumber; // Переменная для хранения случайного числа
    let attempts = 0; // Переменная для отслеживания количества попыток

    function startGame() {
        const playButton = document.querySelector('.mini-games__gamebutton');
        const hintElement = document.createElement('p'); // Создаем новый элемент для подсказок
        const guessInput = document.createElement('input'); // Создаем поле для ввода числа
        const guessButton = document.createElement('button'); // Создаем кнопку для угадывания

        // Настраиваем элементы
        guessInput.type = 'number';
        guessInput.placeholder = 'Введите ваше число';
        guessButton.textContent = 'Угадать';

        // Вставляем элементы в DOM (например, в контейнер с текстом игры)
        const gameTextContainer = document.querySelector('.mini-games__gamecard-textonly');
        gameTextContainer.appendChild(guessInput);
        gameTextContainer.appendChild(guessButton);
        gameTextContainer.appendChild(hintElement);
        
        playButton.style.display = 'none'; // Скрываем кнопку "Играть!"
        hintElement.textContent = ''; // Очищаем подсказки
        attempts = 0; // Сбрасываем количество попыток
        randomNumber = Math.floor(Math.random() * 100) + 1; // Генерируем новое случайное число от 1 до 100
        console.log(`Сгенерированное число: ${randomNumber}`); // Для отладки

        guessButton.addEventListener('click', () => {
            const guess = parseInt(guessInput.value); // Получаем число от пользователя
            attempts++; // Увеличиваем счетчик попыток

            // Проверка на правильность ответа
            if (guess === randomNumber) {
                hintElement.textContent = `Поздравляем! Вы угадали число за ${attempts} попыток!`;
                guessButton.disabled = true; // Блокируем кнопку после правильного ответа
            } else if (guess < randomNumber) {
                hintElement.textContent = 'Ваше число слишком мало. Попробуйте еще раз!';
            } else {
                hintElement.textContent = 'Ваше число слишком велико. Попробуйте еще раз!';
            }

            guessInput.value = ''; // Очищаем поле ввода после попытки
        });
    }

    // Привязываем функцию startGame к кнопке "Играть!"
    const playButton = document.querySelector('.mini-games__gamebutton');
    playButton.addEventListener('click', startGame);
});

//Игра 2//

function startGame() {
    
    const num1 = Math.floor(Math.random() * 20) + 1; 
    const num2 = Math.floor(Math.random() * 20) + 1; 
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let question = `${num1} ${operation} ${num2}`;
    let correctAnswer;

    switch (operation) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = (num1 / num2).toFixed(2); 
            break;
    }

    let userAnswer = prompt(`Решите задачу: ${question}`);

    if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
        alert("Верно! Молодец!");
    } else {
        alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
    }
}