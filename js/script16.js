"use strict";

// ---------------- Классы л47 ----------

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'grey');

// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());


// ---------- Rest оператор и парамет по умолч л49 ---------------

// const log = function(a, b, ...rest) {             // rest можно назвать как угодно
//     console.log(a, b, rest);
// }

// log('basic', 'rest', 'operator', 'usage', 'any');

// function calcOrDouble(number, basis = 2) {
//     //basis = basis || 2;
//     console.log(number * basis);
// }

// calcOrDouble(3);


// ----------------- JSON Л51 ----------------------

// const persone = {
//     name: 'Alex',
//     tel: '+744444444',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };

//console.log(JSON.stringify(persone));
//console.log(JSON.parse(JSON.stringify(persone)));

// const clone = JSON.parse(JSON.stringify(persone));
// clone.parents.mom = 'Ann';
// console.log(persone);
// console.log(clone);


// --------------------- Promise л55 ------------------

// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//             //reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(() => {
//     console.log('Finally');
// });

// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });


// -------------------- Arrays л57 ----------------------

// -- filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// -- map

// let answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

// -- every/some

//const some = [4, 'qwq', 'sfreferf'];
//const some = [4, 5, 7];

//console.log(some.some(item => typeof(item) === 'number'));

//console.log(some.every(item => typeof(item) === 'number'));

// -- reduce

// const arr = [4, 5, 1, 3, 2, 6];
//                         // 3      4
//                         // 4      5
//                         // 9      1
//                         // 10     3
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// // const res = arr.reduce((sum, current) => sum + ', ' + current);
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);

