"use strict";

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('Вам есть 18', '18');
// console.log(answer + 5);


//const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

//document.write(answers);
// console.log(typeof(answers));
// console.log(typeof(null));


// --------------- Условия л13 --------------------

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');

// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// const num = 50;

// (num === 51) ? console.log('Ok!') : console.log('Error');


// const num = '50';

// switch (num) {
//     case '49':
//         console.log('Неверно');
//         break;
//     case '100':
//         console.log('Неверно');
//         break;
//     case '50':
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;         
// }


//--------------- Циклы л14 ------------

//let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         //break;
//         continue;
//     }

//     console.log(i); 
// }


//------------------- Функции л16 --------------

// let num = 20;

// function showFirstMessage(text) {
//     //console.log('Hello World!');
//     console.log(text);
//     //num = 10;
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


// function ret() {
//     let num = 55;
//     // some code
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {      // expression вызывается после объявления
//     console.log('Helloo');
// };

// logger();


// const calc = (a, b) => { return a + b };


// ----------------- Методы и свойства строк и чисел л17 --------

const str = 'test';
const arr = [1, 2, 3];

//console.log(str.length);
//console.log(arr.length);
//console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q'));


const logg = 'Hello world';
//console.log(logg.slice(6, 10));   // вырезание из строки
//console.log(logg.substring(6, 11));   // вырезание  из строки
console.log(logg.substr(6, 5));   // вырезание  из строки


const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
//console.log(parseInt(test));
console.log(parseFloat(test));



