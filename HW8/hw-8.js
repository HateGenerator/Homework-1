// Task 1 // В этом и следующем задании переменная "people" повторяется, из-за чего в консоли ругается, на повтор, поэтому я во 2 задании переменную поменял.

const people = [       
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 people.sort((a, b) => a.age - b.age);
 
 console.log(people);
 
 // Task 2 //
 
 function isPositive(num) {
     return num > 0; 
 }
 
 function isMale(person) {
     return person.gender === 'male'; 
 }
 
 function filter(array, ruleFunction) {
     const result = []; 
     array.forEach(item => {
         if (ruleFunction(item)) {
             result.push(item); 
         }
     });
     return result; 
 }
 
 console.log(filter([3, -4, 1, 9], isPositive)); 
 
 const humans = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];
 
 console.log(filter(humans, isMale)); 
 
 // Task 3 //
 
 function logCurrentDate() {
     const currentDate = new Date();
     console.log(currentDate.toString()); 
 }
 
 const intervalId = setInterval(logCurrentDate, 3000);
 
 setTimeout(() => {
     clearInterval(intervalId); 
     console.log("30 секунд прошло"); 
 }, 30000);
 
 // Task 4 //
 
 function delayForSecond(callback) {
     setTimeout(callback, 1000); 
 }
 
 delayForSecond(function () {
    console.log('Привет, Глеб!');
 });
 
 // Task 5 //
 
 
 function delayForSecond(cb) {
     setTimeout(() => {
         console.log('Прошла одна секунда');
         if (cb) { cb(); }
     }, 1000);
 }
 
 
 function sayHi(name) {
     console.log(`Привет, ${name}!`); 
 }
 
 delayForSecond(() => sayHi('Глеб'));
 