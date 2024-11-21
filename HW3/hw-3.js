// Task 1 //
let password = 'пароль';
let askPassword = prompt('Введите пароль')

if (askPassword === password) {
    alert('Пароль введен верно');
}   else {alert('Пароль неверный')}


// Task 2 //
let c = 10;
if (c > 0 && c < 10) {
   console.log('Верно');
} else {
   console.log('Неверно');
}


// Task 3//
let d = 64
let e = 10

if (d > 100 || e > 100) {
    console.log('Верно');
  } else {
    console.log('Неверно.');
  }


// Task 4 //
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));


// Task 5 //
let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:   
        console.log('Зима');
    break;
    case 3:
    case 4:
    case 5:   
        console.log('Весна');
    break;    
    case 6:
    case 7:
    case 8:   
        console.log('ЗЛето');
    break;    
    case 9:
    case 10:
    case 11:   
        console.log('Осень');
    break;
default:
    console.log('Неверно');
    break;
}

// Additional Task 1 //

let input = prompt("Пожалуйста, введите любое число");
let number = parseFloat(input);

if (isNaN(number)) {
    
    alert("Ошибка: Введено не число.");
} else {
    
    if (number % 2 === 0) {
        
        alert("Число четное");
    } else {
        
        alert("Число нечетное");
    }
}

// Additional Task 2 //
let clientOS = 0; 

if (clientOS === 0) {
    console.log("Установите версию приложения для iOS по ссылке.");
} else if (clientOS === 1) {
    console.log("Установите версию приложения для Android по ссылке.");
} else {
    console.log("Неизвестная операционная система.");
}

// Additional Task 3 //
let mobileOS = 0; 
let clientDeviceYear = 2015; 


let message = '';


if (mobileOS === 0) { // iOS
    message = "Установите версию приложения для iOS по ссылке.";
} else if (mobileOS === 1) { // Android
    message = "Установите версию приложения для Android по ссылке.";
}


if (clientDeviceYear < 2015) {
    message = message.replace("Установите версию", "Установите облегченную версию");
}


console.log(message);