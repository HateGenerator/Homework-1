// // Task 1 //

// const str = 'js';
// const upperStr = str.toUpperCase();
// console.log(upperStr); 

// // Task 2 //

// function filterStringsByPrefix(stringArray, prefix) {
    
//     const lowerPrefix = prefix.toLowerCase();

//     return stringArray.filter(str => str.toLowerCase().startsWith(lowerPrefix));
// }

// const strings = ["Apple", "banana", "apricot", "cherry", "avocado"];
// const prefix = "a";
// const result = filterStringsByPrefix(strings, prefix);

// console.log(result);  

// // Task 3 //

// const number = 32.58884;

// const roundedDown = Math.floor(number);
// console.log("Округление до меньшего целого:", roundedDown); 

// const roundedUp = Math.ceil(number);
// console.log("Округление до большего целого:", roundedUp); 

// const roundedNearest = Math.round(number);
// console.log("Округление до ближайшего целого:", roundedNearest); 

// // Task 4 //

// const numbers = [52, 53, 49, 77, 21, 32];

// const minValue = Math.min(...numbers);
// console.log("Минимальное значение:", minValue); 

// const maxValue = Math.max(...numbers);
// console.log("Максимальное значение:", maxValue); 

// // Task 5 //

// function getRandomNumber() {

//     const randomNumber = Math.random();
//     const randomInteger = Math.floor(randomNumber * 10) + 1;
    
//     console.log(randomInteger);
// }

// getRandomNumber();

// // Task 6 //

// function generateRandomArray(n) {

//     if (!Number.isInteger(n) || n <= 0) {
//         throw new Error("Пожалуйста, введите положительное целое число.");
//     }

//     const length = Math.floor(n / 2);
//     const randomArray = [];

//     for (let i = 0; i < length; i++) {
//         const randomNumber = Math.floor(Math.random() * n); 
//         randomArray.push(randomNumber); 
//     }

//     return randomArray; 
// }

// const randomNumbers = generateRandomArray(10);
// console.log(randomNumbers); 

// // Task 7 //

// function getRandomInRange(min, max) {

//     if (!Number.isInteger(min) || !Number.isInteger(max)) {
//         throw new Error("Пожалуйста, введите два целых числа.");
//     }

//     if (min > max) {
//         throw new Error("Минимальное значение должно быть меньше или равно максимальному значению.");
//     }

//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     return randomNumber; 
// }

// const randomNum = getRandomInRange(5, 15);
// console.log(randomNum); 

// // Task 8 //

// const currentDate = new Date();
// const formattedDate = currentDate.toLocaleDateString(); 
// console.log(formattedDate); 

// // Task 9 //

// const presentDate = new Date();

// const futureDate = new Date(presentDate);
// futureDate.setDate(presentDate.getDate() + 73);

// console.log(futureDate.toLocaleDateString()); 

// // Task 10 //

// function formatDateAndTime(date) {

//     const months = [
//         "января", "февраля", "марта", "апреля", "мая", "июня",
//         "июля", "августа", "сентября", "октября", "ноября", "декабря"
//     ];

//     const daysOfWeek = [
//         "воскресенье", "понедельник", "вторник", "среда", 
//         "четверг", "пятница", "суббота"
//     ];

//     const day = date.getDate(); 
//     const month = months[date.getMonth()]; 
//     const year = date.getFullYear(); 
//     const dayOfWeek = daysOfWeek[date.getDay()]; 

//     const hours = String(date.getHours()).padStart(2, '0'); 
//     const minutes = String(date.getMinutes()).padStart(2, '0'); 
//     const seconds = String(date.getSeconds()).padStart(2, '0'); 

//     const dateString = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.`;
//     const timeString = `Время: ${hours}:${minutes}:${seconds}`;

//     return `${dateString}\n${timeString}`;
// }

// const dateNow = new Date(); 
// console.log(formatDateAndTime(dateNow)); 
