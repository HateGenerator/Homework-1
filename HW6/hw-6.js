// // Task 1 //

// const array = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]); 
//     if (array[i] === 10) {
//         break; 
//     }
// }

// // Task 2 //

// const array2 = [1, 5, 4, 10, 0, 3];

// const index = array2.findIndex(element => element === 4);

// console.log("Индекс значения 4:", index);

// console.log(index); 

// // Task 3 //

// const array3 = [1, 3, 5, 10, 20];
// const result = array3.join(' '); 
// console.log(result); 

// // Task 4 //

// const rows = 3;
// const cols = 3;

// let array4 = [];

// for (let i = 0; i < rows; i++) {
//     let row = [];
//     for (let j = 0; j < cols; j++) {
//         row.push(1);
//     }
//     array4.push(row);
// }

// console.log(array4);

// // Task 5 //

// let array5 = [1, 1, 1];

// array5.push(2, 2, 2);

// console.log(array5);

// // Task 6 //

// let array6 = [9, 8, 7, 'a', 6, 5];

// array6.sort((a, b) => {
    
//     return a.toString().localeCompare(b.toString());
// });

// if (array6[array6.length - 1] === 'a') {
//     array6.pop(); 
// } else {
    
//     array6 = array6.filter(element => element !== 'a');
// }

// console.log("Отсортированный и очищенный массив:", array);


// // Task 7 //

// const array7 = [9, 8, 7, 6, 5];

// const userGuess = prompt("Угадайте число из массива: [9, 8, 7, 6, 5]");

// const guessedNumber = Number(userGuess);

// if (array7.includes(guessedNumber)) {
//     alert("Угадал");
// } else {
//     alert("Не угадал");
// }

// // Task 8 //

// const str = 'abcdef';

// const reversedStr = str.split('').reverse().join('');

// console.log(reversedStr); 

// // Task 9 //

// let array9 = [[1, 2, 3], [4, 5, 6]];

// let combinedArray = [...array9[0], ...array9[1]];

// let flattenedArray = array.flat();

// console.log("Объединенный массив с использованием spread:", combinedArray);
// console.log("Объединенный массив с использованием flat:", flattenedArray);


// // Task 10//

// const numbers = [3, 5, 1, 9, 7, 2, 4]; 

// for (let i = 0; i < numbers.length - 1; i++) {

//     const sum = numbers[i] + numbers[i + 1];
    
//     console.log(`Сумма элементов ${numbers[i]} и ${numbers[i + 1]}: ${sum}`);
// }

// // Task 11 //

// function squareNumbers(numbers) {
//     return numbers.map(function(num) {
//         return num * num; 
//     });
// }

// const inputArray = [1, 2, 3, 4, 5]; 
// const squaredArray = squareNumbers(inputArray); 

// console.log(squaredArray); 

// // Task 12 //

// function getStringLengths(strings) {
//     return strings.map(function(str) {
//         return str.length; 
//     });
// }

// const inputArray2 = ["apple", "banana", "cherry", "date"]; 
// const lengthsArray = getStringLengths(inputArray2); 

// console.log(lengthsArray); // 

// // Task 13 //

// function getNegativeNumbers(numbers) {
//     return numbers.filter(function(num) {
//         return num < 0; 
//     });
// }

// const inputArray3 = [1, -2, 3, -4, 5, -6]; 
// const negativeArray = getNegativeNumbers(inputArray3);

// console.log(negativeArray); 

// // Task 14 //

// const randomArray = [];
// for (let i = 0; i < 10; i++) {
//     const randomValue = Math.random() * 10; 
//     randomArray.push(Math.floor(randomValue)); 
// }

// const evenArray = randomArray.filter(function(num) {
//     return num % 2 === 0; 
// });

// console.log("Исходный массив:", randomArray);
// console.log("Массив с четными значениями:", evenArray);

// // Task 15 //

// const randomArray2 = [];
// for (let i = 0; i < 6; i++) {
//     const randomValue = Math.random() * 9 + 1; 
//     randomArray2.push(Math.floor(randomValue)); 
// }

// const sum = randomArray2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// const average = sum / randomArray.length;

// console.log("Сгенерированный массив:", randomArray2);
// console.log("Среднее арифметическое:", average);