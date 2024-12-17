// // Task 1 //
// function min(a, b) {
//     return a < b ? a : b; 
// }

// console.log(min(8, 4)); 
// console.log(min(6, 6)); 
// console.log(min(10, 20)); 


// // Task 2 //
// function checkEvenOdd(n) {
//     if (n % 2 === 0) {
//         return 'Число четное';
//     } else {
//         return 'Число нечетное';
//     }
// }

// console.log(checkEvenOdd(4)); 
// console.log(checkEvenOdd(7)); 
// console.log(checkEvenOdd(0)); 

// // Task 3 //
// function printSquare(n) {
//     const square = n * n;
//     console.log(square);
// }

// printSquare(4); 
// printSquare(5); 

// function getSquare(n) {
//     return n * n;
// }

// const result1 = getSquare(4);
// console.log(result1); 

// const result2 = getSquare(5);
// console.log(result2); 

// // Task 4 //
// function askAge() {
//     const age = prompt("Сколько вам лет?"); 
//     const ageNumber = Number(age);

//     if (isNaN(ageNumber)) {
//         console.log('Вы ввели неправильное значение');
//     } else if (ageNumber < 0) {
//         console.log('Вы ввели неправильное значение');
//     } else if (ageNumber >= 0 && ageNumber <= 12) {
//         console.log('Привет, друг!');
//     } else if (ageNumber >= 13) {
//         console.log('Добро пожаловать!');
//     }
// }
// askAge();

// // Task 5//
// function multiplyNumbers(a, b) {
//     const num1 = Number(a);
//     const num2 = Number(b);
    
//     if (isNaN(num1) || isNaN(num2)) {
//         return 'Одно или оба значения не являются числом';
//     }

//     return num1 * num2;
// }

// console.log(multiplyNumbers(5, 10)); 
// console.log(multiplyNumbers('5', '10')); 
// console.log(multiplyNumbers(5, 'abc')); 
// console.log(multiplyNumbers(null, 10)); 


// // Task 6 //
// function cubeNumber() {
//     const input = prompt("Введите число от 0 до 10:"); 
//     const number = Number(input); 

//     if (isNaN(number)) {
//         return 'Переданный параметр не является числом';
//     }

//     const cubedValue = Math.pow(number, 3);
//     return `${number} в кубе равняется ${cubedValue}`;
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(cubeNumber());
// }


// // Task 7 //
// function createCircle(radius) {
//     return {
//         radius: radius,
//         getArea: function() {
//             return Math.PI * Math.pow(this.radius, 2); // Площадь круга: π * r^2
//         },
//         getPerimeter: function() {
//             return 2 * Math.PI * this.radius; // Периметр окружности: 2 * π * r
//         }
//     };
// }

// const circle1 = createCircle(5); 
// const circle2 = createCircle(10); 


// console.log(`Circle 1:`);
// console.log(`Площадь: ${circle1.getArea().toFixed(2)}`); 
// console.log(`Периметр: ${circle1.getPerimeter().toFixed(2)}`); 

// console.log(`Circle 2:`);
// console.log(`Площадь: ${circle2.getArea().toFixed(2)}`); 
// console.log(`Периметр: ${circle2.getPerimeter().toFixed(2)}`); 



