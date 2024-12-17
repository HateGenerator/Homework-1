// // Task 1 //
// for (let i = 0; i < 2; i++) {
//     console.log("Привет");
// }

// // Task 2 //
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// // Task 3 //
// for (let i = 7; i <= 22; i++) {
//     console.log(i);
// }

// // Task 4 //
// const obj = {
//     "Коля": '200',
//     "Вася": '300',
//     "Петя": '400'
// };

// for (let name in obj) {
//     console.log(`${name} — зарплата ${obj[name]} долларов`);
// }


// // Task 5//
// let n = 1000;
// let num = 0;

// while (n >= 50) {
//     n /= 2; // Делим n на 2
//     num++;  // Увеличиваем счетчик итераций
// }

// console.log(`Результат: ${n}`);
// console.log(`Количество итераций: ${num}`);


// // Task 6 //
// const firstFriday = 2; 
// const daysInMonth = 31; 

// // Перебираем все дни месяца
// for (let day = firstFriday; day <= daysInMonth; day += 7) {
//     console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
// }


// // AD Task 1 //
// let k = 100; 
// let iterations = 0; 

// while (k >= 0) {
//     k -= 7; 
//     iterations++; 
// }

// console.log(`Результат: ${k}`);
// console.log(`Количество итераций: ${iterations}`);


// // AD Task 2 //
// const months = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь"
// ];

// for (let i = 0; i < months.length; i++) {
//     console.log(`${i + 1}. ${months[i]}`);
// }


// // AD Task 3 //
// const book = {
//     title: "1984",
//     author: "Джордж Оруэлл",
//     year: 1949,
//     genre: "Дистопия"
// };

// for (const key in book) {
//     if (key in book) { 
//         console.log(`${key}: ${book[key]}`);
//     }
// }


// // AD Task 4 //
// const randomNumbers = [];
// for (let i = 0; i < 10; i++) {
//     randomNumbers.push(Math.floor(Math.random() * 100));
// }

// let minNumber = randomNumbers[0];

// for (let i = 1; i < randomNumbers.length; i++) {
//     if (randomNumbers[i] < minNumber) {
//         minNumber = randomNumbers[i];
//     }
// }

// console.log("Случайные числа:", randomNumbers);
// console.log("Минимальное число:", minNumber);
