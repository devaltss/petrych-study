"use strict";

// ------------------- Callback ф-ции л19 ---------------

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 1000);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();


// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');

// }

// learnJS('JavaScript', done);


// ---------------- Объекты л20-----------------

//const obj = new Object();   // используется редко
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {        // создаём метод 
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;    // деструктуризация объекта
// console.log(border);

// console.log(options.name);
//console.log(options['colors']['border']);

// delete options.name;
// console.log(options);

// let counter = 0;      
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);  // подсчитываем кол-во элементов в объекте(типа длины массива)

// let counter = 0;      
// for (let key in options) {     // обычный метод подсчёта
//         counter++;
// }
// console.log(counter);  // подсчитываем кол-во элементов в объекте(типа длины массива)

//console.log(Object.keys(options));
//console.log(Object.keys(options).length);  // подсчёт при помощи свойства


// ------------------ Массивы л21 ---------------

//const arr = [1, 42, 23, 16, 8];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

//arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++){     // перебор массива
//     console.log(arr[i]);
// }

// for (let value of arr) {               // перебор массива
//     console.log(value);    // здесь можно использовать break и continue
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });                            // перебор массива



// const str = prompt('', '');
// const products = str.split(', ');
// //console.log(products);
// products.sort();
// console.log(products.join('; '));


// ---------------- Spread операторы л22 ---------------

// let a = 5,
//     b = a;

// b = b + 6;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;   // передаётся ссылка
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(numbers);
// console.log(newNumbers);


const add = {
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add));
//console.log(Object.assign({}, add));
const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adasdasd';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

